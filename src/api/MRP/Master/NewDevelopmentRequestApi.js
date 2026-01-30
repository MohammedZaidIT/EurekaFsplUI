import { apiClient } from "../../apiClient";

export const NewDevelopmentRequestApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const NewDevelopmentRequestSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};