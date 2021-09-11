import { ECurrency, ICardResponse } from '../../../scripts/types';
import { userStore } from '../../../scripts/userStore/userStore';

export const showCardBalance = () => {
    const cards: ICardResponse[] = userStore.getCards();
    let out = '<h2 class="card__section__title">Карты</h2>';
    cards.forEach((item) => {
        const cardName = (card: string) => `${card.slice(0, 4)} **** **** ${card.slice(-4)}`;
        const src = item.system === 'visa' ? 'img/icon/visa-icon.svg' : 'img/icon/mastercard-icon.svg';
        out += `
            <div class="card__balance card__balance__item">
                <img src="${src}" class="card__balance__icon" alt="">
                <div>
                    <p class="card__balance__type">${item.description}</p>
                    <p class="card__balance__number">${cardName(item.card)}</p>
                </div>
                <p class="card__balance__data">${ECurrency[item.currency]}${item.balance}</p>
                <img src="img/icon/increase-icon.svg" class="card__balance__status" alt="">
            </div>`;
    });

    return out;
};