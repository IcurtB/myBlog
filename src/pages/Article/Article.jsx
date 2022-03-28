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
                <img src={postData.user.picture}
                    alt=""/>
                <p>{postData.user.name} {postData.user.pTime}</p> <br/>
            </div>
            <h1>{postData.title}</h1>
            <div className={styles.container}>
                {postData.tags.map((item, index) =>
                    <p key={index}>{`${item}|`}</p>)}
            </div>
            <img src={postData.imageUrl} alt=""/> <br/>
            <p>{postData.desc}</p>
          <br/> <br/>
            <Comments/>
        </div>
    );
};

export default Article;