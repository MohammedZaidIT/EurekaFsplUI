import { CustomerMasterApi,CustomerSaveApi } from "../../../api/MRP/Master/CustomerMasterApi";

export const CustomerMasterServices = () => CustomerMasterApi();

export const CustomerSaveServices = (payload) => {
  return CustomerSaveApi(payload);
};