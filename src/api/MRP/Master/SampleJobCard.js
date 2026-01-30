import { apiClient } from "../../apiClient";

export const SampleJobCardApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const SampleJobCardSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};