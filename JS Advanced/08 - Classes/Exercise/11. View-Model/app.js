class Textbox {
  constructor(selector, regex) {
    this.selector = selector;
    this.regex = regex;
    this.value = '';
    this._elements = Array.from(document.querySelectorAll(selector));
    this._invalidSymbols;
  }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () {
  console.log(textbox.value);
});
