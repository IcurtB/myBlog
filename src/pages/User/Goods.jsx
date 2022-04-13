import React, {useEffect, useState} from "react";
// import s from "./Goods.module.css"
import s from "./Goods.module.css"
import classNames from "classnames";
import Button from "../../components/Button/Button";
import {BASE_URL} from "../../constant";
import {toast} from "react-hot-toast";


const GoodsCard = ({name, ing, price, item}) =>{
    let [count, setCount] = useState(1);

    let inc =() => {
        setCount(count + 1)
    };
    let dec = () => {
        if(count > 1){
            setCount(count - 1)}
    };

    let addCard = () => {
        let cardStorage = localStorage.getItem("card");

        const id = item.id
        let obj = {
            [id]: {
                ...item,
                count
            }
        }


        if(cardStorage){
            cardStorage = JSON.parse(cardStorage)
            obj = {
                ...obj,
                ...cardStorage
            }
        }
        localStorage.setItem("card", JSON.stringify(obj))


    };


    return(
        <div className={classNames(s.goodsCard)}>
            <h1>{name}</h1>
            <p>{ing}</p>
            <h3><span>{price}</span> сом</h3>
            <div>
                <button onClick={dec}>-</button>
                <p>{count}</p>
                <button onClick={inc}>+</button>
            </div>
            <Button myclass="secondaryBtn" handleClick={() => addCard(item)}>В КОРЗИНУ</Button>
        </div>
    )
}

const Goods = () => {
    let [goods, setGoods] = useState([]);

    let allGoods = {
        1: {
            name: "Хот Чиз Ролл",
            price: 250,
            count: 1
        },
        5: {
            name: "Русский Ролл",
            price: 500,
            count: 1
        }
    };

    let getGoods = () => {
        const url = BASE_URL + "/goods";
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Что то пошло не так. Обновите страничку");
                }
            })
            .then(data => setGoods(data))
    };



    useEffect(() => {
        getGoods();

    }, [])
    return (
        <>
            <a href="">Корзина</a>
            <div className={classNames(s.container)}>
                {
                    goods.map(item => {
                        return (
                            <GoodsCard
                                key={item.id}
                                item={item}
                                name={item.name}
                                ing={item.ing}
                                price={item.price}
                            />
                        )
                    })
                }
            </div>
        </>
    )
};

export default Goods;
