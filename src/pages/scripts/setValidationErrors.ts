import { IYupErrors } from './types';

export const setValidationErrors = (errors: IYupErrors[], elements: NodeListOf<HTMLElement>) => {
    const errorKeys = Object.values(errors).map((item) => item.path);
    elements.forEach((item) => {
        const element = item;
        const { path } = element.dataset;
        if (path !== undefined) {
            const num = errorKeys.indexOf(path);
            if (num >= 0) {
                element.innerText = errors[num].message;
            } else {
                element.innerText = '';
            }
        }
    });
};
