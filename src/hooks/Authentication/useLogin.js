import { useState } from "react";
import { LoginServices } from "../../services/Authentication/LoginServices";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const login = async (userNo, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await LoginServices(userNo, password); // ✅ FIX
      console.log("LOGIN RESPONSE:", res);
      // setData(res);
      // 🔥 IMPORTANT: use res.data
    //manual login
    // setData({
    //   isValid: true,
    //   token: res.token,
    //   userName: res.userName,
    //   userNo: res.userNo
    // });
    setData({
      isValid: true,
      token: res.data.access_token,
      userName: res.data.username,
      userNo: res.data.user_no
    });
    } catch (err) {
      setError("Invalid UserNo & Password");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, data, error };
}