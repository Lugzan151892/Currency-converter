class List {
    constructor() {
        
    }   

    _getElement() {
        const newElement = document
        .querySelector('.list__template')
        .content
        .querySelector('.list__currency')
        .cloneNode(true);
        return newElement;
    }

    generate(data) {
        this._element = this._getElement();
        this._element.querySelector('.list__value').textContent = data.code;
        this._element.querySelector('.list__name').textContent = data.name;
        return this._element;
    }
}

export {List};