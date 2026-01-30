import { apiClient } from "../../apiClient";

export const ExchangeRateApi = () => {
  // return apiClient.get("/mrp/exchange/exchangerate/");
  return apiClient.get("/api/exchange/exchangerate");
}; 

export const ExchangeRateSaveApi = (payload) => {
  return apiClient.post(
    // "/mrp/exchange/exchangerate/",
      "/api/exchange/exchangerate",
    payload
  );
};
export const ExchangeRateUpdateApi = (payload) => {
  return apiClient.put(
    `/api/exchange/exchangerate/${payload.currency_unit}/`,
    payload
  );
};