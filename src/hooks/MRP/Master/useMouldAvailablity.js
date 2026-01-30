import { useState } from "react";
import { MouldAvailabilityServices,MouldAvailabilitySaveServices,MouldAvailabilityUpdateServices } from "../../../services/MRP/Master/MouldAvailabilityServices";

export function useMouldAvailability() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const MouldAvailabilityData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await MouldAvailabilityServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const MouldAvailabilitySave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await MouldAvailabilitySaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  }; 
  const MouldAvailabilityUpdate=async(id,payload)=>{
      try{
        setLoading(true);
        setError(null);
        const res=await MouldAvailabilityUpdateServices(id,payload);
        return res.data;
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }
  
  return { MouldAvailabilityData, loading, data, error,MouldAvailabilitySave,MouldAvailabilityUpdate };
}
