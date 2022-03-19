import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import PopularPost from "../PoopularPost/PopularPost";
import Tags from "../Tags/Tags";
const ArrayAboutMe = [
    {
        id:0,
        imgUrl:"https://www.w3schools.com/w3images/avatar_g.jpg",
        name:'My Name',
        textarea:"Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
    },
    {
        id: 1,
        imgUrl: "https://www.w3schools.com/w3images/avatar_g.jpg",
        name: "Alice",
        textarea: "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
    }
]
const SideBar = () => {
    const Array = ArrayAboutMe.map(content =>
        <AboutMe
            key={content.id}
            imgUrl={content.imgUrl}
            name={content.name}
            textarea={content.textarea}/>
    )
    return (
        <div className="w3-col l4">
            {Array}
            <PopularPost/>
            <Tags/>
        </div>
    )
}
export default SideBar






