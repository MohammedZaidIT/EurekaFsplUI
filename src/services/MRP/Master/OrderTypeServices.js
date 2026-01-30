import { OrderTypeApi,OrderTypeSaveApi } from "../../../api/MRP/Master/OrderTypeApi";

export const OrderTypeServices = () => OrderTypeApi();

export const OrderTypeSaveServices = (payload) => {
  return OrderTypeSaveApi(payload);
};