import { BusinessUnitMasterApi,BusinessUnitMasterSaveApi } from "../../../api/MRP/Master/BusinessUnitMasterApi";

export const BusinessUnitServices = () => BusinessUnitMasterApi();

export const BusinessUnitSaveServices = (payload) => {
  return BusinessUnitMasterSaveApi(payload);
};
