import { login, registration } from './elements';

export const changeUserForm = (isRegistration: boolean) => {
    if (isRegistration) {
        login.style.display = 'block';
        registration.style.display = 'none';
    } else {
        registration.style.display = 'block';
        login.style.display = 'none';
    }
};
