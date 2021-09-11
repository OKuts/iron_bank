class Storage {
    saveToken(token: string) {
        if (token.length) {
            localStorage.setItem('jwt', token);
        }
    }

    getToken() {
        const token: string | null = localStorage.getItem('jwt');

        return token;
    }
};

export const storage = new Storage();


// export const storage = Object.freeze({
//     getToken() {
//         const token: string | null = localStorage.getItem('jwt');
//
//         return token;
//     },
//
//     saveOrder(payload: IOrder) {
//         localStorage.setItem('order', JSON.stringify(payload));
//     },
//
//     getOrder() {
//         const orderStr: string | null = localStorage.getItem('order');
//
//         return orderStr ?  JSON.parse(orderStr) : null;
//     },
//
//     cleanStorage() {
//         localStorage.clear();
//     },
//
//     removeOrder() {
//         localStorage.removeItem('order');
//     },
// });
