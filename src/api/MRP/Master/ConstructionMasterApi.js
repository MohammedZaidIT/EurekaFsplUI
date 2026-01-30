import { apiClient } from "../../apiClient";

export const ConstructionMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const ConstructionMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};