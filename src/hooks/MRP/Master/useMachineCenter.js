import { useState } from "react";
import { MachineCenterServices,MachineCenterSaveServices } from "../../../services/MRP/Master/MachineCenterServices";

export function useMachineCenter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const MachineCenterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await MachineCenterServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const MachineCenterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await MachineCenterSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
    return { MachineCenterData, loading, data, error,MachineCenterSave };
}
