import { apiClient } from "../../apiClient";

export const CompanyMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const CompanySaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};