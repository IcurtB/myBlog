import React from "react";
import {tags} from "../../constant";

const Tags = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        {
                            tags.map(content => <span key={content.id} className="w3-tag w3-light-grey w3-small w3-margin-bottom">{content.name}</span>)
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tags