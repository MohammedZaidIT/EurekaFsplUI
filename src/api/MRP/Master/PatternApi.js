import { apiClient } from "../../apiClient";

export const PatternApi = () => {
  return apiClient.get("/mrp/shoepattern/shoepatterns/");
}; 

export const PatternSaveApi = (payload) => {
  console.log("API PAYLOAD:", payload);
  return apiClient.post(
    "/mrp/shoepattern/shoepatterns/",
    payload
  );
};
export const PatternUpdateApi=(id,payload)=>{
  return apiClient.put(
    `/mrp/shoepattern/shoepatterns/${id}/`,
    payload
  );
}