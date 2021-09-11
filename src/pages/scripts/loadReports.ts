import { transferApi } from './api/transferApi';
import { showReports } from './showReports';

export const loadReports = async (token: string, element: HTMLElement, card: string) => {
    try {
        console.log(token, card);
        const { data } = await transferApi.cardTransactions(token, card);
        console.log(card, data);
        const cont = data.length ? showReports(data) : 'У Вас еще нет трансакций';
        // eslint-disable-next-line no-param-reassign
        element.innerHTML = '';
        element.insertAdjacentHTML('afterbegin',  cont);
    } catch (error) {
        console.error(error.message);
    }
};
