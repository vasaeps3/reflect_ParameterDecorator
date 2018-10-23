import * as _ from 'lodash';

import { CurrencyRow, CurrencyCode } from "./constants";
import { RowCurrency } from './row-currency,decorator';
import { IConvertor } from './interfaces';


export class BynToUsdConvertor implements IConvertor {

  title = 'Byn to Usd';

  constructor(
    @RowCurrency(CurrencyCode.BYN) private bynRow: CurrencyRow,
    @RowCurrency(CurrencyCode.EUR) private usdRow: CurrencyRow,
    @RowCurrency('Eur to Usd') private eeee: CurrencyRow,
  ) { }

  getCurrencyRow(): CurrencyRow['values'] {
    console.log(this.eeee);
    return this.bynRow.values
      .map((value, index) => {
        return value + this.usdRow.values[index];
      })
  }

}