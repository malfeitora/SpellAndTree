function addItem() {
  const input = document.getElementById('item-image');
  const file = input.files[0];

  if (!file) {
    alert('Selecione uma imagem primeiro!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.createElement('img');
    img.src = e.target.result;

    const div = document.createElement('div');
    div.classList.add('item');
    div.appendChild(img);

    document.getElementById('items-container').appendChild(div);
  };
  reader.readAsDataURL(file);
}
