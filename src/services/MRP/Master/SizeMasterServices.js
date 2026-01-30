import { SizeMasterApi, SizeMasterSaveApi } from "../../../api/MRP/Master/SizeMasterApi";

export const SizeMasterServices  = () => SizeMasterApi();

export const SizeMasterSaveServices = (payload) => {
  return SizeMasterSaveApi(payload);
};