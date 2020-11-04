import React from "react"
import "./css/ProfileNavbar.css"
import logo from "./ProfileIcon/iconProfile.png"

export const NavbarProfile = () => {
    return (
        <div>
            <ul className={"navbarProfileUl"}>
                <li><img style={{maxWidth: "100%", marginRight: "20px"}} src={logo} alt=""/></li>
                <li><a href="/#">News</a></li>
                <li><a href="/#">Contact</a></li>
                <li><a href="/#">About</a></li>
            </ul>
        </div>
    );
}