import React, {useState} from "react";
import s from './Test.module.css'
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
    }
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

