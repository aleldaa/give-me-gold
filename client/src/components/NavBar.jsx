import { NavLink, useNavigate } from "react-router-dom"
import About from "./About"

function NavBar() {
    return (
        <div className="p-menu ">
            <nav className="navbar">
                <input id="toggle1" type="checkbox" />
                <nav className="menu1">
                    <NavLink to="/" className="link1">Home</NavLink>
                    <NavLink to="/about" className="link1">About</NavLink>
                    <NavLink to="/book-us" className="link1">Book Us</NavLink>
                    <NavLink to="/donate" className="link1">Donate</NavLink>
                    <a className="link1" href="https://linktr.ee/givemegoldband">
                        <img className="insta-link" src="/src/images/linktree2.png"/>
                    </a>
                </nav>
            </nav>
        </div>
    )
}

export default NavBar
