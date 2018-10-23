import * as _ from 'lodash';
import 'reflect-metadata';

import { mockData } from "./data";
import { CurrencyCode, METADATA_KEY } from "./constants";
import { BynToUsdConvertor } from "./byn-to-usd.converter";
import { EurToUsdConvertor } from "./eur-to-usd.converter";
import { IConvertor } from "./interfaces";


type Consctructor = {
  new(...params: any[]): IConvertor
}

const convertors: Consctructor[] = [
  BynToUsdConvertor,
  EurToUsdConvertor,
]

function getCurrencyCodMetadata(ConverterClass: Consctructor) {
  const metadata: CurrencyCode[] = Reflect.getMetadata(METADATA_KEY, ConverterClass) || [];
  return metadata;
}

convertors.forEach(convertorClass => {
  const currencyCodes: CurrencyCode[] = getCurrencyCodMetadata(convertorClass);
  const currencyRows = currencyCodes.map(currencyCode => {
    return _.find(mockData, { code: currencyCode });
  });
  const convertor = new convertorClass(...currencyRows);
  mockData.push({
    code: convertor.title as any,
    values: convertor.getCurrencyRow()
  })

});

console.log(mockData);

