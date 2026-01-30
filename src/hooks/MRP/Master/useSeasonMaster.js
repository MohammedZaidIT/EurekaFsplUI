import { useState } from "react";
import { SeasonMasterServices,SeasonMasterSaveServices,SeasonMasterUpdateServices } from "../../../services/MRP/Master/SeasonMasterServices";

export function useSeasonMaster() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const SeasonMasterData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await SeasonMasterServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in SeasonMasterData:", err);
    } finally {
      setLoading(false);
    }
  };

   const SeasonMasterSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await SeasonMasterSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const SeasonUpdate=async(id,payload)=>{
        try{
          setLoading(true);
          setError(null);
          const res=await SeasonMasterUpdateServices(id,payload);
          return res.data;
        }catch(err){
          setError(err);
        }finally{
          setLoading(false);
        }
      };
  return { SeasonMasterData, loading, data, error,SeasonMasterSave,SeasonUpdate };
}
