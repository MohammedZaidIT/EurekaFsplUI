import { apiClient } from "../../apiClient";

export const OEFApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const OEFSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};