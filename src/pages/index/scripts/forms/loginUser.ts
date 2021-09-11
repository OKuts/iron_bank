import toastr from 'toastr';
import { loginFormErrorsMessages } from '../elements';
import { loginSchema } from './loginSchema';
import { setValidationErrors } from '../../../scripts/setValidationErrors';
import { userApi } from '../../../scripts/api';
import { IRegistrationBody } from '../../../scripts/types';
import { storage } from '../../../scripts/storage/storage';

export const loginUser = async (formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const savePassword = formData.get('savePassword');
    const out = { email, password };
    const payload = { ...out, savePassword };
    try {
        await loginSchema.validate(payload, { abortEarly: false });
    } catch (error) {
        if (Array.isArray(error.inner)) {
            setValidationErrors(error.inner, loginFormErrorsMessages);
        }

        return null;
    }
    try {
        const data = await userApi.login(<IRegistrationBody>out);
        if (data) {
            storage.saveToken(data.data);
            location.href = 'cards.html';
        }
    } catch (error) {
        toastr.error(error.message, 'Ошибка входа.');
    };
};
