import { useState } from "react";
import { CustomerMasterServices,CustomerSaveServices } from "../../../services/MRP/Master/CustomerMasterServices";

export function useCustomerMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const CustomerData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await CustomerMasterServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in HierarchyData:", err);
    } finally {
      setLoading(false);
    }
  };

   const CustomerSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await CustomerSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { CustomerData, loading, data, error,CustomerSave };
}
