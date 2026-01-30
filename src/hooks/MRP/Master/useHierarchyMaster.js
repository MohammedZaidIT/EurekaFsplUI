import { useState } from "react";
import { HierarchyMasterServices,HierarchySaveServices,HierarchyUpdateServices } from "../../../services/MRP/Master/HierarchyMasterServices";

export function useHierarchyMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const HierarchyData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await HierarchyMasterServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in HierarchyData:", err);
    } finally {
      setLoading(false);
    }
  };

   const HierarchySave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await HierarchySaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const HierarchyUpdate=async(id,payload)=>{
        try{
          setLoading(true);
          setError(null);
          const res=await HierarchyUpdateServices(id,payload);
          return res.data;
        }catch(err){
          setError(err);
        }finally{
          setLoading(false);
        }
      };
  return { HierarchyData, loading, data, error,HierarchySave,HierarchyUpdate };
}
