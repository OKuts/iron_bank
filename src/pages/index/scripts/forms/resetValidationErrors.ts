export const resetValidationErrors = (elements: NodeListOf<HTMLElement>) => {
    elements.forEach((item) => {
        const element = item;
        element.innerText = '';
    });
};
