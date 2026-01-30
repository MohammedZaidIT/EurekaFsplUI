import { SizeTypeMasterApi,SizeTypeMasterSaveApi } from "../../../api/MRP/Master/SizeTypeMasterApi";

export const SizeTypeServices = () => SizeTypeMasterApi();

export const SizeTypeSaveServices = (payload) => {
  return SizeTypeMasterSaveApi(payload);
};