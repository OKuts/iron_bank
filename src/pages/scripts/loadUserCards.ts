import toastr from 'toastr';
import { cardsApi } from './api';
import { userStore } from './userStore/userStore';

export const loadUserCards = async (token: string) => {
    if (token) {
        try {
            const { data } = await cardsApi.loadCards(token);
            userStore.saveCards(data);
        } catch (error) {
            toastr.info('Необходимо выпустить карты');
            if (location.pathname !== '/cards.html') location.href = '/cards.html';
        }
    } else location.href = '/';

    return true;
};
