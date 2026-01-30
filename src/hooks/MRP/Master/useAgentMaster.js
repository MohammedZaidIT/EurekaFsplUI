import { useState } from "react";
import { AgentMasterServices,AgentMasterSaveServices } from "../../../services/MRP/Master/AgentMasterServices";

export function AgentMasterSaveServices() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const AgentMasterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await AgentMasterServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const AgentMasterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await AgentMasterSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { AgentMasterData, loading, data, error,AgentMasterSave };
}
