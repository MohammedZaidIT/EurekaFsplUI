import { apiClient } from "../../apiClient";

export const ShoeCategoryApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const ShoeCategorySaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};