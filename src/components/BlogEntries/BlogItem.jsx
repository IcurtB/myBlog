import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import s from './BlogItem.module.css'

const BlogEntry = (props) => {
    console.log(props)


    return (

            <div className="w3-card-4 w3-margin w3-white">
                <img src={props.item.imageUrl} alt="Nature" style={{width: '100%'}}/>
                <div className="w3-container">
                    <h3><b>{props.item.title}</b></h3>
                    <h5>{props.item.desc}, <span className="w3-opacity">{props.item.date}</span></h5>
                </div>
                <div className="w3-container">
                    <p className={s.desc}>{props.item.desc}</p>
                    <div className="w3-row">
                        <div className="w3-col m8 s12">
                            <p>
                                <Link to={`/post/${props.id}`}>
                                    <button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b>
                                    </button>
                                </Link>
                            </p>
                        </div>
                        {/*<div className="w3-col m4 w3-hide-small">*/}
                        {/*    <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span*/}
                        {/*        // className="w3-tag">{props.comments}</span></span></p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>



    )
}

export default BlogEntry

/* Title
 * Title description
 * Date
 * Desc
 * CountComments
 * ImageUrl
 */