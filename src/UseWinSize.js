import {useCallback, useEffect, useState} from "react";

function UseWinSize () {
    const [ size, setSize ] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)

        return () => {
            window.addEventListener('resize', onResize)
        }
    }, [])

    return size
}

function Demo () {
    const size = UseWinSize()

    return (
        <h1>page size: {size.width} x {size.height}</h1>
    )
}

export default Demo