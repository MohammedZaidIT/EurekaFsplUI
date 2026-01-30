import { apiClient } from "./apiClient";

export const apiLogin = async (userNo, password) => {
  console.log(userNo, password);
  return apiClient.post("/login/", {
    // return apiClient.post("/api/login/", {
    userno: userNo,
    password: password,
  });
};
//Hello


// export const apiLogin = async (userNo, password) => {
//   console.log("Login Attempt:", userNo, password);
//   // 🔹 TEMP MOCK LOGIN (no backend call)
//   if (userNo === "1182" && password === "123") {
  
//     return {
//       isValid: true,
//       userName: "Irfan",
//       userNo: "1182",
//       token: "mock-jwt-token-12345",
//     };
//   }

//   // ❌ Invalid credentials
//   throw new Error("Invalid credentials");
// };