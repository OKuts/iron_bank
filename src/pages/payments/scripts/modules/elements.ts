export const payForm = <HTMLFormElement>document.getElementById('payForm');

export const paySystem = <HTMLElement>payForm.querySelector('#paySystem');
export const paySystemContToggle = <HTMLElement>paySystem.querySelector('#paySystemContToggle');
export const paySystemInput = <HTMLInputElement>paySystem.querySelector('#paySystemInput');
export const cardIcon = <HTMLImageElement>paySystem.querySelector('#cardIcon');

export const paySystemTwo = <HTMLElement>payForm.querySelector('#paySystemTwo');
export const paySystemContToggleTwo = <HTMLElement>paySystemTwo.querySelector('#paySystemContToggleTwo');
export const paySystemInputTwo = <HTMLInputElement>paySystemTwo.querySelector('#paySystemInputTwo');
export const cardIconTwo = <HTMLImageElement>paySystemTwo.querySelector('#cardIconTwo');

export const cardClassRadio: NodeListOf<HTMLDivElement> = payForm.querySelectorAll('.radio__button');
export const selectorTypes: NodeListOf<HTMLDivElement> = payForm.querySelectorAll('.selectorTypes');

export const userName = <HTMLElement>document.getElementById('userName');
export const leftPanelCard = <HTMLElement>document.getElementById('leftPanelCard');
export const rightPanelCards = <HTMLElement>document.getElementById('rightPanelCards');
export const paymentForMonth = <HTMLInputElement>payForm.querySelector('#paymentForMonth');

export const servicesCont = <HTMLElement>payForm.querySelector('#servicesCont');
export const servicesContList = servicesCont.querySelectorAll('.dropdown__list__item');
export const servicesContToggle = <HTMLElement>servicesCont.querySelector('#servicesContToggle');
export const servicesInput = <HTMLInputElement>servicesCont.querySelector('#servicesInput');

export const addressCont = <HTMLElement>payForm.querySelector('#addressCont');
export const addressContList = addressCont.querySelectorAll('.dropdown__list__item');
export const addressContToggle = <HTMLElement>addressCont.querySelector('#addressContToggle');
export const addressInput = <HTMLInputElement>addressCont.querySelector('#addressInput');

export const recipient = <HTMLElement>payForm.querySelector('#recipient');
export const recipientList = recipient.querySelectorAll('.dropdown__list__item');
export const recipientToggle = <HTMLElement>recipient.querySelector('#recipientToggle');
export const recipientInput = <HTMLInputElement>recipient.querySelector('#recipientInput')

export const switcher = <HTMLElement>payForm.querySelector('#switcher');

export const transactionsCont = <HTMLElement>document.querySelector('#transactions');

export const signOff = <HTMLElement>document.querySelector('#signOff');
