import { useState } from "react";
import { SampleJobCardServices,SampleJobCardSaveServices } from "../../../services/MRP/Master/SampleJobCardServices";

export function useSampleJobCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const SampleJobCardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await SampleJobCardServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const SampleJobCardSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await SampleJobCardSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
    return { SampleJobCardData, loading, data, error,SampleJobCardSave };
}
