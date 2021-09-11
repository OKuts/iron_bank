import * as toastr from 'toastr';
import { registrationErrorsMessages } from '../elements';
import { setValidationErrors } from '../../../scripts/setValidationErrors';
import { registrationSchema } from './registrationSchema';
import { userApi } from '../../../scripts/api';
import { IRegistrationBody } from '../../../scripts/types';
import { storage } from '../../../scripts/storage/storage';

export const registrationUser = async (formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const terms = formData.get('terms') || 'off';
    const out = {
        name, email, phone, password,
    };
    const payload = { ...out, terms };

    try {
        await registrationSchema.validate(payload, { abortEarly: false });
    } catch (error) {
        if (Array.isArray(error.inner)) {
            setValidationErrors(error.inner, registrationErrorsMessages);
        }

        return null;
    };
    try {
        const data = await userApi.register(<IRegistrationBody>out);
        storage.saveToken(data.data);
        if (data) location.href = 'cards.html';
    } catch (error) {
        toastr.error(error.message, 'Ошибка регистрации.');
    };
};
