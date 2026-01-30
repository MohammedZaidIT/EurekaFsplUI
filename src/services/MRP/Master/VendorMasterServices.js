import { VendorMasterApi,VendorMasterSaveApi } from "../../../api/MRP/Master/VendorMasterApi";

export const VendorMasterServices = () => VendorMasterApi();

export const VendorMasterSaveServices = (payload) => {
  return VendorMasterSaveApi(payload);
};