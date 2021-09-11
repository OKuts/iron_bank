import { showRightPanelCards } from './showRightPanelCards';
import { loadUserCards } from '../../../scripts/loadUserCards';
import { storage } from '../../../scripts/storage/storage';
import { loadCards } from '../../../cards/scripts/loadCards';
import { loadAllReports } from '../../../scripts/loadAllReports';

export const changeShowBalance = async () => {
    const token = storage.getToken();
    if (token) {
        await loadUserCards(token);
        if (location.pathname === '/payments.html') {
            const rightPanelCards = document.getElementById('rightPanelCards');
            if (rightPanelCards) {
                rightPanelCards.innerHTML = '';
                rightPanelCards.insertAdjacentHTML('afterbegin',  showRightPanelCards());
            }
            const transactionCont = <HTMLElement>document.getElementById('transactionCont');
            loadAllReports(token, transactionCont);
        } else if (location.pathname === '/cards.html') {
            loadCards();
        }
    }
};
