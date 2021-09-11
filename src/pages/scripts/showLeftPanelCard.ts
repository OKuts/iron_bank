import { userStore } from './userStore/userStore';
import { ICardResponse } from './types';

export const showLeftPanelCard = () => {
    const cards: ICardResponse[] = userStore.getCards();
    let out = '<h2 class="card__section__title">Карты</h2>';
    cards.forEach((item) => {
        const src = item.system === 'visa' ? 'img/icon/visa-icon-small.svg' : 'img/icon/mastercard-icon-small.svg';
        out += `
            <a href="#" class="card__item">
                <img class="card__item__logo" src="${src}" alt="">
                <span class="card__item__name">
                    ${item.description}
                </span>
            </a>`;
    });

    return out;
};
