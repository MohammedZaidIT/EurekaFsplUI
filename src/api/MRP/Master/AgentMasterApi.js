import { apiClient } from "../../apiClient";

export const AgentMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const AgentMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};