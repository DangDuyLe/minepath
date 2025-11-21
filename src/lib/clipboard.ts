export async function copyServerAddressAndScroll(address = 'play.minepath.fun') {
  try {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(address);
    } else {
      const ta = document.createElement('textarea');
      ta.value = address;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
  } catch (e) {
    // best-effort fallback
    try {
      const ta = document.createElement('textarea');
      ta.value = address;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    } catch (_e) {
      // ignore
    }
  }

  // Scroll to HowToPlay section if present
  const el = document.getElementById('how-to-play');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default copyServerAddressAndScroll;
