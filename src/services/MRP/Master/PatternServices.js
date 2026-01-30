import { PatternApi,PatternSaveApi,PatternUpdateApi } from "../../../api/MRP/Master/PatternApi";

export const PatternServices = () => PatternApi();

export const PatternSaveServices = (payload) => {
  return PatternSaveApi(payload);
};
export const PatternUpdateServices=(id,payload)=>{
  return PatternUpdateApi(id,payload);
}