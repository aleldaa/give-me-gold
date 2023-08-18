import { NavLink, useNavigate } from "react-router-dom"

function NavBar() {
    return (
        <div className="p-menu">
            <nav className="navbar">
                <input id="toggle1" type="checkbox" />
                <label class="hamburger1" for="toggle1">
                    <div class="top"></div>
                    <div class="meat"></div>
                    <div class="bottom"></div>
                </label>

                <nav className="menu1">
                    <a className="link1" href="">About</a>
                    <a className="link1" href="">Book Us</a>
                    <a className="link1" href="">Donate</a>
                    <a className="link1" href="">
                        <img className="social-media-links" src="/src/images/insta-logo.png"/>
                    </a>
                    <a className="link1" href="">
                        <img className="social-media-links" src="/src/images/tiktok-logo.png"/>
                    </a>
                </nav>
            </nav>
        </div>
    )
}

export default NavBar
