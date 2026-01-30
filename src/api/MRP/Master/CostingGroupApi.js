import { apiClient } from "../../apiClient";

export const CostingGroupApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const CostingGroupSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};