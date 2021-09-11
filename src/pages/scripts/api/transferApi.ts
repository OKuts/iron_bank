import axios from 'axios';

interface ITransferRequest {
    title: string,
    description: string,
    operation: string,
    amount: number,
    card: string,
    created: string,
    transfer: string,
}

const API_URL = 'https://lab.lectrum.io/js2/api';

export const transferApi = Object.freeze({
    transaction: async (token: string, payload: ITransferRequest) => {
        const { data } = await axios.post(`${API_URL}/ironbank/orders`, payload,
            {
                headers: {
                    'x-token': token,
                    'Content-Type': 'application/json',
                },
            });

        return data;
    },

    reports: async (token: string) => {
        const  { data } = await axios.get(`${API_URL}/ironbank/reports`,
            {
                headers: {
                    'x-token': token,
                    'Content-Type': 'application/json',
                },
            });

        return data;
    },

    cardTransactions: async (token: string, card: string) => {
        const  { data } = await axios.get(`${API_URL}/ironbank/orders/${card}`,
            {
                headers: {
                    'x-token': token,
                },
            });

        return data;
    },
});
