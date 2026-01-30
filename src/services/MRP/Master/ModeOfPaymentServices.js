import { ModeOfPaymentApi,ModeOfPaymentSaveApi } from "../../../api/MRP/Master/ModeOfPaymentApi";

export const ModeOfPaymentServices = () => ModeOfPaymentApi();

export const ModeOfPaymentSaveServices = (payload) => {
  return ModeOfPaymentSaveApi(payload);
};