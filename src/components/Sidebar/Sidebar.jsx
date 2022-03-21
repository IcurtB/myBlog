import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import PopularPost from "../PoopularPost/PopularPost";
import Tags from "../Tags/Tags";

const SideBar = () => {

    return (
        <div className="w3-col l4">
            <AboutMe/>
            <PopularPost/>
            <Tags/>
        </div>
    )
}
export default SideBar






