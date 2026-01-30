import { MaterialCategoryApi,MaterialCategorySaveApi,MaterialCategoryUpdateApi } from "../../../api/MRP/Master/MaterialCategoryApi";

export const MaterialCategoryServices = () => MaterialCategoryApi();

export const MaterialCategorySaveServices = (payload) => {
  return MaterialCategorySaveApi(payload);
};
export const MaterialCategoryUpdateServices=(id,payload)=>{
  return MaterialCategoryUpdateApi(id,payload);
}