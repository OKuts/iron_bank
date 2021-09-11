import Chart from 'chart.js/auto';
import { userStore } from '../../../../scripts/userStore/userStore';

export const incomeExpensesChart = () => {
    const cards = userStore.getCards();
    const cardNames = userStore.getAllCardsNames().map((item) => userStore.getCardname(item));
    const balance = cards.map((item) => item.balance);
    // @ts-ignore
    const ctx = <HTMLElement>document.getElementById('myChart').getContext('2d');
    // @ts-ignore
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cardNames,
            datasets: [
                {
                    label: 'Баланс',
                    backgroundColor: 'rgba(150, 255, 128, 0.5)',
                    data: balance,
                },
            ],
        },
    });

    myChart.draw();
};
