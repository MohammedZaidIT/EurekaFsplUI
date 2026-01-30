import { apiClient } from "../../apiClient";

export const SeasonMasterApi = () => {
  // return apiClient.get("/mrp/season/seasons/");
   return apiClient.get("/api/digiseason/digiseason");
}; 

export const SeasonMasterSaveApi = (payload) => {
  return apiClient.post(
    // "/mrp/season/seasons/",
      "/api/digiseason/digiseason",
    payload
  );
};
export const SeasonUpdateApi = (id, payload) => {
  return apiClient.put(
    // `/mrp/season/seasons/${id}/`,
    `/api/digiseason/digiseason/${id}`,
    payload
  );
};