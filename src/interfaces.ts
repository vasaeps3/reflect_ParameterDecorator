export interface IConvertor {
  readonly title: string;
  getCurrencyRow(): number[];
}