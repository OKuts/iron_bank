import toastr from 'toastr';

import { userApi } from './api';
import { storage } from './storage/storage';

export const verifyToken = async (): Promise<void> => {
    const token = storage.getToken();
    if (token) {
        try {
            await userApi.verify(token);
            if (location.pathname === '/') location.href = '/cards.html';
        } catch (error) {
            toastr.error(error.message, 'Ошибка входа.');
            if (location.pathname !== '/') location.href = '/';
        }
    } else if (location.pathname !== '/') {
        location.href = '/';
    }
};
