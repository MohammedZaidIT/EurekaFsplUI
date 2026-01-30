import { useState } from "react";
import { WorkCenterServices,WorkCenterSaveServices } from "../../../services/MRP/Master/WorkCenterServices";

export function useWorkCenter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const WorkCenterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await WorkCenterServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in WorkCenterData:", err);
    } finally {
      setLoading(false);
    }
  };

   const WorkCenterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await WorkCenterSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { WorkCenterData, loading, data, error,WorkCenterSave };
}
