import { useState } from "react";
import { OEFServices,OEFSaveServices } from "../../../services/MRP/Master/OEFServices";

export function useOEF() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const OEFData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await OEFServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const OEFSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await OEFSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
    return { OEFData, loading, data, error,OEFSave };
}
