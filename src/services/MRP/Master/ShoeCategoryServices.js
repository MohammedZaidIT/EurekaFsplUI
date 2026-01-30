import { ShoeCategoryApi,ShoeCategorySaveApi } from "../../../api/MRP/Master/ShoeCategoryApi";

export const ShoeCategoryServices = () => ShoeCategoryApi();

export const ShoeCategorySaveServices = (payload) => {
  return ShoeCategorySaveApi(payload);
};