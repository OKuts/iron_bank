import axios from 'axios';
import { ICardBody } from '../types';

const API_URL = 'https://lab.lectrum.io/js2/api';

export const cardsApi = Object.freeze({
    loadCards: async (token: string) => {
        const { data } = await axios.get(`${API_URL}/ironbank/cards`,
            {
                headers: {
                    'x-token': token,
                },
            });

        return data;
    },

    createCard: async (token: string, payload: ICardBody) => {
        console.log(payload, token);
        const  { data } = await axios.post(`${API_URL}/ironbank/cards`, payload,
            {
                headers: {
                    'x-token': token,
                },
            });
        console.log(data);

        return data;
    },
});
