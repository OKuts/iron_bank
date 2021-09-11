import toastr from 'toastr';
import { showCards } from './showCards';

import {
    cardsInfoArticle, completed, download, leftPanelCard, transactionCont,
} from './elements';
import { showLeftPanelCard } from '../../scripts/showLeftPanelCard';
import { storage } from '../../scripts/storage/storage';
import { IElementEvent } from '../../scripts/types';
import { loadReports } from '../../scripts/loadReports';
import { userStore } from '../../scripts/userStore/userStore';

export const loadCards =  () => {
    const token = storage.getToken();
    if (token) {
        const  cards = userStore.getCards();
        console.log('cards', cards);
        if (cards.length) {
            download.style.display = 'none';
            toastr.success('Карты загружены.');
            cardsInfoArticle.innerHTML = '';
            cardsInfoArticle.insertAdjacentHTML('afterbegin', showCards());
            leftPanelCard.insertAdjacentHTML('afterbegin', showLeftPanelCard());
            const cardItems = cardsInfoArticle.querySelectorAll('.card__info__item');
            cardItems.forEach((item) => {
                item.addEventListener('click', (event) => {
                    const { currentTarget } = event as unknown as IElementEvent;
                    const currentCard = currentTarget.dataset.card;
                    cardItems.forEach((el) => el.classList.add('collapsed'));
                    item.classList.remove('collapsed');
                    userStore.setCurrentCard(String(currentCard));
                    if (currentCard) loadReports(token, transactionCont, currentCard);
                    console.log(userStore.getCurrentCard());
                });
            });
            loadReports(token, transactionCont, cards[0].card);
        } else {
            cardsInfoArticle.insertAdjacentHTML(
                'afterbegin',
                '<a href="issue-card.html" target="_blank" class="create__card__button">Выпустить новую карту</a>',
            );
            completed.style.display = 'none';
        }
    }
};
