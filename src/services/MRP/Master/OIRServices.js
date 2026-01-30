import { OIRApi, OIRSaveApi } from "../../../api/MRP/Master/OIRApi";

export const OIRServices = () => OIRApi();

export const OIRSaveServices = (payload) => {
  return OIRSaveApi(payload);
};