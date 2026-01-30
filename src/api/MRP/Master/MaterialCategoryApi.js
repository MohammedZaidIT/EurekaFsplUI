import { apiClient } from "../../apiClient";

export const MaterialCategoryApi = () => {
  return apiClient.get("/mrp/MaterialCategory/MaterialCategorys/");
}; 

export const MaterialCategorySaveApi = (payload) => {
  return apiClient.post(
    "/mrp/MaterialCategory/MaterialCategorys/",
    payload
  );
};

export const MaterialCategoryUpdateApi = (id, payload) => {
  return apiClient.put(
    `/mrp/MaterialCategory/MaterialCategorys/${id}/`,
    payload
  );
};