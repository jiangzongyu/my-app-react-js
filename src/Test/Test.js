import React, {useState, useCallback, useRef, useMemo, memo} from "react";

const ChildComp = memo(function ({ name, onClick }) {
  console.log('render child-comp ...')
  // const child1 = useMemo(() => <div>Child Comp ... {name}</div>, [])
  // const child2 = useMemo(() => <button onClick={() => onClick('hello')}>改变 name 值</button>, [])
  return (
    <>
      <div>Child Comp ... {name}</div>
      <button onClick={() => onClick('hello')}>改变 name 值</button>
      {/*{child1}*/}
      {/*{child2}*/}
    </>
  )
}, function (a, b) {
  return a.name === b.name
})

// const ChildComp = function ({ name, onClick }) {
//   console.log('render child-comp ...')
//   const child1 = useMemo(() => <div>Child Comp ... {name}</div>, [name])
//   const child2 = useMemo(() => <button onClick={() => onClick('hello')}>改变 name 值</button>, [name])
//   return (
//     <>
//       {child1}
//       {child2}
//     </>
//   )
// }

function ParentComp () {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('hi~')
    const increment = () => setCount(count + 1)
    // const nameMemo = useMemo(() => name, [name])
    const changeName = useCallback((newName) => {
      console.log(newName)
      return setName(newName)
    }, [])
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        // console.log(inputEl)
    };
    return (
        <div>
            <h4>Test</h4>
            <button onClick={increment}>点击次数：{count}</button>
            <ChildComp name={name} onClick={changeName}/>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}

export default ParentComp
