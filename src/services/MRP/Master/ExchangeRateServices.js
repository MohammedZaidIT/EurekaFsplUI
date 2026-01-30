import { ExchangeRateApi,ExchangeRateSaveApi,ExchangeRateUpdateApi } from "../../../api/MRP/Master/ExchangeRateApi";

export const ExchangeRateServices = () => ExchangeRateApi();

export const ExchangeRateSaveServices = (payload) => {
  return ExchangeRateSaveApi(payload);
};
export const ExchangeRateUpdateServices = (payload) => {
  return ExchangeRateUpdateApi(payload);
}