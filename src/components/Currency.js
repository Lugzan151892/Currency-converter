class Currency {
    constructor() {
        this._defaultCurrency = document.querySelector('.currency__currency').textContent;
        this._defaultValue = document.querySelector('.currency__currency').value;
    }
    getDefaultCurrencyText() {
        return this._defaultCurrency;
    }
    getDefaultCurrencyValue() {
        return this._defaultValue;
    }
}

export {Currency};