import { SampleTypeApi,SampleTypeSaveApi } from "../../../api/MRP/Master/SampleTypeApi";

export const SampleTypeServices = () => SampleTypeApi();

export const SampleTypeSaveServices = (payload) => {
  return SampleTypeSaveApi(payload);
};