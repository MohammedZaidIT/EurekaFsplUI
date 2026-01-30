import { CostingGroupApi,CostingGroupSaveApi } from "../../../api/MRP/Master/CostingGroupApi";
export const CostingGroupServices = () => CostingGroupApi();

export const CostingGroupSaveServices = (payload) => {
  return CostingGroupSaveApi(payload);
};