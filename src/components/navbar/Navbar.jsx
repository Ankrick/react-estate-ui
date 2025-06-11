import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";

function Navbar(){

    const [open, setOpen] = useState(false)

    return(
        <nav>
            <div className="left">
                <a className="logo" href="/">
                    <img src="logo.png" alt=""></img>
                    <span>RentNest</span>
                </a>
                <Link to="">Home</Link>
                <Link to="/about">About</Link>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                <a href="">Sign in</a>
                <a className="register" href="">Sign up</a>
                <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
                    <img src="/menu.png" alt="" />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;