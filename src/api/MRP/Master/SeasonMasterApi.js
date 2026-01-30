import { apiClient } from "../../apiClient";

export const SeasonMasterApi = () => {
  return apiClient.get("/mrp/season/seasons/");
}; 

export const SeasonMasterSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/season/seasons/",
    payload
  );
};
export const SeasonUpdateApi = (id, payload) => {
  return apiClient.put(
    `/mrp/season/seasons/${id}/`,
    payload
  );
};