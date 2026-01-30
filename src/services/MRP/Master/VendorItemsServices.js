import { VendorItemsApi,VendorItemsSaveApi } from "../../../api/MRP/Master/VendorItemsApi";

export const VendorItemsServices = () => VendorItemsApi();

export const VendorItemsSaveServices = (payload) => {
  return VendorItemsSaveApi(payload);
};