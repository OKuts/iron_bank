import '../../../css/style.scss';

import { loadUserCards } from '../../scripts/loadUserCards';
import { loadUserData } from '../../scripts/loadUserData';
import { storage } from '../../scripts/storage/storage';
import { signOff, userName } from './elements';
import { userStore } from '../../scripts/userStore/userStore';
import { verifyToken } from '../../scripts/verifyToken';
import { loadCards } from './loadCards';
import { socketFunc } from '../../payments/scripts/modules/socketFunc';
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
                loadCards();
                socketFunc();
            }
        } catch (error) {
            location.href = '/';
        }
    }
})();

signOff.onclick = (event) => {
    event.preventDefault();
    outApp();
};
