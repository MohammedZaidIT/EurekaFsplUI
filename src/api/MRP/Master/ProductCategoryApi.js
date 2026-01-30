import { apiClient } from "../../apiClient";

export const ProductCategoryApi = () => {
  return apiClient.get("/mrp/ProductCategory/ProductCategorys/");
}; 

export const ProductCategorySaveApi = (payload) => {
  return apiClient.post(
    "/mrp/ProductCategory/ProductCategorys/",
    payload
  );
};
export const ProductCategoryUpdateApi=(id,payload)=>{
  return apiClient.put(
    `/mrp/ProductCategory/ProductCategorys/${id}/`,
    payload
  );
}