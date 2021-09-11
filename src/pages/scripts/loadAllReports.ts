import { transferApi } from './api/transferApi';
import { showReports } from './showReports';
import { userStore } from './userStore/userStore';
import { ITransactionsResponseItem } from './types';

export const loadAllReports = async (token: string, element: HTMLElement) => {
    const cards = userStore.getAllCardsNames();

    try {
        const { data } = await transferApi.reports(token);
        const outData = data.filter((item: ITransactionsResponseItem) => cards.includes(item.card));
        const cont = data.length ? showReports(outData) : 'У Вас еще нет трансакций';
        if (element) {
            // eslint-disable-next-line no-param-reassign
            element.innerHTML = '';
            element.insertAdjacentHTML('afterbegin',  cont);
        }
    } catch (error) {
        console.error(error.message);
    }
};
