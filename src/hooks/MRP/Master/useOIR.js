import { useState } from "react";
import { OIRServices,OIRSaveServices } from "../../../services/MRP/Master/OIRServices";

export function useOIR() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const OIRData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await OIRServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const OIRSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await OIRSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
    return { OIRData, loading, data, error,OIRSave };
}
