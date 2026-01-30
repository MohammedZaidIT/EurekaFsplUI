import { apiClient } from "../../apiClient";

export const VendorMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const VendorMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};