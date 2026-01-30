import { StandardMasterApi,StandardSaveApi } from "../../../api/MRP/Master/StandardMasterApi";

export const StandardMasterServices = () => StandardMasterApi();

export const StandardSaveServices = (payload) => {
  return StandardSaveApi(payload);
};