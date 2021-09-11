import { userApi } from './api';
import { userStore } from './userStore/userStore';

export const loadUserData = async (token: string) => {
    if (token) {
        try {
            const { data } = await userApi.profile(token);
            userStore.saveUser(data);
        } catch (error) {
            localStorage.removeItem('jwt');
            location.href = '/';
        }
    } else location.href = '/';

    return true;
};
