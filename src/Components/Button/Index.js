import React from "react";
import "./Button.scss";
const Button = ({   name, iconSrc, disabled, type="button", onClick, className  }) => {
    return (
        <button
            type={type}
            className={`main-button ${className}` }
            id={"button"}
            onClick={onClick}
            disabled={disabled}
        >
            {/* if something wrong happen with button then just change below span to div  */}
            <span className="name">{name}</span> 
            {iconSrc &&
                <img src={iconSrc} >
            </img>}
        </button>
    );
};

export default Button;
