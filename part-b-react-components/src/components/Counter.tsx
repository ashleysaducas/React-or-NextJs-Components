import React, { useState } from 'react';

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
            <style jsx>{`
                .counter {
                    padding: 20px;
                    border-radius: 8px;
                    background-color: white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    text-align: center;
                    margin: 20px;
                }
                .buttons {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    margin-top: 15px;
                }
                button {
                    padding: 8px 16px;
                    border: none;
                    border-radius: 4px;
                    background-color: #007bff;
                    color: white;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                button:hover {
                    background-color: #0056b3;
                }
                h3 {
                    color: #343a40;
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default Counter; 