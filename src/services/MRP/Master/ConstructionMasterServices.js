import { ConstructionMasterApi,ConstructionMasterSaveApi } from "../../../api/MRP/Master/ConstructionMasterApi";

export const ConstructionMasterServices = () => ConstructionMasterApi();

export const ConstructionMasterSaveServices = (payload) => {
  return ConstructionMasterSaveApi(payload);
};