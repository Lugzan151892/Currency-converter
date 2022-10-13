import '../pages/index.css'
import { Converter } from './Converter.js';
import { Currency } from './Currency.js';
import { Api } from './Api.js';
import { List } from './List.js';
const axios = require("axios").default;

const converterValue = document.querySelector('.converter__value');
const firstValue = document.querySelector('#converter-first-value');
const secondValue = document.querySelector('#converter-second-value');

const api = new Api();

// Выбираем кнопку сабмита конвертера
const converterForm = document.querySelector('.converter__form');

//Добавляем листенер на кнопку
converterForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let value = converterValue.value + '';
  axios(api.getExchangeResult(value, firstValue.value, secondValue.value))
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));
})

const currency = new Currency();
const converter = new Converter(currency.getDefaultCurrencyText(), currency.getDefaultCurrencyValue());
converter.initiationForm();

const list = new List();

axios.request(api.getListOfCurrencys()).then(function (response) {
  for (let item in response.data.data) {
    console.log(response.data.data);
    console.log(item)
    const listElement = list.generate(response.data.data[item]);
    document.querySelector('.list__list').append(listElement);
  }
}).catch(function (error) {
	console.error(error);
});

axios.request(api.getListOfPopularCurrencys()).then(function (response) {
  for (let item in response.data.data) {
    if (response.data.data[item].name != currency.getDefaultCurrencyText()) {
      const optionElement = converter.generate(response.data.data[item]);
      document.querySelector('#converter-first-value').append(optionElement);
    } else {
      console.log(`${response.data.data[item].name} - Its default user currency`);
    }
  }
  for (let item in response.data.data) {
    const optionElement = converter.generate(response.data.data[item]);
    document.querySelector('#converter-second-value').append(optionElement);
  }
  for (let item in response.data.data) {
    if (response.data.data[item].name != currency.getDefaultCurrencyText()) {
      const optionElement = converter.generate(response.data.data[item]);
      document.querySelector('#currency').append(optionElement);
    } else {
      console.log(`${response.data.data[item].name} - Its default user currency`);
    }
  }
}).catch(function (error) {
	console.error(error);
});

// const select = document.querySelector('#converter-first-value');
// select.addEventListener('input', ()=> {
//   console.log(select.value)
// })



console.log('hello')