import { ITransactionsResponseItem } from './types';

const src = [
    ['Пополнение карты', 'img/transaction/atm.svg'],
    ['Пополнение мобильного', 'img/transaction/phone.svg'],
    ['Списание с карты', 'img/transaction/transfer.svg'],
    ['Перевести деньги', 'img/transaction/transfer.svg'],
    ['Оплата коммунальных услуг', 'img/transaction/home.svg'],
];

const searchSrc = (title: string) => {
    const result = src.filter((item) => item[0] === title);

    return result[0] ? result[0][1] : 'img/transaction/transfer.svg';
};

export const showReports = (transactions: ITransactionsResponseItem[]) => {
    let out = '';
    const filterTransactions = transactions;
    filterTransactions.sort((a, b) =>
        Number(new Date(b.created)) - Number(new Date(a.created)));
    filterTransactions.forEach((item: ITransactionsResponseItem) => {
        const plus = item.operation === 'credit' ? '+' : '-';
        out += `
            <div class="transaction__item">
                <img class="transaction__item__icon" src="${searchSrc(item.title)}" alt="">
                <div>
                    <p class="transaction__item__type">${item.title}</p>
                    <p class="transaction__item__data">${item.description}</p>
                </div>
                <div class="transaction__item__value">${plus} $${item.amount}</div>
                <img src="img/icon/dots-icon.svg" class="transaction__item__more" alt="">
            </div>`;
    });

    return out;
};
