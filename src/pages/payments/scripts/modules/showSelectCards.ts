import { ICardResponse } from '../../../scripts/types';

export const showSelectCards = (cards: ICardResponse[]) => {
    const out = document.createElement('div');
    out.classList.add('dropdown__list');
    cards.forEach((item: ICardResponse) => {
        const src = item.system === 'visa' ? 'img/icon/visa-icon.svg' : 'img/icon/mastercard-icon.svg';
        out.insertAdjacentHTML('beforeend', `
            <div class="dropdown__list__item" card="${item.card}" valid="${item.valid}">
                <img src="${src}" class="paysystem__icon visa__icon" alt="" data-type="Visa">
                <p class="form__input" data-type="Visa">${item.description}</p>
            </div>
        `);
    });

    return out;
};
