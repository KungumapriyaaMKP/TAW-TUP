// Auto mute/unmute for HTML5 videos and YouTube iframes on visibility
function loadYouTubeAPI() {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) return resolve(window.YT);
    const existing = document.querySelector('script[data-youtube-api]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.YT));
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.setAttribute('data-youtube-api', '1');
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    document.head.appendChild(s);
  });
}

function ensureYouTubeIframe(iframe) {
  try {
    const src = iframe.getAttribute('src') || '';
    if (!src.includes('youtube.com/embed')) return false;
    let newSrc = src;
    if (!/[?&]enablejsapi=1/.test(newSrc)) {
      newSrc += (newSrc.includes('?') ? '&' : '?') + 'enablejsapi=1';
    }
    if (!/[?&]origin=/.test(newSrc)) {
      newSrc += '&origin=' + encodeURIComponent(window.location.origin);
    }
    iframe.setAttribute('src', newSrc);
    if (!iframe.id) iframe.id = 'yt-iframe-' + Math.random().toString(36).slice(2,9);
    return true;
  } catch (e) {
    return false;
  }
}

export async function initAutoMuteVideos(options = {}) {
  const threshold = options.threshold || 0.6;

  const players = new Map();

  const ytIframes = Array.from(document.querySelectorAll('iframe')).filter(ifr => (ifr.src || '').includes('youtube.com/embed'));
  const handledYouTube = [];
  ytIframes.forEach(ifr => {
    if (ensureYouTubeIframe(ifr)) handledYouTube.push(ifr);
  });

  const videos = Array.from(document.querySelectorAll('video'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      const visible = entry.intersectionRatio >= threshold;
      if (el.tagName === 'VIDEO') {
        try {
          if (visible) {
            el.muted = false;
            el.play().catch(() => {});
          } else {
            el.muted = true;
          }
        } catch (e) {}
      } else if (el.tagName === 'IFRAME') {
        const p = players.get(el.id);
        if (p && typeof p.mute === 'function') {
          try {
            if (visible) {
              p.unMute();
              if (typeof p.playVideo === 'function') p.playVideo();
            } else {
              p.mute();
            }
          } catch (e) {}
        } else {
          // if player not ready yet, queue via dataset
          el.dataset.autoplayPending = visible ? '1' : '0';
        }
      }
    });
  }, { threshold: [threshold] });

  videos.forEach(v => {
    // ensure muted by default to allow autoplay
    v.muted = true;
    observer.observe(v);
  });

  // init YouTube players if any
  if (handledYouTube.length > 0) {
    const YT = await loadYouTubeAPI();
    handledYouTube.forEach(ifr => {
      try {
        const player = new YT.Player(ifr.id, {});
        players.set(ifr.id, player);
        // observe iframe container
        observer.observe(ifr);
        // apply pending state
        const pending = ifr.dataset.autoplayPending;
        if (pending === '1') {
          try { player.unMute(); player.playVideo(); } catch (e) {}
        } else {
          try { player.mute(); } catch (e) {}
        }
      } catch (e) {}
    });
  }
}

export default initAutoMuteVideos;
