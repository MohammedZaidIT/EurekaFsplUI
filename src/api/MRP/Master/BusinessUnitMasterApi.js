import { apiClient } from "../../apiClient";

export const BusinessUnitMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const BusinessUnitMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};