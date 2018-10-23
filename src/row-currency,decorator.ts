import { CurrencyCode, METADATA_KEY } from "./constants";


export function RowCurrency(currencyCode: CurrencyCode | string): ParameterDecorator {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
  ) {
    const metadata: (CurrencyCode | string)[] = Reflect.getMetadata(METADATA_KEY, target, propertyKey) || [];
    metadata[parameterIndex] = currencyCode;
    Reflect.defineMetadata(
      METADATA_KEY,
      metadata,
      target,
      propertyKey,
    );
  }
}