import { useState } from "react";
import { UOMServices,UOMSaveServices,UomUpdateServices } from "../../../services/MRP/Master/UOMServices";

export function useUOM() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const UOMData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await UOMServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in UOMData:", err);
    } finally {
      setLoading(false);
    }
  };

   const UOMSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await UOMSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const UomUpdate=async(id,payload)=>{
            try{
              setLoading(true);
              setError(null);
              const res=await UomUpdateServices(id,payload);
              return res.data;
            }catch(err){
              setError(err);
            }finally{
              setLoading(false);
            }
          };
  return { UOMData, loading, data, error,UOMSave,UomUpdate };
}
