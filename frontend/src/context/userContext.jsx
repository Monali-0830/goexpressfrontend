import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const UserDataContext = createContext();

const UserContextProvider = ({ children }) => {
  // State for user data
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (!token) {
          console.warn("No token found in localStorage.");
          return;
        }

        const response = await axios.get('http://localhost:4000/auth/user', 
          {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data); // Update user state with fetched data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser(); // Call fetch function
  }, []);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContextProvider;
