import { NavLink, useNavigate } from "react-router-dom"

function NavBar(){
    return(
        <nav className="navbar">
            <div className="header">
                <div className="main-title">
                    <div className="navbar-elements">
                        {/* <NavLink to="/" className="navLink">
                            <img className="home-icon" src="/src/images/gold2.png"/>
                        </NavLink>
                        <NavLink to="/bio" className="navLink">
                            <img className="bio-icon" src="/src/images/gold2.png"/>
                        </NavLink> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
