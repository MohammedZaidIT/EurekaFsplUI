import { apiClient } from "../../apiClient";

export const SampleTypeApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const SampleTypeSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};