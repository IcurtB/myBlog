import {useParams} from 'react-router-dom'
import React from 'react';

import styles from './Article.module.css';
import Comments from './Coments';
import { posts } from '../../constant/';


const Article = () => {
    const params = useParams();
    const postId = parseInt(params.id);
    const postData = posts.find((item) => {
        return item.id === postId;
    })
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <img src="https://habrastorage.org/r/w32/getpro/habr/avatars/27b/f35/f6f/27bf35f6f595fc136b70c384752ba387.jpg"
                    alt=""/>
                <p>OlegSivchenko 18 марта в 03:33</p> <br/>
            </div>
            <h1>{postData.title}</h1>
            <div className={styles.container}>{postData.tags.map((item, index) =>
            <p key={index}>{`${item}           |`}</p>)}</div>
            <img src={postData.imageUrl} alt=""/> <br/>
            <p>{postData.desc}</p>
          <br/> <br/>
            <Comments/>
        </div>
    );
};

export default Article;