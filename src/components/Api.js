class Api {
  constructor() {
      this._apikey = 'HVhCEHI6e2AgJGyNO61HHXzHB78t3nItCtuydDo7';
      this._currencys = 'EUR,USD,RUB,BRL,CAD,GBP,KZT,NZD,TRY,CNY';
      this._baseUrl = 'https://api.currencyapi.com/v3/'
  }

  getListOfPopularCurrencys() {
    const options = {
          method: 'GET',
          url: `${this._baseUrl}currencies`,
          params: {apikey: this._apikey,
                  currencies: this._currencys},
          headers: {
            authorization: 'HVhCEHI6e2AgJGyNO61HHXzHB78t3nItCtuydDo7',
            'Content-Type': 'application/json'
          }
        };
    return options;
  }

  getListOfCurrencys() {
    const options = {
          method: 'GET',
          url: `${this._baseUrl}currencies`,
          params: {apikey: this._apikey},
          headers: {
            authorization: 'HVhCEHI6e2AgJGyNO61HHXzHB78t3nItCtuydDo7',
            'Content-Type': 'application/json'
          }
        };
    return options;
  }

  getExchangeResult(value, firstCurrency, secondCurrency) {
    const options = {
        method: 'GET',
        url: `${this._baseUrl}convert`,
        params: {apikey: this._apikey,
                value: value,
                base_currency: secondCurrency,
                currencies: firstCurrency,
            },
        headers: {
          authorization: 'HVhCEHI6e2AgJGyNO61HHXzHB78t3nItCtuydDo7',
          'Content-Type': 'application/json'
        }
      };

    return options;
  }
}

export {Api};