import { useState } from "react";
import { ExchangeRateServices,ExchangeRateSaveServices,ExchangeRateUpdateServices } from "../../../services/MRP/Master/ExchangeRateServices";

export function useExchangeRate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  

  const ExchangeRateData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ExchangeRateServices();
      setData(res.data.data);

      console.log("EXCHANGE RATE RESPONSE:", res.data);
    } catch (err) {
      setError(err);
      console.error("Error in ExchangeRateData:", err);
    } finally {
      setLoading(false);
    }
  };

   const ExchangeRateSave = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ExchangeRateSaveServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      const errorMsg = err.response?.data?.message 
        || err.response?.data?.errors 
        || err.message 
        || "Failed to save exchange rate";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const ExchangeRateUpdate = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ExchangeRateUpdateServices(payload);
      console.log("SAVE RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      const errorMsg = err.response?.data?.message 
        || err.response?.data?.errors 
        || err.message 
        || "Failed to save exchange rate";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  return { ExchangeRateData, loading, data, error,ExchangeRateSave,ExchangeRateUpdate };
}
