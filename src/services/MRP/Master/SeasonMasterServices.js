import { SeasonMasterApi,SeasonMasterSaveApi,SeasonUpdateApi } from "../../../api/MRP/Master/SeasonMasterApi";

export const SeasonMasterServices = () => SeasonMasterApi();

export const SeasonMasterSaveServices = (payload) => {
  return SeasonMasterSaveApi(payload);
};
export const SeasonMasterUpdateServices=(id,payload)=>{
  return SeasonUpdateApi(id,payload);
}