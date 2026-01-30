import { apiClient } from "../../apiClient";

export const MouldAvailabilityApi = () => {
  return apiClient.get("/mrp/MouldAvailability/MouldAvailabilitys/");
}; 

export const MouldAvailabilitySaveApi = (payload) => {
  return apiClient.post(
    "/mrp/MouldAvailability/MouldAvailabilitys/",
    payload
  );
};

export const MouldAvailabilityUpdateApi = (id, payload) => {
  return apiClient.put(
    `/mrp/MouldAvailability/MouldAvailabilitys/${id}/`,
    payload
  );
};