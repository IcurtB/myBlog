import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import PopularPost from "../PoopularPost/PopularPost";
import Tags from "../Tags/Tags";
import IncDec from "../testComponent/Test";

const SideBar = () => {

    return (
        <div className="w3-col l4">
            <AboutMe/>
            <PopularPost/>
            <Tags/>
            <IncDec/>
        </div>
    )
}
export default SideBar






