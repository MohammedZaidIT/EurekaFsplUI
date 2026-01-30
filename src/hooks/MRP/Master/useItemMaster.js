import { useState } from "react";
import { ItemMasterServices,ItemMasterSaveServices } from "../../../services/MRP/Master/ItemMasterServices";

export function useItemMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ItemMasterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ItemMasterServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in HierarchyData:", err);
    } finally {
      setLoading(false);
    }
  };

   const ItemMasterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ItemMasterSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { ItemMasterData, loading, data, error,ItemMasterSave };
}
