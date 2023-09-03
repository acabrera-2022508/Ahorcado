export default class View {
  constructor() {
    this.view = null;
    this.tableContainer = document.getElementById('table');
  }

  setView(view) {
    this.view = view;
  }

  drawUnderlines(length) {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    table.setAttribute('class', 'arial')

    for (let i = 0; i < length; i++) {
      let td = document.createElement('td');
      td.innerHTML = '<h3>_</h3>';

      tr.appendChild(td);
    }

    table.appendChild(tbody).appendChild(tr);
    this.tableContainer.append(table);
  }

  replaceWithLetter(lettersContainer, letter) {
    for (const [key, value] of lettersContainer) {
      if (value == letter.toLowerCase())
        this.tableContainer.children[0].children[0].children[0].children[key].textContent = value;
    }
  }
}
