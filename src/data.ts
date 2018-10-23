import * as _ from 'lodash';

import { COUNT_DAYS, CurrencyCode, CurrencyRow } from "./constants";



export const generateRow = () => {
  const min = _.random(1, 200);
  const delta = _.random(1, 100);

  return _.times(COUNT_DAYS, () => {
    return _.random(min, min + delta);
  });
}

export function genarateMockData(): CurrencyRow[] {
  return _.values(CurrencyCode).map(currencyCode => {
    return {
      code: currencyCode as CurrencyCode,
      values: generateRow(),
    }
  });
}

export const mockData = genarateMockData();