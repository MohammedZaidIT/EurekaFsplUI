import { apiClient } from "../../apiClient";

export const HierarchyMasterApi = () => {
  return apiClient.get("/mrp/Hierarchy/Hierarchys/");
}; 

export const HierarchySaveApi = (payload) => {
  return apiClient.post(
    "/mrp/Hierarchy/Hierarchys/",
    payload
  );
};

export const HierarchyUpdateApi = (id, payload) => {
  return apiClient.put(
    `/mrp/Hierarchy/Hierarchys/${id}/`,
    payload
  );
};