import { apiClient } from "../../apiClient";

export const CurrencyMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const CurrencyMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};