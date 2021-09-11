import '../../../css/style.scss';

import { ISubmitEvent } from '../../scripts/types';

import {
    loginForm, toLoginForm,
    registrationForm, toRegistrationForm,
} from './elements';
import { changeUserForm } from './changeUserForm';

import { loginUser, registrationUser } from './forms';
import { verifyToken } from '../../scripts/verifyToken';

toLoginForm.onclick = () => changeUserForm(true);

toRegistrationForm.onclick = () => changeUserForm(false);

loginForm.onsubmit = (event) => {
    event.preventDefault();
    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    loginUser(formData);
};

registrationForm.onsubmit = (event) => {
    event.preventDefault();
    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    registrationUser(formData);
};

verifyToken();

