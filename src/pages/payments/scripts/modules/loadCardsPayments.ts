import toastr from 'toastr';

import {
    cardIcon,
    rightPanelCards,
    paySystem,
    paySystemContToggle,
    paySystemInput,
    paySystemTwo,
    paySystemInputTwo,
    paySystemContToggleTwo,
    cardIconTwo, transactionsCont,
} from './elements';


import { showRightPanelCards } from './showRightPanelCards';
import { showSelectCards } from './showSelectCards';
import { IElementEvent } from '../../../scripts/types';
import { changeActiveBlock } from './changeActiveBlock';
// import { loadReports } from '../../../scripts/loadReports';
import { userStore } from '../../../scripts/userStore/userStore';
import { loadAllReports } from '../../../scripts/loadAllReports';

export const loadCardsPayments = (token: string) => {
    const data = userStore.getCards();
    toastr.success('Карты загружены.');
    rightPanelCards.innerHTML = '';
    rightPanelCards.insertAdjacentHTML('afterbegin',  showRightPanelCards());
    paySystem.append(showSelectCards(data));
    const paySystemContList = paySystem.querySelectorAll('.dropdown__list__item');
    if (data.length) {
        paySystemInput.value = data[0].description;
        paySystemInput.setAttribute('card', data[0].card);
        paySystemInput.setAttribute('valid', data[0].valid);
    }
    paySystemContList.forEach((item) => {
        item.addEventListener('click', (event) => {
            const ev = event as unknown as IElementEvent;
            changeActiveBlock('remove', paySystem, paySystemContToggle);
            paySystemInput.value = String(ev.target.textContent);
            paySystemInput.setAttribute('card', String(ev.currentTarget.getAttribute('card')));
            paySystemInput.setAttribute('valid', String(ev.currentTarget.getAttribute('valid')));
            const img = item.querySelector('img');
            cardIcon.setAttribute('src', String(img?.getAttribute('src')));
        });
    });

    paySystemTwo.append(showSelectCards(data));
    const paySystemContListTwo = paySystemTwo.querySelectorAll('.dropdown__list__item');
    if (data.length) {
        paySystemInputTwo.value = data[0].description;
        paySystemInputTwo.setAttribute('card', data[0].card);
        paySystemInputTwo.setAttribute('valid', data[0].valid);
    }
    paySystemContListTwo.forEach((item) => {
        item.addEventListener('click', (event) => {
            const ev = event as unknown as IElementEvent;
            changeActiveBlock('remove', paySystemTwo, paySystemContToggleTwo);
            paySystemInputTwo.value = String(ev.target.textContent);
            paySystemInputTwo.setAttribute('card', String(ev.currentTarget.getAttribute('card')));
            paySystemInputTwo.setAttribute('valid', String(ev.currentTarget.getAttribute('valid')));
            const img = item.querySelector('img');
            cardIconTwo.setAttribute('src', String(img?.getAttribute('src')));
        });
    });
    loadAllReports(token, transactionsCont);
};
