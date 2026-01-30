import { MouldAvailabilityApi,MouldAvailabilitySaveApi,MouldAvailabilityUpdateApi } from "../../../api/MRP/Master/MouldAvailabilityApi";

export const MouldAvailabilityServices = () => MouldAvailabilityApi();

export const MouldAvailabilitySaveServices = (payload) => {
  return MouldAvailabilitySaveApi(payload);
};
export const MouldAvailabilityUpdateServices=(id,payload)=>{
  return MouldAvailabilityUpdateApi(id,payload);
}