import '../pages/index.css'
import { Converter } from './Converter.js';
const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://api.currencyapi.com/v3/latest',
  params: {apikey: 'HVhCEHI6e2AgJGyNO61HHXzHB78t3nItCtuydDo7'},
  headers: {
    authorization: 'HVhCEHI6e2AgJGyNO61HHXzHB78t3nItCtuydDo7',
    'Content-Type': 'application/json'
  }
};

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

const form = document.querySelector('.converter__form');

const converter = new Converter('RUPIY', form);
converter.initiationForm();

for (let item in data) {
  const optionElement = converter.generate(data[item]);
  // console.log(data[item]);
  document.querySelector('#value-hualue').append(optionElement);
  // document.querySelector('#value-hualue2').append(optionElement);
}

for (let item in data) {
  const optionElement = converter.generate(data[item]);
  // console.log(data[item]);
  // document.querySelector('#value-hualue').append(optionElement);
  document.querySelector('#value-hualue2').append(optionElement);
}

console.log(document.querySelector('#value-hualue').value)

const select = document.querySelector('#value-hualue');
select.addEventListener('input', ()=> {
  console.log(select.value)
})

// console.log(form);
// form.querySelector('.converter__option').value = 10;
// form.querySelector('.converter__option').textContent = 10;


console.log('hello')

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });