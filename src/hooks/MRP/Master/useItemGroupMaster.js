import { useState } from "react";
import { ItemGroupMasterServices,ItemGroupSaveServices } from "../../../services/MRP/Master/ItemGroupMasterServices";

export function useItemGroupMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ItemGroupData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ItemGroupMasterServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in HierarchyData:", err);
    } finally {
      setLoading(false);
    }
  };

   const ItemGroupSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ItemGroupSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { ItemGroupData, loading, data, error,ItemGroupSave };
}
