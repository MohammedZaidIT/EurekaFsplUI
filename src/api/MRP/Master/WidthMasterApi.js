import { apiClient } from "../../apiClient";

export const WidthMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const WidthMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};