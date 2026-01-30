import { useState } from "react";
import { VendorMasterServices,VendorMasterSaveServices } from "../../../services/MRP/Master/VendorMasterServices";

export function useVendorMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const VendorMasterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await VendorMasterServices();
      setData(res.data.data);

      console.log(" RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in Data:", err);
    } finally {
      setLoading(false);
    }
  };

   const VendorMasterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await VendorMasterSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { VendorMasterData, loading, data, error,VendorMasterSave };
}
