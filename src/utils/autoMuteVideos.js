/**
 * autoMuteVideos.js
 * - All <video> elements autoplay muted on load (browser requirement)
 * - On first user interaction (click / tap / key): unmute all visible videos
 * - When a video scrolls out of view  → mute it
 * - When a video scrolls back into view → unmute it (if user has interacted)
 */

let userHasInteracted = false;
const trackedVideos = new Set();

function isVideoVisible(video) {
  const rect = video.getBoundingClientRect();
  return (
    rect.top < window.innerHeight * 0.85 &&
    rect.bottom > window.innerHeight * 0.15
  );
}

function unmuteVideo(video) {
  if (video.muted) {
    video.muted = false;
    video.play().catch(() => {
      // Browser still blocked → keep muted
      video.muted = true;
    });
  }
}

function muteVideo(video) {
  if (!video.muted) video.muted = true;
}

function onFirstInteraction() {
  if (userHasInteracted) return;
  userHasInteracted = true;

  // Unmute every currently-visible video
  trackedVideos.forEach(video => {
    if (isVideoVisible(video)) {
      unmuteVideo(video);
    }
  });

  // Clean up listeners – only needed once
  window.removeEventListener('click', onFirstInteraction, true);
  window.removeEventListener('touchstart', onFirstInteraction, true);
  window.removeEventListener('keydown', onFirstInteraction, true);
}

function onScroll() {
  trackedVideos.forEach(video => {
    if (isVideoVisible(video)) {
      if (userHasInteracted) unmuteVideo(video);
    } else {
      muteVideo(video);
    }
  });
}

function trackVideo(video) {
  if (trackedVideos.has(video)) return;

  // Ensure it starts muted & playing
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  video.loop = true;
  video.play().catch(() => {});

  trackedVideos.add(video);
}

export async function initAutoMuteVideos() {
  // Grab all videos currently in the DOM
  document.querySelectorAll('video').forEach(trackVideo);

  // Watch for any videos added later (e.g. lazy-mounted React components)
  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.tagName === 'VIDEO') trackVideo(node);
        node.querySelectorAll?.('video').forEach(trackVideo);
      });
    });
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  // First-interaction listeners (capture phase so they fire before anything else)
  window.addEventListener('click', onFirstInteraction, { capture: true, passive: true });
  window.addEventListener('touchstart', onFirstInteraction, { capture: true, passive: true });
  window.addEventListener('keydown', onFirstInteraction, { capture: true, passive: true });

  // Scroll-based muting
  window.addEventListener('scroll', onScroll, { passive: true });
}

export default initAutoMuteVideos;
