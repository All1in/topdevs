import React, { createContext, useContext, useEffect, useState } from "react";

const WebSocketContext = createContext(null);

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }) => {
     const [ws, setWs] = useState(null);
     const [error, setError] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () => setWs(socket);
        socket.onerror = () => setError('WebSocket connection failed');
        socket.onclose = () => setWs(null);

        return () => socket.close();
    }, []);

    return (
        <WebSocketContext.Provider value={{ ws, error }}>
            { children }
        </WebSocketContext.Provider>
    )
}