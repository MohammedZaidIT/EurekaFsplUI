import { useState } from "react";
import { PatternServices,PatternSaveServices,PatternUpdateServices } from "../../../services/MRP/Master/PatternServices";

export function usePattern() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const PatternData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await PatternServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const PatternSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await PatternSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const PatternUpdate=async(id,payload)=>{
    try{
      setLoading(true);
      setError(null);
      const res=await PatternUpdateServices(id,payload);
      return res.data;
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  }
  return { PatternData, loading, data, error,PatternSave,PatternUpdate };
}
