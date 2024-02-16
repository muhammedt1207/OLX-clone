import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({children}) => {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    console.log('===========hjhf');
    const handleAPICall = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}`
        );
        setData(res.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error loading data:", error);
        setError("Error loading data. Please try again later.");
        setLoading(false);
      }
    };
    handleAPICall();
  }, [limit]);

  const incrementLimit = () => {
    setLimit((prev) => prev + 8);
    setLoading(true);
  };

  return (
    <DataContext.Provider value={{ data, loading, error, incrementLimit }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
