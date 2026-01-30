import { NewDevelopmentRequestApi,NewDevelopmentRequestSaveApi } from "../../../api/MRP/Master/NewDevelopmentRequestApi";

export const NewDevelopmentRequestServices = () => NewDevelopmentRequestApi();

export const NewDevelopmentRequestSaveServices = (payload) => {
  return NewDevelopmentRequestSaveApi(payload);
};