import { useState } from 'react';
import useWebSocketHandler from "../../hooks/useWebSocket.js";


const Counter = () => {
    const [count, setCount] = useState(0);

    useWebSocketHandler(count);

    return (
        <div>
            <h1>Counter: { count } </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;