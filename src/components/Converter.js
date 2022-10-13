class Converter {
    constructor(text, value) {
        this._text = text;
        this._value = value;
        this._converterForm = document.querySelector('.converter__form');
        this._currencyForm = document.querySelector('.currency__form');
    }

    initiationForm() {
        this._converterForm.querySelector('#default-value').value = this._value;
        this._converterForm.querySelector('#default-value').textContent = this._text;
        this._currencyForm.querySelector('#default-currency-value').value = this._value;
        this._currencyForm.querySelector('#default-currency-value').textContent = this._text;
    }

    _getElement() {
        const newElement = document
        .querySelector('.converter__template')
        .content
        .querySelector('.converter__option')
        .cloneNode(true);
        return newElement;
    }

    generate(data) {
        this._element = this._getElement();
        this._element.value = data.code;
        this._element.textContent = data.name;
        return this._element;
    }
}

export {Converter};