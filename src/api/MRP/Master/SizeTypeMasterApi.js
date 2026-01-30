import { apiClient } from "../../apiClient";

export const SizeTypeMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const SizeTypeMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};