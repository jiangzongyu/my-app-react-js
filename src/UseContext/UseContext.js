import React, {createContext, useContext, useReducer, useState} from "react";

const CountContext = createContext(undefined, undefined)
// function handleChange (props) {
//     const [count, setCount] = useState(0)
//
// }
function Counter (val) {

    let {con, dispatch} = useContext(CountContext)
    // debugger
    function handleChange () {
        // val.set(count + 1)
      dispatch(8)
      // console.log(con);
    }
    return (
        <>
            <h2>{con}</h2>
            <button onClick={handleChange}>click counter</button>
        </>
    )
}

function reducer (state, a, b) {
  // console.log('jjjjj')
  // console.log(state)
  // console.log(action)
  console.log(b)
  return a
}

function Con (props) {
    const [ count, setCount ] = useState(0)
    const [ con, dispatch ] = useReducer(reducer, 0)
    // const a = {
    //     name: 'jiang',
    //     age: 12
    // }
    return (
        <div>
            <p>{count} times</p>
            <button onClick={() => {setCount(count + 1)}}>click</button>
            <CountContext.Provider value={{ con, dispatch }} >
                {/*<Counter set={setCount}/>*/}
              {props.children}
            </CountContext.Provider>
        </div>
    )
}

function UseContext () {
  return (
    <div>
      <Con>
        <Counter />
      </Con>
    </div>
  )
}

export default UseContext
