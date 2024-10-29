import React from "react";
import "./dropdown.scss";
import Link from "next/link";
const DropDown = ({ show, options = [], dropdownRef, handleDropdown }) => {

    if (!show) return;
    return (
        <div ref={dropdownRef} id={"dropdownn"}>
            <ul className="dropdown-containerr">
                {options?.map(({ link, name }, i) => {
                    return <li key={i} >

                        <Link className="link-wrapper" onClick={ handleDropdown} href={link}>
                            {name}
                        </Link>

                    </li>
                })
                }
            </ul>
        </div>
    );
};

export default DropDown;
