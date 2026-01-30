import { apiClient } from "../../apiClient";

export const WorkCenterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const WorkCenterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};