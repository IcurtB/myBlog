import React from "react";

const PopularPosts = () => {
    const arrayPopularPost = [
        {
            id: 0,
            imgUrl: "https://www.w3schools.com/w3images/workshop.jpg",
            title: 'Lorem',
            text: 'Sed mattis nunc',
        },
        {
            id: 1,
            imgUrl: "https://www.w3schools.com/w3images/gondol.jpg",
            title: 'Ipsum',
            text: 'Praes tinci sed',
        },
        {
            id: 2,
            imgUrl: "https://www.w3schools.com/w3images/skies.jpg",
            title: 'Dorum',
            text: 'Ultricies congue',
        },
        {
            id: 3,
            imgUrl: "https://www.w3schools.com/w3images/rock.jpg",
            title: 'Mingsum',
            text: 'Lorem ipsum dipsum',
        },
        {
            id: 4,
            imgUrl: "https://www.w3schools.com/w3images/rock.jpg",
            title: 'Gaougio',
            text: 'Lorem ipsum dipsum',
        },
    ]
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




