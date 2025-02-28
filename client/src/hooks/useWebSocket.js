import { useEffect } from "react";
import { useWebSocket } from "../context/WebSocketContext.jsx";

const useWebSocketHandler = (counter) => {
    const { ws } = useWebSocket()

    useEffect(() => {
        if(!ws) return;

        const handleMessage = (event) => {
            const data = JSON.parse(event.data)
            if(data.type === 'REQUEST_COUNTER') {
                ws.send(JSON.stringify({ counter }));
            }
        };

        ws.addEventListener('message', handleMessage);
        return () => ws.removeEventListener('message', handleMessage);
    }, [ws, counter]);
};

export default useWebSocketHandler;