export interface ICardBody {
    issuer: string,
    system: string,
    currency: string,
    class: string,
    description: string,
}

export enum ECurrency {
    uah = '&#8372;',
    usd = '&#x24;',
    rub = '&#8381;',
    eur = '&#8364;',
}

export interface ICardResponse {
    hash: string,
    issuer: string,
    system: 'visa' | 'mastercard',
    iban: string,
    currency: 'uah' | 'usd' | 'rub' | 'eur',
    class: 'gold' | 'platinum' | 'world' | 'signature',
    card: string,
    description: string,
    valid: string,
    balance: number,
    limit: number,
    internet: boolean,
    security3d: boolean
}

export interface ILoginBody {
    email: string,
    password: string,
}

export interface IRegistrationBody extends ILoginBody {
    name: string,
    phone: string,
}

export interface IUserResponse {
    data: string,
}

export interface ITransactionsResponseItem {
    title: string,
    description: string,
    operation: string,
    amount: number,
    hash: string,
    created: string,
    card: string,
}
