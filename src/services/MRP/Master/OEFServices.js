import { OEFSaveApi,OEFApi } from "../../../api/MRP/Master/OEFApi";

export const OEFServices = () => OEFApi();

export const OEFSaveServices = (payload) => {
  return OEFSaveApi(payload);
}
