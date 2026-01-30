import { apiClient } from "../../apiClient";

export const ItemMasterApi = () => {
  return apiClient.get("/mrp/customer/customermaster/");
}; 

export const ItemMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/customer/SaveCustomerMaster/",
    payload
  );
};