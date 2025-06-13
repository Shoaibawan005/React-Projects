import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    function decrement(){
        setCount(count-1);
    }
    
    const increment = () => {
        setCount(count+1)
    }

    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            <p>Count Component - {count}</p>
            <h6>Nummber is: {count & 1 == 1 ? "Odd." : "Even."}</h6>
            <span>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </span>

        </div>
    )
};

export default CounterComponent;