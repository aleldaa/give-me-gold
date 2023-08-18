function Home() {
    return (
        <div>
            <div className="logo-container" >
                <input id="toggle1" type="checkbox" />
                <label class="hamburger1" for="toggle1">
                    <img className="logo" src="/src/images/givemegold-logo.png" />
                </label>

            </div>
            <div className="home-imgs">
                <div className="img-containers">
                    <div>
                        <img className="home-img-1" src="/src/images/givemegold-2.jpg" />
                    </div>
                    <div>
                        <img className="home-img-2" src="/src/images/givemegold-1.jpg" />
                    </div>
                </div>
                <div className="img-containers">
                    <div>
                        <img className="home-img-4" src="/src/images/givemegold-8.jpg" />
                    </div>
                    <div>
                        <img className="home-img-3" src="/src/images/givemegold-6.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
