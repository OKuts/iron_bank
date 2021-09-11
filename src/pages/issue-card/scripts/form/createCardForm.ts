import toastr from 'toastr';
import { newCardSchema } from '.';
import { setValidationErrors } from '../../../scripts/setValidationErrors';
import { ICardBody } from '../../../scripts/types';
import { errorMessages } from '../elements';
import { storage } from '../../../scripts/storage/storage';
import { cardsApi } from '../../../scripts/api';

export const createCardForm = async (formData: FormData) => {
    const token = storage.getToken();
    if (token) {
        const currenсy = {
            uah: 'Гривна',
            usd: 'Доллар',
            rub: 'Рубль',
            eur: 'Евро',
        };

        const indexMoney = Object.values(currenсy).indexOf(String(formData.get('currency')));

        const out = {
            system: String(formData.get('system')).toLowerCase(),
            currency: Object.keys(currenсy)[indexMoney],
            class: String(formData.get('cardClass')).toLowerCase(),
        };

        const terms = String(formData.get('terms')) || 'off';
        const payload = {
            issuer: formData.get('issuer'),
            description: formData.get('description'),
        };

        try {
            await newCardSchema.validate({ ...payload, terms }, { abortEarly: false });
        } catch (error) {
            if (Array.isArray(error.inner)) {
                setValidationErrors(error.inner, errorMessages);
            }

            return null;
        }

        try {
            const data = await cardsApi.createCard(token, <ICardBody>{ ...payload, ...out });
            if (data) location.href = 'cards.html';
        } catch (error) {
            toastr.error(error.message, 'Ошибка создания карты.');
        }
    } else {
        toastr.error('Вход не выполнен');
    }
};
