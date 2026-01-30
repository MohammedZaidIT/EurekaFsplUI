import { MachineCenterApi,MachineCenterSaveApi } from "../../../api/MRP/Master/MachineCenterApi";

export const MachineCenterServices = () => MachineCenterApi();

export const MachineCenterSaveServices = (payload) => {
  return MachineCenterSaveApi(payload);
};