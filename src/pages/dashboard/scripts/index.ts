import '../../../css/style.scss';

import { verifyToken } from '../../scripts/verifyToken';
import { storage } from '../../scripts/storage/storage';

import {
    balanceBlocks, chartWrap, leftPanelCard, userName,
} from './modules/elements';
import { userStore } from '../../scripts/userStore/userStore';
import { loadUserCards } from '../../scripts/loadUserCards';
import { loadUserData } from '../../scripts/loadUserData';
import { showLeftPanelCard } from '../../scripts/showLeftPanelCard';
import { showCardBalance } from './modules/showCardBalance';
import { signOff } from './modules/elements';
import { outApp } from '../../scripts/outApp';
import { incomeExpensesChart } from './modules/Charts/incomeExpensesChart';


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
                balanceBlocks.forEach((item) => {
                    const el = item;
                    el.innerHTML = showCardBalance();
                });
                incomeExpensesChart();
                chartWrap.style.display = 'none';
            }
        } catch (error) {
            location.href = '/';
            console.error(error.message);
        }
    }
})();

signOff.onclick = (event) => {
    event.preventDefault();
    outApp();
};
