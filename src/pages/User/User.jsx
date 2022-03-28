import React, {useState} from "react";
import s from './User.module.css'

const User = () => {
    let [user, setUser] = useState([]);
    let url = 'https://jsonplaceholder.typicode.com/users';
    const getUser = () => {
        fetch(url)
            .then((response) => response.json())
            .then((user) => {
                return setUser(user)
            })
        console.log(user)
    }

    return (
        <div>
            <div className={s.container}>
                {user.map((item) => {
                    return (
                        <div className={s.df}>
                            <p className={s.h3}>{item.name}</p>

                            <p className={s.p}>{item.email}</p>
                            <p className={s.phone}>{item.phone}</p>

                            <p className={s.h4}>{item.company.name}</p>
                            <p className={s.p}>{item.website}</p>

                        </div>
                    )
                })}
            </div>
            <button onClick={getUser}>пользователи</button>
        </div>

    )
}


export default User



