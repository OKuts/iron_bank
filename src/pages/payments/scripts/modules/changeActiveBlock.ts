export const changeActiveBlock = (operation: string, open: HTMLElement, active: HTMLElement) => {
    if (operation === 'toggle' || operation === 'remove') {
        open.classList[operation]('dropdown--open');
        active.classList[operation]('active');
    }
};
