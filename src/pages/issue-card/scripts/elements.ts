export const dropdownCurrency = <HTMLElement>document.getElementById('dropdownCurrency');
export const dropdownCurrencyToggle = <HTMLElement>dropdownCurrency.querySelector('#dropdownCurrencyToggle');
export const dropdownCurrencyList = <HTMLElement>dropdownCurrency.querySelector('.dropdown__list');
export const dropdownCurrencyValue = <HTMLInputElement>dropdownCurrencyToggle.querySelector('input');

export const dropdownSystem = <HTMLElement>document.getElementById('dropdownSystem');
export const dropdownSystemToggle = <HTMLElement>dropdownSystem.querySelector('#dropdownSystemToggle');
export const dropdownSystemList = <HTMLElement>dropdownSystem.querySelector('.dropdown__list');
export const dropdownSystemValue = <HTMLInputElement>dropdownSystemToggle.querySelector('input');
export const dropdownSystemValueImg = <HTMLImageElement>dropdownSystemToggle.querySelector('img');

export const cardType = document.querySelectorAll('.cardType');
export const cardClass = document.querySelectorAll('.cardClass');

export const newCardForm = <HTMLElement>document.getElementById('newCardForm');

export const errorMessages: NodeListOf<HTMLSpanElement> = newCardForm.querySelectorAll('.errorMessage');

