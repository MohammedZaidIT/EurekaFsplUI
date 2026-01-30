import { apiClientNew } from "../../apiClient";

export const ItemGroupMasterApi = () => {
  return apiClientNew.get("/api/group/itemgroup");
}; 

export const ItemGroupSaveApi = (payload) => {
  return apiClientNew.post(
    "/api/group/itemgroup/",
    payload
  );
};