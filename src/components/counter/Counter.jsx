import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

function Counter() {
    const [count, setCount] = useState(0)

    function incrementParentCounter(by) {
        setCount(count + by)
    }

    function decrementParentCounter(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
           
            <CounterButton by = {1}
                 incrementMethod = {incrementParentCounter}
                 decrementMethod = {decrementParentCounter} />
            <CounterButton by = {2} 
                 incrementMethod = {incrementParentCounter}
                 decrementMethod = {decrementParentCounter} />
            <CounterButton by = {5} 
                incrementMethod = {incrementParentCounter}
                 decrementMethod = {decrementParentCounter} />
            <span className="number">{count}</span><br></br>
            <button className="resetNumber" onClick={resetCounter} >Reset</button>
        </>
    )
}


export default Counter;