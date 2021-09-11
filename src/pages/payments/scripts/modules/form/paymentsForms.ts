import * as toastr from 'toastr';
import { transferApi } from '../../../../scripts/api/transferApi';
import { storage } from '../../../../scripts/storage/storage';
import { transactionsCont } from '../elements';
import { loadAllReports } from '../../../../scripts/loadAllReports';
import { loadReports } from '../../../../scripts/loadReports';

export const paymentsForms = async (type: number, formData: FormData) => {
    const token = storage.getToken();
    if (token) {
        const card = String(formData.get('payCard'));
        const cardTwo = String(formData.get('payCardTwo'));
        const contactMobile = String(formData.get('contactMobile')).trim();
        const contactTelNumber = String(formData.get('contactTelNumber')).trim();
        const totalSum = Number(formData.get('totalSum'));
        const address = formData.get('address');
        const services = formData.get('services');
        // const paymentForMonth = formData.get('paymentForMonth');
        const utilityTotalSum = Number(formData.get('utilityTotalSum'));
        const contactClient = formData.get('contactClient');
        const contactMan = formData.get('contactMan');
        const totalClientSum = Number(formData.get('totalClientSum'));
        const totalSumOwn = Number(formData.get('totalSumOwn'));
        const payLoad = {
            title: '',
            description: '',
            operation: 'debet',
            amount: 0,
            card,
            created: String(new Date()),
            transfer: card,
        };
        const errMessages: string[] = [];
        switch (type) {
            case 0: if (!contactMobile && !contactTelNumber) {
                errMessages.push('Не указан получатель');
            } else {
                payLoad.title = 'Пополнение мобильного';
                payLoad.description = contactMobile + contactTelNumber;
                payLoad.amount = totalSum;
            }
                break;
            case 1: if (!address || !services) {
                errMessages.push('Не выбраны реквизиты платежа');
            } else {
                payLoad.title = 'Оплата коммунальных услуг';
                payLoad.description = 'Коммуналка';
                payLoad.amount = utilityTotalSum;
            }
                break;
            case 2: if (!contactClient && !contactMan) {
                errMessages.push('Не указаны данные получателя');
            } else {
                payLoad.title = 'Перевод на карту';
                payLoad.description = `Перевод на карту ${contactClient}${contactMan}`;
                payLoad.amount = totalClientSum;
            }
                break;
            case 3: if (card === cardTwo) {
                errMessages.push('Карты не должны совпадать');
                payLoad.amount = totalSumOwn;
            } else {
                payLoad.title = 'Перевод между своими картами';
                payLoad.description = `Перевод c ${card} на ${cardTwo}`;
                payLoad.amount = totalSumOwn;
                payLoad.operation = 'debet';
                payLoad.transfer = cardTwo;
            }
                if (!cardTwo) errMessages.push('Выпустите вторую карту');
                break;
            default: break;
        }
        if (!payLoad.amount) errMessages.push('Не указана сумма платежа');

        if (errMessages.length) {
            errMessages.forEach((item) => toastr.error(item));

            return null;
        }

        try {
            console.log(payLoad);
            await transferApi.transaction(token, payLoad);
            if (type === 3) {
                payLoad.operation = 'credit';
                payLoad.card = cardTwo;
                payLoad.transfer = card;
                await transferApi.transaction(token, payLoad);
                loadAllReports(token, transactionsCont);
            } else {
                loadReports(token, transactionsCont, payLoad.card);
            }

            toastr.success('Операция успешна');
        } catch (error) {
            toastr.error(error.message, 'Ошибка');
        }
    }
};
