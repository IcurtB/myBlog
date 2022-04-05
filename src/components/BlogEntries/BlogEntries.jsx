import React, {useEffect, useState} from "react";
import BlogEntry from "./BlogItem";
import {BASE_URL} from '../../constant'
import {useParams} from "react-router-dom";

const BlogEntries = () => {
    const url = BASE_URL + "/posts/" ;
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className="w3-col l8 s12">
            {
                posts.map((item) => {
                    return <BlogEntry
                        key={item.id}
                        item={item}
                        id={item.id}

                    />
                })
            }
        </div>


    )
}
export default BlogEntries;