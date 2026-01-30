import { useState } from "react";
import { StandardMasterServices,StandardSaveServices } from "../../../services/MRP/Master/StandardMasterServices";

export function useStandard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const StandardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await StandardMasterServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const StandardSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await StandardSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { StandardData, loading, data, error,StandardSave };
}
