import { apiClient } from "../../apiClient";

export const UOMMasterApi = () => {
  return apiClient.get("/mrp/UOM/UOMs/");
}; 

export const UOMMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/UOM/UOMs/",
    payload
  );
};
export const UOMUpdateApi = (id, payload) => {
  return apiClient.put(
    `/mrp/UOM/UOMs/${id}/`,
    payload
  );
};