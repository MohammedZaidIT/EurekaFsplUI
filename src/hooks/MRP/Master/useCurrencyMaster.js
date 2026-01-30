import { useState } from "react";
import { CurrencyMasterServices,CurrencySaveServices } from "../../../services/MRP/Master/CurrencyMasterServices";

export function useCurrencyMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const CurrencyMasterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await CurrencyMasterServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const CurrencyMasterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await CurrencySaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { CurrencyMasterData, loading, data, error,CurrencyMasterSave };
}
