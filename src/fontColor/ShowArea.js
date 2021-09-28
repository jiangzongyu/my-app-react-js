import {useContext} from "react";
import { ColorContext } from "./Color";

function ShowArea () {
    const { color } = useContext(ColorContext)
    console.log(color);
    return (
        <div style={{color: color}}>字体颜色为{color}</div>
    )
}

export default ShowArea