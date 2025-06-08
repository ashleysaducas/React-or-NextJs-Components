import React, { useState } from 'react';
import './Counter.css';

interface CounterProps {
    initialValue?: number;
    step?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0, step = 1 }) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prev => prev + step);
    const decrement = () => setCount(prev => prev - step);
    const reset = () => setCount(initialValue);

    return (
        <div className="counter">
            <h3>Counter: {count}</h3>
            <div className="buttons">
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Counter; 