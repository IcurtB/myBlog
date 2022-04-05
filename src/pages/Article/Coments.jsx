import React, {useEffect, useState} from 'react';
import styles from './Article.module.css'
import {BASE_URL, comments} from '../../constant';
import {toast} from "react-hot-toast";
import {useParams} from "react-router-dom";

const Comments = (props) => {
    const params = useParams()
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const getName = (event) => {
        setName(event.currentTarget.value)
    };
    const getComment = (event) => {
        setComment(event.currentTarget.value)
    };
    const url = BASE_URL + '/comments';
    const addComment = () => {
        const now = new Date()
        const obj = {
            author:name,
            comment:comment,
            postId:props.postId,
            date: now.toLocaleDateString()
        }


        const options = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }
        fetch(url, options)
            .then(response => {
                if(response.status === 201){
                    return response.json()
            } else {
                    toast.error('Что то пошло не так. Попробуйте заново!')
                }
            })
    }

    const [comm, setComm] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(date => setComm(date))
    }, [])

    return (
        <div className={styles.comments}>
            <h4>Комментарии</h4>
            <div className={styles.container}>
                <img src="https://sevelina.ru/images/uploads/2014/02/287.png" alt="" />
                <input onChange={getName} className={styles.container1} type="text" placeholder='Введите имя'/>
                <input onChange={getComment} type="text" placeholder='Введите текст комментария'/>
                <button onClick={addComment}>Оставить комментарий</button>
            </div><br /> <br />
            <h5>122 комментариев  </h5>
            {
                comm.map((item) => {
                    return <div key={item.id}>
                        <div className={styles.container}>
                            <img src={item.img} alt="" />
                            <p>{item.author}</p>
                            <p>{item.date}</p><br />
                        </div>
                        <p>{item.comment}</p>
                        <h6>Ответить</h6>
                    </div>
                })
            }
        </div>
    );
};

export default Comments;