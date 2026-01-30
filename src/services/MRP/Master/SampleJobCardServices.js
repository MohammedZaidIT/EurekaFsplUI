import { SampleJobCardApi,SampleJobCardSaveApi } from "../../../api/MRP/Master/SampleJobCard";

export const SampleJobCardServices = () => SampleJobCardApi();

export const SampleJobCardSaveServices = (payload) => {
  return SampleJobCardSaveApi(payload);
};