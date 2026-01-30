import { useState } from "react";
import { ProductCategoryServices,ProductCategorySaveServices,ProductCategoryUpdateServices } from "../../../services/MRP/Master/ProductCategoryServices";

export function useProductCategory() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ProductCategoryData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ProductCategoryServices();
      setData(res.data.data);

      console.log("RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in ProductCategoryData:", err);
    } finally {
      setLoading(false);
    }
  };

   const ProductCategorySave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ProductCategorySaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("Save Error:", err);
    } finally {
      setLoading(false);
    }
  };
   const ProductCategoryUpdate=async(id,payload)=>{
      try{
        setLoading(true);
        setError(null);
        const res=await ProductCategoryUpdateServices(id,payload);
        return res.data;
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    };
  return { ProductCategoryData, loading, data, error,ProductCategorySave,ProductCategoryUpdate };
}
