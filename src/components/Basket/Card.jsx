import React, {useState} from "react";
import s from "./Basket.module.css";


const CardFromBasket = ({id, name, price, count, del}) => {
    let [counter, setCounter] = useState(count)

    let dec = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    let inc = () => {
        setCounter(counter + 1)
    }
    let finalPrice = counter * price


    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{counter}</td>
                <td>
                    <button onClick={dec}>-</button>
                </td>
                <td>
                    <button onClick={inc}>+</button>
                </td>
                <td>{finalPrice}</td>
                <td>
                    <button onClick={() => del}>Удалить</button>
                </td>
            </tr>
        </>
    )
};

export default CardFromBasket