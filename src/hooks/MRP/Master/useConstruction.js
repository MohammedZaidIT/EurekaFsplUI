import { useState } from "react";
import { ConstructionMasterServices,ConstructionMasterSaveServices } from "../../../services/MRP/Master/ConstructionMasterServices";

export function useConstruction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ConstructionData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ConstructionMasterServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in ConstructionData:", err);
    } finally {
      setLoading(false);
    }
  };

   const ConstructionSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ConstructionMasterSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { ConstructionData, loading, data, error,ConstructionSave };
}
