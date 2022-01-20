import { useState } from 'react';

function SmartCounter() {
    const [counter, setCounter] = useState(0);
    return(
        <>
            <h2>Smart Counter</h2>
            <h3>works the same</h3>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter + 1)}>Aumentar</button>
            <button onClick={()=>setCounter(counter - 1)}>Diminuir</button>

        </>
    )
}


export default SmartCounter;