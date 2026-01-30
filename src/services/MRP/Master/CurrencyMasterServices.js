import { CurrencyMasterApi,CurrencyMasterSaveApi } from "../../../api/MRP/Master/CurrencyMasterApi";

export const CurrencyMasterServices = () => CurrencyMasterApi();

export const CurrencySaveServices = (payload) => {
  return CurrencyMasterSaveApi(payload);
};