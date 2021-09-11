import '../../../css/style.scss';
// import io from 'socket.io-client';
// import toastr from 'toastr';
import {
    payForm,
    paySystem, paySystemContToggle,
    cardClassRadio, selectorTypes, paymentForMonth,
    servicesCont, servicesContToggle, servicesContList, servicesInput,
    addressCont, addressContToggle, switcher, addressContList, addressInput,
    loadCardsPayments, changeActiveBlock, paySystemInput, paySystemContToggleTwo,
    paySystemTwo, paySystemInputTwo, recipient, recipientToggle, recipientList, recipientInput,
} from './modules';
import { IElementEvent, ISubmitEvent } from '../../scripts/types';
import { verifyToken } from '../../scripts/verifyToken';
import { paymentsForms } from './modules/form/paymentsForms';
import { storage } from '../../scripts/storage/storage';
import { signOff, userName } from '../../cards/scripts/elements';
import { userStore } from '../../scripts/userStore/userStore';
import { loadUserCards } from '../../scripts/loadUserCards';
import { loadUserData } from '../../scripts/loadUserData';
import { leftPanelCard } from '../../dashboard/scripts/modules/elements';
import { showLeftPanelCard } from '../../scripts/showLeftPanelCard';
import { socketFunc } from './modules/socketFunc';
import { outApp } from '../../scripts/outApp';


verifyToken();

const token = storage.getToken();
(async () => {
    if (token) {
        try {
            const cards = loadUserCards(token);
            const user = loadUserData(token);
            const result = await Promise.all([cards, user]);
            if (result[0] && result[1]) {
                userName.textContent = userStore.getUser().name;
                leftPanelCard.innerHTML = showLeftPanelCard();
                loadCardsPayments(token);
                socketFunc();
            }
        } catch (error) {
            location.href = '/';
        }
    }
})();


let num = 0;

cardClassRadio.forEach((item) => {
    item.addEventListener('click', (event) => {
        const element = event as unknown as IElementEvent;
        const type = element.target.id;
        switch (type) {
            case 'mobileRadio':
                num = 0;
                break;
            case 'communalRadio':
                num = 1;
                break;
            case 'ownCardRadio':
                num = 3;
                break;
            case 'otherCardRadio':
                num = 2;
                break;
            default:
                break;
        }
        selectorTypes.forEach((elem) => {
            const el = elem;
            el.style.display = 'none';
        });
        selectorTypes[num].removeAttribute('style');
    });
});

payForm.onsubmit = (event) => {
    event.preventDefault();
    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    // formData.append('paymentForMonth', paymentForMonth.value);
    formData.set('payCard', String(paySystemInput.getAttribute('card')));
    formData.set('valid', String(paySystemInput.getAttribute('valid')));
    formData.set('payCardTwo', String(paySystemInputTwo.getAttribute('card')));
    // formData.set('validTwo', String(paySystemInputTwo.getAttribute('valid')));
    paymentsForms(num, formData);
};
recipientToggle.onclick = () => changeActiveBlock('toggle', recipient, recipientToggle);
paySystemContToggle.onclick = () => changeActiveBlock('toggle', paySystem, paySystemContToggle);
paySystemContToggleTwo.onclick = () => changeActiveBlock('toggle', paySystemTwo, paySystemContToggleTwo);
servicesContToggle.onclick = () => changeActiveBlock('toggle', servicesCont, servicesContToggle);
addressContToggle.onclick = () => changeActiveBlock('toggle', addressCont, addressContToggle);

switcher.onclick = () => {
    switcher.classList.toggle('checked');
    paymentForMonth.value = paymentForMonth.value === 'on' ? 'off' : 'on';
};

servicesContList.forEach((item) => {
    item.addEventListener('click', (event) => {
        const { target } = event as unknown as IElementEvent;
        servicesInput.value = String(target.textContent);
        changeActiveBlock('remove', servicesCont, servicesContToggle);
    });
});

addressContList.forEach((item) => {
    item.addEventListener('click', (event) => {
        const { target } = event as unknown as IElementEvent;
        addressInput.value = String(target.textContent);
        changeActiveBlock('remove', addressCont, addressContToggle);
    });
});

recipientList.forEach((item) => {
    item.addEventListener('click', (event) => {
        const { target } = event as unknown as IElementEvent;
        recipientInput.value = String(target.textContent);
        changeActiveBlock('remove', recipient, recipientToggle);
    });
});

signOff.onclick = (event) => {
    event.preventDefault();
    outApp();
};
