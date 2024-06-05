import React, { useState } from 'react';
import '../../CSS/navbar.css'; // Import the CSS file

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }

        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <div className="navbar-container">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>

            <div className={menu_class}>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/recordings">Recordings</a></li>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/my-profile">My Profile</a></li>
                </ul>
            </div>


        </div>
    );
};

export default Navbar;
