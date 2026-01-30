import { ItemGroupMasterApi,ItemGroupSaveApi } from "../../../api/MRP/Master/ItemGroupMasterApi";

export const ItemGroupMasterServices = () => ItemGroupMasterApi();

export const ItemGroupSaveServices = (payload) => {
  return ItemGroupSaveApi(payload);
};