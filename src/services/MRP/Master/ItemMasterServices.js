import { ItemMasterApi,ItemMasterSaveApi } from "../../../api/MRP/Master/ItemMasterApi";

export const ItemMasterServices = () => ItemMasterApi();

export const ItemMasterSaveServices = (payload) => {
  return ItemMasterSaveApi(payload);
};