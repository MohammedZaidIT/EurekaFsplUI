import { CompanyMasterApi,CompanySaveApi } from "../../../api/MRP/Master/CompanyMasterApi";

export const CompanyMasterServices = () => CompanyMasterApi();

export const CompanySaveServices = (payload) => {
  return CompanySaveApi(payload);
};