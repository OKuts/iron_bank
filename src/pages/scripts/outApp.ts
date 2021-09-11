export const outApp = () => {
    localStorage.removeItem('jwt');
    location.href = '/';
};
