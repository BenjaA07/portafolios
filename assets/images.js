// Si una imagen no carga, intenta la referencia pública y luego la ilustración local.
for (const img of document.querySelectorAll('img[data-local]')) {
  const fallback = () => {
    if (img.dataset.stage === 'local') return;
    if (img.dataset.stage !== 'public' && img.dataset.public) {
      img.dataset.stage = 'public'; img.src = img.dataset.public;
      img.alt = img.dataset.alt;
    } else {
      img.dataset.stage = 'local'; img.src = img.dataset.local;
      img.alt = 'Ilustración: ' + img.dataset.alt;
    }
  };
  img.addEventListener('error', fallback);
  if (img.complete && !img.naturalWidth) fallback();
}
