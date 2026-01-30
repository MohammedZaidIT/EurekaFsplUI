import { apiClient } from "../../apiClient";

export const MachineCenterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const MachineCenterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};