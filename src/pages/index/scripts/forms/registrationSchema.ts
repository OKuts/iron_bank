import * as yup from 'yup';

import { FieldNames } from './types/types';

export const registrationSchema = yup.object().shape({
    [FieldNames.name]: yup.string().required('Заполните поле').min(2, 'Не меньше 2 букв').max(15, 'Не больше 15 символов'),
    [FieldNames.email]: yup.string().email('Неправильный адрес').required('Заполните поле'),
    [FieldNames.phone]: yup.string().required('Заполните поле').matches(/\+\d{12}/, 'Не соответствует маске'),
    [FieldNames.password]: yup.string().required('Заполните поле'),
    [FieldNames.terms]: yup.string().matches(/on/, 'Нет согласия'),
});
