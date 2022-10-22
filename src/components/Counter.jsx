import React, { useState } from "react";

const Counter = function() {
    const [count, setCount] = useState(6)

    function increment() {
        setCount(count + 1)
      }
    
      function decrement() {
        setCount(count - 1)
      }
      
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increm</button>
            <button onClick={decrement}>decrem</button>
        </div>
    )
}

export default Counter;