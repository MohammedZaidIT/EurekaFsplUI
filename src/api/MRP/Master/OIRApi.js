import { apiClient } from "../../apiClient";

export const OIRApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const OIRSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};