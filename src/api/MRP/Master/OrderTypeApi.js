import { apiClient } from "../../apiClient";

export const OrderTypeApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const OrderTypeSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};