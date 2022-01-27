import {createContext, useReducer} from "react";

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props => {
    // console.log(ColorContext)
    // console.log(props)
    const [color, dispatch] = useReducer(reducer, 'blue', undefined)
    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
