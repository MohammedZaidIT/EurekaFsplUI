import { apiClient } from "../../apiClient";

export const ModeOfPaymentApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const ModeOfPaymentSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};