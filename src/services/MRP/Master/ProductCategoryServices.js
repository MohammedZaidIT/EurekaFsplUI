import { ProductCategoryApi,ProductCategorySaveApi,ProductCategoryUpdateApi } from "../../../api/MRP/Master/ProductCategoryApi";



export const ProductCategoryServices = () => ProductCategoryApi();

export const ProductCategorySaveServices = (payload) => {
  return ProductCategorySaveApi(payload);
};
export const ProductCategoryUpdateServices=(id,payload)=>{
  return ProductCategoryUpdateApi(id,payload);
}