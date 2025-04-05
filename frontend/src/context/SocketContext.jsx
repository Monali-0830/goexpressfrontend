import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Disconnect any existing socket before creating a new one
        if (socket) {
            socket.disconnect();
        }

        // Generate a random query param to force a new connection
        const randomParam = Math.random().toString(36).substring(7);
        
        const newSocket = io(`${import.meta.env.VITE_BASE_URL}?random=${randomParam}`, {
            transports: ["websocket"],
            forceNew: true, 
            reconnection: false, 
            withCredentials: false, // Prevents session persistence
        });

        setSocket(newSocket);

        newSocket.on("connect", () => {
            console.log("Connected with new Socket ID:", newSocket.id);

            // Emit join event after connection
            const userId = localStorage.getItem("userId");
            const userType = localStorage.getItem("userType");

            if (userId && userType) {
                newSocket.emit("join", { userId, userType });
            }
        });

        newSocket.on("disconnect", () => {
            console.log("Disconnected from the server");
        });

        return () => {
            console.log("Cleaning up socket connection...");
            newSocket.disconnect();
        };
    }, []); // Runs only on mount

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
