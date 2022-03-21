import React from "react";
import {arrayAboutMe} from "../../constant";


const AboutMe = (props) => {
    return (
       <div>
            {
                arrayAboutMe.map(content =>
                    <div key={content.id}className="w3-card w3-margin w3-margin-top">
                    <img src={content.imgUrl} style={{width:"100%"}}/>
                    <div className="w3-container w3-white">
                        <h4><b>{content.name}</b></h4>
                        <p>{content.textarea}</p>
                    </div>
                </div>)
            }
            <hr/>

       </div>
    )
}

export default AboutMe
