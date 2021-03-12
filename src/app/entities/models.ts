export interface Client{
    tel: string,
    status: string,
    mail: string,
    name: string,
    password: string,
    role: string,
    type: string,
    agent: string
}

export interface Agent{
    tel: string,
    name: string,
    mail: string,
    password: string,
    matricule: string,
    role: string,
    clients: string[]
}

export interface User{
    mail: string,
    name: string,
    password: string,
    role: string
}

export interface Rate{
    date: string,
    base: string,
    rates: RatesBean
}

export interface RateName{
    name: string,
    rates: number
}

export interface RatesBean{
    CAD: number,
    HKD: number,
    ISK: number,
    PHP: number,
    DKK: number,
    HUF: number,
    CZK: number,
    AUD: number,
    RON: number,
    SEK: number,
    IDR: number,
    INR: number,
    BRL: number,
    RUB: number,
    HRK: number,
    JPY: number,
    THB: number,
    CHF: number,
    SGD: number,
    PLN: number,
    BGN: number,
    TRY: number,
    CNY: number,
    NOK: number,
    NZD: number,
    ZAR: number,
    USD: number,
    MXN: number,
    ILS: number,
    GBP: number,
    KRW: number,
    MYR: number,
    EUR: number
}