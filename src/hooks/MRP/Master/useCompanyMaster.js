import { useState } from "react";
import { CompanyMasterServices,CompanySaveServices } from "../../../services/MRP/Master/CompanyMasterServices";

export function useCompanyMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const CompanyData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await CompanyMasterServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in HierarchyData:", err);
    } finally {
      setLoading(false);
    }
  };

   const CompanySave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await CompanySaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return { CompanyData, loading, data, error,CompanySave };
}
