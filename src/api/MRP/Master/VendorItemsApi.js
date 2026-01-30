import { apiClient } from "../../apiClient";

export const VendorItemsApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const VendorItemsSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};