import { apiClient } from "../../apiClient";

export const ShoeTypeApi = () => {
  return apiClient.get("/mrp/shoetype/shoetypes/");
}; 

export const ShoeTypeSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/shoetype/shoetypes/",
    payload
  );
};
export const ShoeTypeUpdateApi = (id, payload) => {
  console.log("API ID:", id);
  console.log("API PAYLOAD:", payload);

  return apiClient.put(
    `/mrp/shoetype/shoetypes/${id}/`,
    payload
  );
};


