import { useState } from "react";
import { SizeTypeServices,SizeTypeSaveServices } from "../../../services/MRP/Master/SizeTypeServices";

export function useSizeType() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const SizeTypeData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await SizeTypeServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in SizeTypeData:", err);
    } finally {
      setLoading(false);
    }
  };

   const SizeTypeSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await SizeTypeSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { SizeTypeData, loading, data, error,SizeTypeSave };
}
