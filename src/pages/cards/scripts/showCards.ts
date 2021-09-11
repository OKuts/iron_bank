import { ICardResponse, ECurrency } from '../../scripts/types';
import { userStore } from '../../scripts/userStore/userStore';

export const showCards = () => {
    let out = '';
    const cards = userStore.getCards();
    if (cards.length) {
        const firstToUppercase = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;
        const currentCard: string = userStore.getCurrentCard() || cards[0].card;
        cards.forEach((item: ICardResponse) => {
            const card = item.card.match(/.{4}/g)?.join(' ');
            const src = item.system === 'visa' ? 'img/icon/visa-white.svg' : 'img/icon/mastercard-icon-small.svg';
            const collapsed = currentCard !== item.card ? 'collapsed' : '';
            out += `<div class="card__info__item ${collapsed}" data-card="${item.card}"> 
                    <div class="card__info__header">
                        <img src="img/icon/mastercard-icon.svg" alt="" class="card__info__icon">
                        <p class="card__info__data">${item.description} ** ${item.card.slice(-4)}</p>
                        <p class="card__info__balance">${ECurrency[item.currency]}${item.balance}</p>
                        <img src="img/icon/arr-bottom.svg" alt="" class="arr__icon">
                    </div>
                    <div class="card__info__main">
                        <div class="card__info__card">
                            <img src="img/card-back.jpg" class="card__back" alt="">
                            <img src="${src}" class="card__type" alt="">
                            <p class="card__number">${card}</p>
                            <p class="card__owner__name">${item.issuer}</p>
                            <p class="card__exp__date">${item.valid.slice(5, 7)} / ${item.valid.slice(2, 4)}</p>
                        </div>
                        <div class="card__info__settings">
                            <div class="data-item">
                                <p class="legend">Класс карты</p>
                                <p class="data">${firstToUppercase(item.system)} ${firstToUppercase(item.class)}</p>
                            </div>
                            <div class="data-item">
                                <p class="legend">IBAN-номер</p>
                                <p class="data">${item.iban}</p>
                            </div>
                            <div class="data-item">
                                <p class="legend">Кредитный лимит</p>
                                <p class="data">${item.limit ? item.limit : 'Отсутствует'}</p>
                            </div>
                            <div class="data-item">
                                <p class="legend">Покупки в интернете</p>
                                <!-- Для того что бы "включить switch нужно добавить к классу switch__block класс checked" -->
                                <div class="switch__block internet__switch__block ${item.internet ? 'checked' : ''}">
                                    <div class="switcher "></div>
                                    <input type="checkbox" id="internetPayments">
                                </div>
                            </div>
                            <div class="data-item">
                                <p class="legend">3D Security</p>
                                <!-- Для того что бы "включить switch нужно добавить к классу switch__block класс checked" -->
                                <div class="switch__block security__switch__block  ${item.security3d ? 'checked' : ''}">
                                    <div class="switcher "></div>
                                    <input type="checkbox" id="security3D">
                                </div>
                            </div>
                            <div class="other__settings">
                                <img class="settings__icon" src="img/icon/dots-icon.svg" alt="">
                                <p class="settings__name">Операции над картой</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    }


    return `${out}<a href="issue-card.html" target="_blank" class="create__card__button">Выпустить новую карту</a>`;
};
