import { apiClient, apiClientNew } from "../../apiClient";

export const ItemGroupMasterApi = () => {
  // return apiClient.get("/mrp/ItemGroup/ItemGroups/");
    return apiClient.get("/api/group/itemgroup");
}; 

export const ItemGroupSaveApi = (payload) => {
  // return apiClient.post(
  //   "/mrp/ItemGroup/ItemGroups/",
  //   payload
  // );
   return apiClient.post(
    "/api/group/itemgroup",
    payload
  );
};