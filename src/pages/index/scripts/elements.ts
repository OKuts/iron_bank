export const login = <HTMLDivElement>document.getElementById('login');
export const registration = <HTMLDivElement>document.getElementById('registration');
export const loginForm = <HTMLFormElement>login.querySelector('form');
export const registrationForm = <HTMLFormElement>registration.querySelector('form');

export const toRegistrationForm  = <HTMLElement>document.getElementById('toRegistrationForm');
export const toLoginForm  = <HTMLElement>document.getElementById('toLoginForm');
export const loginFormErrorsMessages: NodeListOf<HTMLSpanElement> = loginForm.querySelectorAll('.errorMessage');
export const registrationErrorsMessages: NodeListOf<HTMLSpanElement>  = registrationForm.querySelectorAll('.errorMessage');

