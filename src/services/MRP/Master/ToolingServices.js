import { ToolingApi,ToolingSaveApi,ToolingUpdateApi } from "../../../api/MRP/Master/ToolingApi";

export const ToolingServices = () => ToolingApi();

export const ToolingSaveServices = (payload) => {
  return ToolingSaveApi(payload);
};
export const ToolingUpdateServices=(id,payload)=>{
  return ToolingUpdateApi(id,payload);
}