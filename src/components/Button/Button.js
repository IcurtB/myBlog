import React from "react";
import classNames from "classnames"
import s from "./Button.module.css"
const Button = ({myclass, handleClick, children}) => {
    return (
        <button
            className={classNames(s.btn, s[myclass])}
            onClick={handleClick}>{children}</button>
    )
};

export default Button;

