import { useState } from "react";
import { MaterialCategoryServices,MaterialCategorySaveServices,MaterialCategoryUpdateServices } from "../../../services/MRP/Master/MaterialCategoryServices";

export function useMaterialCategory() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const MaterialCategoryData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await MaterialCategoryServices();
      setData(res.data.data);

      console.log("Hierarchy RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

   const MaterialCategorySave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await MaterialCategorySaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
    const MaterialCategoryUpdate=async(id,payload)=>{
          try{
            setLoading(true);
            setError(null);
            const res=await MaterialCategoryUpdateServices(id,payload);
            return res.data;
          }catch(err){
            setError(err);
          }finally{
            setLoading(false);
          }
        };
  return { MaterialCategoryData, loading, data, error,MaterialCategorySave,MaterialCategoryUpdate };
}
