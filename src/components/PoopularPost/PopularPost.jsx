import React from "react";
import {arrayPopularPost} from "../../constant";

const PopularPosts = () => {
    const PopularPost = arrayPopularPost.map(content =>
        <li key={content.id} className="w3-padding-16">
            <img src={content.imgUrl} alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
            <span className="w3-large">{content.title}</span><br />
            <span>{content.text}</span>
        </li>
    )
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {PopularPost}
                </ul>
            </div>
            <hr />
        </>

    )
}
export default PopularPosts




