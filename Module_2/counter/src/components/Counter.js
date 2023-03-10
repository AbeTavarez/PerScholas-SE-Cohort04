import { useState } from 'react';

function Counter() {
    // State variable
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
       setCounter(counter + 1);
    }

    return (
        <div>

            <h2>Counter: {counter}</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Counter;