import React, {useState, createContext, useContext, useEffect} from 'react';

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
export default function Index() {
    const [count, setCount] = useState(initialCount);
    // console.log(useRef(count));
    // const lastCount = useRef(count)
    // useEffect(() => {
    //     // console.log(lastCount)
    //     lastCount.current = count
    //     setTimeout(() => {
    //         // console.log(`clicked ${lastCount.current} times`)
    //     }, 1000)
    //     // const id = setInterval(() => {
    //     //     setCount(count + 1);
    //     // }, 1000);
    //     // return () => clearInterval(id);
    // }, [count])
    useEffect(() => {
        // const id = setInterval(() => {
        //     setCount(count + 1);
        // }, 1000);
        // return () => clearInterval(id);
    }, [count])
    const temp = data.map((item, index) => (index !== 1 ? <div key={index}>{item.name}</div> : ''))
    return (
        <>
            <h4>Hook</h4>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            { temp }
            <Context.Provider value={count}>
                <Item />
            </Context.Provider>
            <div style={{background: 'red'}}>123</div>
        </>
    );
}
