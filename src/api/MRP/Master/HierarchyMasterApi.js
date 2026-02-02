import { apiClient } from "../../apiClient";

export const HierarchyMasterApi = () => {
  //mysql
  // return apiClient.get("/mrp/Hierarchy/Hierarchys/");
  //postgresql
   return apiClient.get("/api/hierarchy/hierarchy");
}; 

export const HierarchySaveApi = (payload) => {
  // return apiClient.post(
  //   "/mrp/Hierarchy/Hierarchys/",
  //   payload
  // );
   return apiClient.post(
    "/api/hierarchy/hierarchy",
    payload
  );
};

export const HierarchyUpdateApi = (airno,payload) => {
  // return apiClient.put(
  //   `/mrp/Hierarchy/Hierarchys/${airno}/`,
  //   payload
  // );
   return apiClient.put(
    `/api/hierarchy/hierarchy/${airno}/`,
    payload
  );
};