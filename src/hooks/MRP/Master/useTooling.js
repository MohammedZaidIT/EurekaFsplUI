import { useState } from "react";
import { ToolingServices,ToolingSaveServices,ToolingUpdateServices } from "../../../services/MRP/Master/ToolingServices";

export function useTooling() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ToolingData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ToolingServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };
   

   const ToolingSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ToolingSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
   const ToolingUpdate=async(id,payload)=>{
          try{
            setLoading(true);
            setError(null);
            const res=await ToolingUpdateServices(id,payload);
            return res.data;
          }catch(err){
            setError(err);
          }finally{
            setLoading(false);
          }
        };
  return { ToolingData, loading, data, error,ToolingSave,ToolingUpdate };
}
