import { WorkCenterApi,WorkCenterSaveApi } from "../../../api/MRP/Master/WorkCenterApi";

export const WorkCenterServices = () => WorkCenterApi();

export const WorkCenterSaveServices = (payload) => {
  return WorkCenterSaveApi(payload);
};