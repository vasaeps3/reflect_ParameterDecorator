export const COUNT_DAYS = 10;

export enum CurrencyCode {
  USD = 'USD',
  BYN = 'BYN',
  RUR = 'RUR',
  UAH = 'UAH',
  AZN = 'AZN',
  GBP = 'GBP',
  AMD = 'AMD',
  GEL = 'GEL',
  EUR = 'EUR',
  KZT = 'KZT',
}

export interface CurrencyRow {
  code: CurrencyCode;
  values: number[];
}

export const METADATA_KEY = 'currencyCode';
