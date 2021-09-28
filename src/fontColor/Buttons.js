import {useContext} from "react";
import {ColorContext, UPDATE_COLOR} from "./Color";

function handleTouchMove () {
    console.log('hhahah')
}

function Buttons () {
    const { dispatch } = useContext(ColorContext)

    return (
        <div>
            <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'red'})}>红色</button>
            <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
            <div onClick={handleTouchMove}>click me</div>
        </div>
    )
}

export default Buttons