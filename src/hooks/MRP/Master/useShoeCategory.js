import { useState } from "react";
import { ShoeCategoryServices,ShoeCategorySaveServices } from "../../../services/MRP/Master/ShoeCategoryServices";

export function useShoeCategory() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ShoeCategoryData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ShoeCategoryServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const ShoeCategorySave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ShoeCategorySaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { ShoeCategoryData, loading, data, error,ShoeCategorySave };
}
