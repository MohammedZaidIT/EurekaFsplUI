import { WidthMasterApi,WidthMasterSaveApi } from "../../../api/MRP/Master/WidthMasterApi";

export const WidthMasterServices = () => WidthMasterApi();

export const WidthSaveServices = (payload) => {
  return WidthMasterSaveApi(payload);
};