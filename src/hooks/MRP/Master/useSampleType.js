import { useState } from "react";
import { SampleTypeServices,SampleTypeSaveServices } from "../../../services/MRP/Master/SampleTypeServices";

export function useSampleType() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const SampleTypeData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await SampleTypeServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in SampleTypeData:", err);
    } finally {
      setLoading(false);
    }
  };

   const SampleTypeSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await SampleTypeSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { SampleTypeData, loading, data, error,SampleTypeSave };
}
