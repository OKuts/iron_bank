import { ICardResponse } from '../types';

interface IUserType  {
    name: string;
    email: string;
}

class UserStore {
    #cards: ICardResponse[] = [];
    #user: IUserType = {
        name: '',
        email: '',
    };
    #currentCard: string = '';


    saveCards(cards: ICardResponse[]) {
        this.#cards = cards;
    }

    getCards() {
        return this.#cards;
    }

    saveUser(user: IUserType) {
        this.#user = user;
    }

    getUser() {
        return this.#user;
    }

    getCardname(card: string) {
        return this.#cards.filter((item) => item.card === card)[0].description;
    }

    getAllCardsNames() {
        return this.#cards.map((item) => item.card);
    }

    setCurrentCard(card: string) {
        this.#currentCard = card;
    }

    getCurrentCard() {
        return this.#currentCard;
    }
}

export const userStore = new UserStore();
