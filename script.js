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
const stats = {
  Vigor: 10,
  Mind: 10,
  Endurance: 10,
  Strength: 10,
  Dexterity: 10,
  Intelligence: 10,
  Faith: 10,
  Arcane: 10,
};

function renderAttributes() {
  const container = document.getElementById("attributes");
  container.innerHTML = "";

  Object.entries(stats).forEach(([key, value]) => {
    const attributeDiv = document.createElement("div");
    attributeDiv.classList.add("attribute");

    attributeDiv.innerHTML = `
      <div class="attribute-name">${key}</div>
      <div class="attribute-controls">
        <button onclick="decrease('${key}')">-</button>
        <div class="attribute-value" id="${key}">${value}</div>
        <button onclick="increase('${key}')">+</button>
      </div>
    `;

    container.appendChild(attributeDiv);
  });
}

function increase(attr) {
  stats[attr]++;
  document.getElementById(attr).textContent = stats[attr];
}

function decrease(attr) {
  if (stats[attr] > 1) {
    stats[attr]--;
    document.getElementById(attr).textContent = stats[attr];
  }
}

document.addEventListener("DOMContentLoaded", renderAttributes);
