import React, { useState } from 'react';

const Counter = () => {
    const [counter, incrementCounter] = useState(0);

    handleIncrement = () => {
        incrementCounter(counter + 1)
    };

    return (
        <div>
            <div>{counter}</div>
            <hr />
            <button type="button" onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Counter;