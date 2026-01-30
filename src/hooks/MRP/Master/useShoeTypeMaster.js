import { useState, useEffect } from "react";
import { ShoeTypeServices, ShoeTypeSaveServices,ShoeTypeUpdateServices } from "../../../services/MRP/Master/ShoeTypeServices";

export const useShoeTypeMaster = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ShoeTypeMasterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ShoeTypeServices();
      setData(res.data ?.data?? []);   // ✅ FIXED

    } catch (err) {
      setError(err);
      console.error("Error fetching Shoe Type Master:", err);
    } finally {
      setLoading(false);
    }
  };

  const ShoeTypeMasterSave = async (values) => {
    try {
      setLoading(true);
      setError(null);
      console.log("VALUES IN HOOKS:", values);
      const res = await ShoeTypeSaveServices(values); // ✅ FIXED
      return res;

    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

   const ShoeTypeMasterUpdate = async (id, values) => {
  try {
    setLoading(true);
    setError(null);

    console.log("UPDATE ID:", id);
    console.log("UPDATE VALUES:", values);

    const res = await ShoeTypeUpdateServices(id, values);
    return res;

  } catch (err) {
    setError(err);
    throw err;
  } finally {
    setLoading(false);
  }
};
  

  return {
    ShoeTypeMasterData,
    ShoeTypeMasterSave,
    ShoeTypeMasterUpdate,
    data,
    loading,
    error,
  };
};
