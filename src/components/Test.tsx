import {useState} from "react";
import style from './Test.module.scss'

export const Test = () => {

    const [count, setCount] = useState(0)

    const plus = () => {
        return setCount(count + 1)
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={plus}>ADD</button>
        </div>
    )
}