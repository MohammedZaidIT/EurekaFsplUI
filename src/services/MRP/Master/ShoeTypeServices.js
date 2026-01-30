import { ShoeTypeApi, ShoeTypeSaveApi,ShoeTypeUpdateApi } from "../../../api/MRP/Master/ShoeTypeApi";

export const ShoeTypeServices = () => ShoeTypeApi();
export const ShoeTypeSaveServices = (payload) => ShoeTypeSaveApi(payload);
export const ShoeTypeUpdateServices = (id, payload) =>
  ShoeTypeUpdateApi(id, payload);