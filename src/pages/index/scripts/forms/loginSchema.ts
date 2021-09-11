import * as yup from 'yup';

import { FieldNames } from './types/types';

export const loginSchema = yup.object().shape({
    [FieldNames.email]: yup.string().email('Неправильный адрес').required('Заполните поле'),
    [FieldNames.password]: yup.string().required('Заполните поле'),
});
