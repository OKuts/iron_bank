import * as yup from 'yup';

import { newCardFieldNames } from './types/types';

export const newCardSchema = yup.object().shape({
    [newCardFieldNames.issuer]: yup.string().required('Заполните поле'),
    [newCardFieldNames.description]: yup.string().required('Заполните поле').min(8, 'Минимум 8 символов'),
    [newCardFieldNames.terms]: yup.string().matches(/on/, 'Нет согласия'),
});
