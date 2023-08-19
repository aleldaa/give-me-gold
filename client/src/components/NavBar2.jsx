import { NavLink, useNavigate } from "react-router-dom"

function NavBar2() {
    return (
        <div className="p-menu">
            <nav className="navbar2">
                <input id="toggle2" type="checkbox" />
                <label class="hamburger2" for="toggle2">
                    <div class="top"></div>
                    <div class="meat"></div>
                    <div class="bottom"></div>
                </label>

                <nav className="menu2">
                    <NavLink to="/" className="link2">Home</NavLink>
                    <NavLink to="/about" className="link2">About</NavLink>
                    <NavLink to="/book-us" className="link2">Book Us</NavLink>
                    <NavLink to="/donate" className="link2">Donate</NavLink>
                    <a className="link2" href="https://linktr.ee/givemegoldband">
                        <img className="insta-link" src="/src/images/linktree2.png" />
                    </a>
                </nav>
            </nav>
        </div>
    )
}

export default NavBar2
