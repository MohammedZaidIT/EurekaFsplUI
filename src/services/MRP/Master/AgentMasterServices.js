import { AgentMasterApi,AgentMasterSaveApi } from "../../../api/MRP/Master/AgentMasterApi";

export const AgentMasterServices = () => AgentMasterApi();

export const AgentMasterSaveServices = (payload) => {
  return AgentMasterSaveApi(payload);
};
