import NavBar2 from "./NavBar2"


function About(){
    return(
        <div>
            <NavBar2 />
            <div className="about-container1">
                <div className="about-container">
                    <div className="banner-container">
                        <img className="banner" src="/src/images/give-me-gold-banner.png" />
                    </div>
                    <div>
                        <img className="terri-pic" src="/src/images/givemegold-3.jpg" />
                        <h3 className="terri-title">Terri</h3>
                        <p className="terri-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
