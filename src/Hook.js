import React, {useState, createContext, useContext} from 'react';

const initialCount = 0
const Context = createContext(12)
function Item () {
    const count = useContext(Context)
    return (
        <h1>{count}</h1>
    )
}
const data = [
    {id: 1, name: 'jiang'},
    {id: 2, name: 'zong'},
    {id: 3, name: 'yu'}
]
export default function Hook() {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            {
                data.map(item => (
                    <div>{item.name}</div>
                ))
            }
            <Context.Provider value={count}>
                <Item />
            </Context.Provider>
            <div style={{background: 'red'}}>123</div>
        </>
    );
}