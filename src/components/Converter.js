class Converter {
    constructor(defoltValue, converterForm) {
        this._value = defoltValue;
        this._form = converterForm;
    }

    initiationForm() {
        this._form.querySelector('#default-value').value = this._value;
        this._form.querySelector('#default-value').textContent = this._value;
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
        this._element.textContent = data.code;
        return this._element;
    }

    // loadData(data) {

    //     for (let item in data) {
    //         const newOption = this._form.querySelector('.converter__option').cloneNode();
    //         newOption.value = item.code;
    //         newOption.textContent = item['code'];
    //         this._form.querySelector('#value-hualue').append(newOption);
    //     }

    //     // data.forEach((item) => {
    //     //     const newOption = this._form.querySelector('.converter__option').cloneNode();
    //     //     newOption.value = item.code;
    //     //     newOption.textContent = item['code'];
    //     //     this._form.querySelector('#value-hualue').append(newOption);
    //     // })
    // }
}

const data = {
        "AED": {
            "code": "AED",
            "value": 3.67306
        },
        "AFN": {
            "code": "AFN",
            "value": 91.80254
        },
        "ALL": {
            "code": "ALL",
            "value": 108.22904
        },
        "AMD": {
            "code": "AMD",
            "value": 480.41659
        },
    }

export {Converter};