import React, {useEffect, useState} from "react";

const MyComponent = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(12);

    useEffect(() => {
    console.log("My Component")

    }, []);

    useEffect(()=>{
        console.log("Count Updated..", count)
        console.log("Count2 Updated..", count2)
    }, [count, count2]);

    const increment = () => {
        setCount(count + 1);
        setCount2(count2 + 1)
    }

    return(
        <div>
            <p>Count is: {count}</p>
            <p>Count2 is: {count2}</p>
            <button onClick={increment}>update</button>
        </div>
    )
}

export default MyComponent;