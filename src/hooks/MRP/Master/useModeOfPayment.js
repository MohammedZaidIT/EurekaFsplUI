import { useState } from "react";
import { ModeOfPaymentServices,ModeOfPaymentSaveServices } from "../../../services/MRP/Master/ModeOfPaymentServices";

export function useModeOfPayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ModeOfPaymentData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ModeOfPaymentServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const ModeOfPaymentSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ModeOfPaymentSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { ModeOfPaymentData, loading, data, error,ModeOfPaymentSave };
}
