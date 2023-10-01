import NavBar from "./NavBar";

function Home() {
    return (
        <div>
            <NavBar />
            <div className="logo-container">
                <input id="toggle1" type="checkbox" />
                <label className="hamburger1" htmlFor="toggle1">
                    <img className="logo" src="/src/images/givemegold-logo.png" alt="Logo" />
                </label>
            </div>
            <div className="grid grid-col-2">
                <div className="flex flex-wrap justify-center">
                    <div className="w-[433.38461538461536px] h-[294px] ">
                        <img
                            className="w-full h-full object-cover"
                            src="/src/images/givemegold-2.jpg"
                            alt="Image 1"
                        />
                    </div>
                    <div className="w-[433.38461538461536px] h-[294px]">
                        <img
                            className="w-full h-full object-cover"
                            src="/src/images/givemegold-1.jpg"
                            alt="Image 2"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-[433.38461538461536px] h-[294px]">
                        <img
                            className="w-full h-full object-cover"
                            src="/src/images/givemegold-8.jpg"
                            alt="Image 4"
                        />
                    </div>
                    <div className="w-[433.38461538461536px] h-[294px]">
                        <img
                            className="w-full h-full object-cover"
                            src="/src/images/givemegold-6.jpg"
                            alt="Image 3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
