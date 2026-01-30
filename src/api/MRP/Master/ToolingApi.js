import { apiClient } from "../../apiClient";

export const ToolingApi = () => {
  return apiClient.get("/mrp/Tooling/Toolings/");
}; 

export const ToolingSaveApi = (payload) => {
  return apiClient.post(
    "/mrp/Tooling/Toolings/",
    payload
  );
};
export const ToolingUpdateApi = (id, payload) => {
  return apiClient.put(
    `/mrp/Tooling/Toolings/${id}/`,
    payload
  );
};