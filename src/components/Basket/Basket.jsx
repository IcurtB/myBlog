import React, {useEffect, useState} from "react";
import s from "./Basket.module.css"
import CardFromBasket from "./Card";


const Basket = () => {
    let card = localStorage.getItem("card")
    let obj = JSON.parse(card)

    let items = Object.keys(obj)
    let del = () => {

    }

    return (
        <>
            <table className={s.table}>
                <tbody>
                <tr>
                    <td>№</td>
                    <td>Название</td>
                    <td>Количество</td>
                    <td>-</td>
                    <td>+</td>
                    <td>Сумма</td>
                    <td>Удалить</td>
                </tr>

                {

                    items.map((item, index) => {
                        return (
                            <CardFromBasket
                                key={obj[item].id}
                                id={obj[item].id}
                                name={obj[item].name}
                                price={obj[item].price}
                                count={obj[item].count}
                                del={index}
                            />
                        )
                    })
                }

                {/*<CardFromBasket/>*/}
                </tbody>
            </table>

        </>
    )
};

export default Basket;
// <table className={s.table}>


//     <tr>
//         <td>2</td>
//         <td></td>
//         <td></td>
//         <td>
//             <button>-</button>
//         </td>
//         <td>
//             <button>+</button>
//         </td>
//         <td></td>
//         <td></td>
//     </tr>
// </table>