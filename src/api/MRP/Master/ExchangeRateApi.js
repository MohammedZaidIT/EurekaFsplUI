import { apiClient } from "../../apiClient";

export const ExchangeRateApi = () => {
  return apiClient.get("/mrp/exchange/exchangerate/");
}; 

export const ExchangeRateSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/exchange/exchangerate/",
    payload
  );
};
export const ExchangeRateUpdateApi = (payload) => {
  return apiClient.put(
    `/mrp/exchange/exchangerate/${payload.currency_unit}/`,
    payload
  );
};