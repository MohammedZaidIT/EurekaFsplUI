import { useState } from "react";
import { WidthMasterServices,WidthSaveServices } from "../../../services/MRP/Master/WidthMasterServices";

export function useWidthMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const WidthMasterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await WidthMasterServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in WidthMasterData:", err);
    } finally {
      setLoading(false);
    }
  };

   const WidthMasterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await WidthSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { WidthMasterData, loading, data, error,WidthMasterSave };
}
