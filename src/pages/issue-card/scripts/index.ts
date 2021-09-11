import '../../../css/style.scss';
import {
    dropdownCurrency, dropdownCurrencyList, dropdownCurrencyToggle, dropdownCurrencyValue,
    dropdownSystem, dropdownSystemList, dropdownSystemToggle,
    dropdownSystemValue, dropdownSystemValueImg, cardType, newCardForm, cardClass,
} from './elements';
import { IElementEvent, ISubmitEvent } from '../../scripts/types';
import { createCardForm } from './form/createCardForm';

dropdownCurrencyToggle.onclick = () => {
    dropdownCurrency.classList.toggle('dropdown--open');
    dropdownCurrencyToggle.classList.toggle('active');
};

dropdownCurrencyList.onclick = (event: MouseEvent) => {
    const { target } = event as unknown as IElementEvent;
    dropdownCurrencyValue.value = String(target.textContent);
    dropdownCurrencyToggle.classList.toggle('active');
    dropdownCurrency.classList.toggle('dropdown--open');
};

dropdownSystemToggle.onclick = () => {
    dropdownSystem.classList.toggle('dropdown--open');
    dropdownSystemToggle.classList.toggle('active');
};

export const changeCardType = (type: string) => {
    const cardTypeContext =  type === 'Mastercard'
        ? ['Gold', 'World', 'Platinum'] : ['Gold', 'Platinum', 'Signature'];
    cardType.forEach((item, i) => {
        const el = item;
        el.textContent = cardTypeContext[i];
        cardClass[i].setAttribute('value', cardTypeContext[i]);
    });
};

dropdownSystemList.onclick = (event: MouseEvent) => {
    const { target } = event as unknown as IElementEvent;
    dropdownSystemValue.value = String(target.textContent);
    changeCardType(String(target.textContent));
    dropdownSystem.classList.remove('dropdown--open');
    dropdownSystemToggle.classList.remove('active');
    const img = target.previousElementSibling ? target.previousElementSibling : target;
    dropdownSystemValueImg.setAttribute('src', String(img.getAttribute('src')));
};

newCardForm.onsubmit = (event) => {
    event.preventDefault();
    const { target } = event as unknown as ISubmitEvent;
    const formData = new FormData(target);
    const checkedInput: HTMLInputElement | null = newCardForm.querySelector('input[name=cardClass]:checked');
    if (checkedInput) formData.set('classCard', checkedInput.value);
    createCardForm(formData);
};
