import { createContext, useState, useEffect } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:4000/captains")
    .then(async (response) => {
        const text = await response.text();
        try {
            const data = JSON.parse(text); 
            console.log("Fetched Data:", data);
            setCaptain(Array.isArray(data) ? data : [data]); 
        } catch (error) {
            console.error("Error parsing JSON. Response:", text);
            setCaptain([]); 
        }
    })
    }, []);

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;
