// Guide helper script for Markdown Viewer
function tryInViewer(btnOrText) {
  var text = '';
  if (typeof btnOrText === 'string') {
    text = btnOrText;
  } else if (btnOrText && btnOrText.closest) {
    var parent = btnOrText.closest('.example-code') || btnOrText.closest('.example');
    if (parent) {
      var pre = parent.querySelector('pre');
      if (pre) {
        text = pre.innerText || pre.textContent || '';
      }
    }
  }
  if (!text) return;
  try {
    sessionStorage.setItem('md_preview_text', text.trim());
    window.location.href = '/';
  } catch (e) {
    window.location.href = '/?text=' + encodeURIComponent(text.trim());
  }
}
window.tryInViewer = tryInViewer;
