import { useState } from "react";
import { CostingGroupServices,CostingGroupSaveServices } from "../../../services/MRP/Master/CostingGroupServices";

export function useCostingGroup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const CostingGroupData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await CostingGroupServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in CostingGroupData:", err);
    } finally {
      setLoading(false);
    }
  };

   const CostingGroupSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await CostingGroupSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { CostingGroupData, loading, data, error,CostingGroupSave };
}
