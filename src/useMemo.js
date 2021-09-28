import {useMemo, useState} from "react";


function UseMemo () {
    const [xiaohong, setXiaohong] = useState('小红pending')
    const [zhiling, setZhiling] = useState('指令pending')

    return (
        <>
            <button onClick={() => { setXiaohong(new Date().getTime()) }}>red</button>
            <button onClick={() => { setZhiling(new Date().getTime() + 'zhiling coming')}}>ins</button>

            <ChildComponent name={xiaohong} children={213}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent ({ name, children }) {
    console.log(children)

    function changeXiaohong () {
        console.log('red coming')

        return name + 'red coming'
    }

    const actionXiahong = useMemo(() => changeXiaohong(name), [name])

    return (
        <>
            <div>{actionXiahong}</div>
            <div>{children}</div>
        </>
    )
}

export default UseMemo