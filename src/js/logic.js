export default class Logic {
  constructor() {
    this.word = 'hola'.split('');
    this.correctLetters = [];
    this.logic = null;
    this.dictionary = [
      ['q', document.getElementById('qKey')],
      ['w', document.getElementById('wKey')],
      ['e', document.getElementById('eKey')],
      ['r', document.getElementById('rKey')],
      ['t', document.getElementById('tKey')],
      ['y', document.getElementById('yKey')],
      ['u', document.getElementById('uKey')],
      ['i', document.getElementById('iKey')],
      ['o', document.getElementById('oKey')],
      ['p', document.getElementById('pKey')],
      ['a', document.getElementById('aKey')],
      ['s', document.getElementById('sKey')],
      ['d', document.getElementById('dKey')],
      ['f', document.getElementById('fKey')],
      ['g', document.getElementById('gKey')],
      ['h', document.getElementById('hKey')],
      ['j', document.getElementById('jKey')],
      ['k', document.getElementById('kKey')],
      ['l', document.getElementById('lKey')],
      ['z', document.getElementById('zKey')],
      ['x', document.getElementById('xKey')],
      ['c', document.getElementById('cKey')],
      ['v', document.getElementById('vKey')],
      ['b', document.getElementById('bKey')],
      ['n', document.getElementById('nKey')],
      ['m', document.getElementById('mKey')],
    ];

    this.abecedary = new Map(this.dictionary);
    this.oportunities = 7;

    for (const [letter, button] of this.abecedary) {
      button.onclick = () => {
        // this.comprobate();
        this.containLetter(this.getKey(letter).children[0].textContent);
        // console.log(this.getKey(letter).children[0].textContent);
      };
    }
  }

  setLogic(logic) {
    this.logic = logic;
  }

  getKey(key) {
    return this.abecedary.get(key);
  }

  findIndexes(letter) {
    let letterIndexes = [];

    if (this.comprobate(letter)) {
      this.word.forEach((ltr, i) => {
        if (ltr === letter.toLowerCase()) letterIndexes.push(i);
      });
    }

    return letterIndexes;
  }

  comprobate(letter) {
    return this.word.some((ltr) => ltr === letter.toLowerCase());
  }

  deleteLetter(letter) {
    for (let i = this.findIndexes(letter).length - 1; i >= 0; i--) {
      this.word.splice(this.findIndexes(letter)[i], 1)
    }
  }

  containLetter(letter) {
    if (this.comprobate(letter)) {
      this.deleteLetter(letter);
      console.log(this.word);
      console.log('correcto');
    } else this.dontContainLetter();
  }

  dontContainLetter() {
    console.log('incorrecto');
  }
}
