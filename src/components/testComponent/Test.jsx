import React, {useState} from "react";
import s from './Test.module.css';
import {toast} from "react-hot-toast";
import {BASE_URL} from "../../constant";
import Button from "../Button/Button";
import arrIcon from "../../media/icons/arr.svg"
const IncDec = () => {
    let [count, setCount] = useState(0);
    const [data, setData] = useState([])
    const getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then((response) =>response.json())
            .then((data) => setData(data))
/*
        GET, POST, PUT, DELETE,

        C - POST
        R - GET
        U - PUT
        D - DELETE*/
    };
    const getUsers = () => {
        const url = BASE_URL + "/users";
        fetch(url)
            .then(response => response.json())
            .then((data) => console.log(data))
    };
    const addUsers = () => {
        const url = BASE_URL + "/users";

        const user = {
            name: 'loalasd',
            age: 19,

        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => console.log(data))
    };
    const updateUser = () => {
        const url =  BASE_URL + "/users/6";
        const users = {
            name: "Jenya",
            age: 24,
        }
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(users)
        }
        fetch(url, options)
            .then(response => response.json())
    };
    const deleteUser = () => {
        const url = BASE_URL + "/users/4";
        const options = {
            method: 'DELETE'
        }
        fetch(url, options)
            .then((response)=> {
                if(response.status === 200){
                    toast.success('Пользователей удален');
                } else {
                    toast.error('Повторите попытку');
                }
            })
    };
    return (
        <div className={s.wdf}>
            <div className={s.df}>
                <div>
                    <button onClick={() => setCount(count + 1)}>Кнопка "+"</button>
                </div>
                <div>
                    <button onClick={() => setCount(count - 1)}>Кнопка "-"</button>
                </div>
                <div>
                    <button onClick={getData}>Запрос данных</button>
                    <button onClick={getUsers}>Получить пользователей</button>
                    <button onClick={addUsers}>Добавить пользователей</button>
                    <button onClick={updateUser}>Изменить пользователя</button>
                    <button onClick={deleteUser}>Удалить пользователя</button>
                    <Button myclass="mainBtn" handleClick={getUsers}>В корзину</Button>
                    <Button myclass="secondaryBtn" handleClick={getData}>В корзину</Button>
                    <Button myclass="mainBtn" handleClick={getUsers} >В корзину <img src={arrIcon} alt=""/></Button>
                </div>

            </div>
            <h3 className={s.count}>{count}</h3>
            {data.map((item) =>{
                return (
                    <p key={item.id}>{item.name}</p>
                )
            } )}
        </div>
    )
};

export default IncDec;

