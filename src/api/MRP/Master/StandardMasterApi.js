import { apiClient } from "../../apiClient";

export const StandardMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const StandardMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};