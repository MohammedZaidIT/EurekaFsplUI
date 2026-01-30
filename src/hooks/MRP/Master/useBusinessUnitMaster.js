import { useState } from "react";
import { BusinessUnitServices,BusinessUnitSaveServices } from "../../../services/MRP/Master/BusinessUnitServices";

export function useBusinessUnitMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const BusinessUnitData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await BusinessUnitServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const BusinessUnitSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await BusinessUnitSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { BusinessUnitData, loading, data, error,BusinessUnitSave };
}
