import React, {useState, useCallback, useRef, memo} from "react";

const ChildComp = memo(function ({ name, onClick }) {
    console.log('render child-comp ...')
    return <>
        <div>Child Comp ... {name}</div>
        <button onClick={() => onClick('hello')}>改变 name 值</button>
    </>
})
function ParentComp () {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('hi~')
    const increment = () => setCount(count + 1)
    // const nameMemo = useMemo(() => name, [name])
    const changeName = useCallback((newName) => setName(newName), [])
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        console.log(inputEl)
    };
    return (
        <div>
            <button onClick={increment}>点击次数：{count}</button>
            <ChildComp name={name} onClick={changeName}/>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}

export default ParentComp