import { useState } from "react";
import { NewDevelopmentRequestServices,NewDevelopmentRequestSaveServices } from "../../../services/MRP/Master/NewDevelopmentRequestServices";

export function useNewDevelopmentRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const NewDevelopmentRequestData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await NewDevelopmentRequestServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const NewDevelopmentRequestSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await NewDevelopmentRequestSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
    return { NewDevelopmentRequestData, loading, data, error,NewDevelopmentRequestSave };
}
