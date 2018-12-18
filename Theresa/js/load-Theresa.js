
async function supportsWebp() {
  if (!self.createImageBitmap)
    return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
  if (await supportsWebp()) {
    window.l2dmodel = "/Theresa/data/model_chrome.json";
    loadL2d();
  } else {
    window.l2dmodel = "/Theresa/data/model.json";
    loadL2d();
  }
})();

function loadL2d() {
    if (jQuery(window).width() >= 830) {
      loadlive2d("live2d", window.l2dmodel);
      showLive2d();
    } else {
      hideLive2d();
    }
}
jQuery(function() {
  jQuery("#landlord").draggable();
});
