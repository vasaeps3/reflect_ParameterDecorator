import * as _ from 'lodash';

import { CurrencyRow, CurrencyCode } from "./constants";
import { RowCurrency } from './row-currency,decorator';
import { IConvertor } from './interfaces';


export class EurToUsdConvertor implements IConvertor {

  title = 'Eur to Usd';

  constructor(
    @RowCurrency(CurrencyCode.EUR) private eurRow: CurrencyRow,
    @RowCurrency(CurrencyCode.USD) private usdRow: CurrencyRow,
    @RowCurrency(CurrencyCode.BYN) private bynRow: CurrencyRow,
  ) { }

  getCurrencyRow(): number[] {
    return this.eurRow.values
      .map((value, index) => {
        return value + this.usdRow.values[index] - this.bynRow.values[index];
      })
  }

}