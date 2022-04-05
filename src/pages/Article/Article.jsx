import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './Article.module.css';
import Comments from './Coments';
import {BASE_URL} from '../../constant/';


const Article = (props) => {
    const params = useParams();
    const postId = parseInt(params.id);
    const [posts, setPosts] = useState({});


    useEffect(() => {
        const url = BASE_URL + '/posts/' + postId;

        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
    //    ПРОЧИТАЙ ЗАВИСИМОСТИ USEEFFECTS
    },[])
    // const postData = posts.find((item) => {
    //     return item.id === postId;
    // })

    return (
        <div className={styles.main}>
            {/*{console.log(posts)}*/}
          {/*  <div className={styles.container}>*/}
          {/*      <img src={posts.user.picture} alt=""/>*/}
          {/*      <p>{posts.user.name} {posts.user.pTime}</p> <br/>*/}
          {/*  </div>*/}
            <h1>{posts.title}</h1>
            {/*{console.log(posts.tags)}*/}
            <div className={styles.container}>
                {/*{console.log(typeof (posts.tags))}*/}
            {/*    {posts.tags.map((item, index) =>*/}
            {/*     <p key={index}>{`${item}|`}</p>)}*/}
            </div>
            <img src={posts.imageUrl} alt=""/> <br/>
            <p>{posts.desc}</p>
          <br/> <br/>
            <Comments postId={postId} />
        </div>
    );
};

export default Article;