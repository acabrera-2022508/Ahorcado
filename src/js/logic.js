import View from "./view.js";

export default class Logic {
  constructor() {
    this.wordContainer = ['saturno', 'sistemasolar', 'margarita', 'gato'];
    this.randomNumber = Math.round(Math.random() * (this.wordContainer.length - 1));
    this.word = this.wordContainer[this.randomNumber].split('');
    console.log(this.randomNumber, "RNMB");
    this.wordLength = this.word.length;
    this.correctLetters = new Map();
    this.view = new View();
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

    this.view.drawUnderlines(this.wordLength);
    
    for (const [letter, button] of this.abecedary) {
      button.onclick = () => {
        this.containLetter(this.getKey(letter).children[0].textContent);
      };

      this.setLettersPosition(letter);
    }
  }

  setLogic(logic) {
    this.logic = logic;
  }

  getKey(key) {
    return this.abecedary.get(key);
  }

  getWordLength() {
    return this.wordLength;
  }

  getCorrectLetters() {
    return this.correctLetters;
  }

  setLettersPosition(letter) {
    for (let index of this.findIndexes(letter))
      this.correctLetters.set(index, letter.toLowerCase());
  }

  findIndexes(letter) {
    let letterIndexes = [];

      this.word.forEach((ltr, i) => {
        if (ltr === letter.toLowerCase()) {
          letterIndexes.push(i);
        }
      });

    return letterIndexes;
  }

  comprobate(letter) {
    return this.word.some((ltr) => ltr === letter.toLowerCase());
  }

  deleteLetter(letter) {
    for (let i = this.findIndexes(letter).length - 1; i >= 0; i--) {
      this.word.splice(this.findIndexes(letter)[i], 1);
    }

    this.findIndexes(letter);
  }

  containLetter(letter) {
    if (this.comprobate(letter)) {
      this.view.replaceWithLetter(this.getCorrectLetters(), letter)
      this.deleteLetter(letter)
      console.log(this.word);
      console.log('correcto');
      console.log(this.correctLetters);
    } else this.dontContainLetter();
  }

  dontContainLetter() {
    console.log('incorrecto');
  }
}
