import { useState } from "react";
import { OrderTypeServices,OrderTypeSaveServices } from "../../../services/MRP/Master/OrderTypeServices";

export function useOrderType() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const OrderTypeData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await OrderTypeServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const OrderTypeSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await OrderTypeSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { OrderTypeData, loading, data, error,OrderTypeSave };
}
