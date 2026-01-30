import { useState } from "react";
import { VendorItemsServices,VendorItemsSaveServices } from "../../../services/MRP/Master/VendorItemsServices";

export function useVendorItems() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const VendorItemsData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await VendorItemsServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in HierarchyData:", err);
    } finally {
      setLoading(false);
    }
  };

   const VendorItemsSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await VendorItemsSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { VendorItemsData, loading, data, error,VendorItemsSave };
}
