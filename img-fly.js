function onImagePreviewClick(imageUrl, imageSize) {
  document.getElementById('modal__image').src = imageUrl;

  const footerNode = document.getElementById('modal__footer');
  while (footerNode.firstChild) {
    footerNode.removeChild(footerNode.firstChild);
  }

  const text = 'Size of the image is ' + imageSize + ' KB.';
  const content = document.createTextNode(text);
  footerNode.appendChild(content);

  document.getElementById('card__modal').classList.add('card__modal--show');
}

function onImagePreviewClose() {
  document.getElementById('card__modal').classList.remove('card__modal--show');
}

window.onclick = function(event) {
  if (event.target == document.getElementById('card__modal')) {
    document.getElementById('card__modal').classList.remove('card__modal--show');
  }
}
