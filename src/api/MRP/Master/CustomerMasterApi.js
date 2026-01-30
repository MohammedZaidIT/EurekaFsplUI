import { apiClient } from "../../apiClient";

export const CustomerMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const CustomerSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};