import { UOMMasterApi,UOMMasterSaveApi,UOMUpdateApi } from "../../../api/MRP/Master/UOMMasterApi";

export const UOMServices = () => UOMMasterApi();

export const UOMSaveServices = (payload) => {
  return UOMMasterSaveApi(payload);
};
export const UOMUpdateServices=(id,payload)=>{
  return UOMUpdateApi(id,payload);
}