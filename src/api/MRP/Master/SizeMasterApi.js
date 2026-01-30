import { apiClient } from "../../apiClient";

export const SizeMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const SizeMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};