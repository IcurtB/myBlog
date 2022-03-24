import React from "react";
import {posts} from "../../constant";
import {Link} from 'react-router-dom';
import s from './BlogItem.module.css'

const BlogEntry = (props) => {
    return (
        <div>
            {
                posts.map(content =>
                    <div key={content.id} className="w3-card-4 w3-margin w3-white">
                        <img src={content.imageUrl} alt="Nature" style={{width: '100%'}}/>
                        <div className="w3-container">
                            <h3><b>{content.title}</b></h3>
                            <h5>{content.titleDesc}, <span className="w3-opacity">{content.date}</span></h5>
                        </div>
                        <div className="w3-container">
                            <p className={s.desc}>{content.desc}</p>
                            <div className="w3-row">
                                <div className="w3-col m8 s12">
                                    <p>
                                        <Link to={`/post/${content.id}`}>
                                            <button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button>
                                        </Link>
                                    </p>
                                </div>
                                <div className="w3-col m4 w3-hide-small">
                                    <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span
                                        className="w3-tag">{content.countComments}</span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
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