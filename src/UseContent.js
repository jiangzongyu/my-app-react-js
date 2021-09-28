import React, {createContext, useContext, useState} from "react";

const CountContext = createContext(undefined, undefined)
// function handleChange (props) {
//     const [count, setCount] = useState(0)
//
// }
function Counter (val) {
    
    let count = useContext(CountContext)
    console.log(val.set)
    // debugger
    function handleChange () {
        val.set(count + 1)
    }
    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleChange}>click counter</button>
        </>
    )
}

function UseContent () {
    const [ count, setCount ] = useState(0)
    // const a = {
    //     name: 'jiang',
    //     age: 12
    // }
    return (
        <div>
            <p>{count} times</p>
            <button onClick={() => {setCount(count + 1)}}>click</button>
            <CountContext.Provider value={count} >
                <Counter set={setCount}/>
            </CountContext.Provider>
        </div>
    )
}

export default UseContent