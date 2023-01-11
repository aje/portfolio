

const Home = () => {
    return (
        <>
            <div className="main-bg"/>
            <div className="index-bg"/>
            <div className="container flex flex-col justify-center h-screen">
                <h1 className={"text-7xl mt-20 text-gradient relative after:content-['Welcome']"}>Welcome</h1>
                <h1 className={"text-7xl text-gradient relative after:content-['Player1']"}>Player1</h1>
                <h2 className={"text-4xl mt-20 text-shadow"}>Press start to<br/>
                    Enter story mode</h2>

                <div className={"mt-12 flex items-center"}>
                    <a href={'/level/1'} className={"cursor-pointer mr-6 transition duration-150 hover:scale-110 btn-main inline-block text-3xl p-12"}>
                        <span className="text-gradient">START</span>
                    </a>
                    <img src={"/assets/arrow.svg"} />
                </div>


                <h2 className={"text-3xl mt-32 text-shadow"}>Follow me at</h2>
                <div className="flex items-center mt-12">
                    <a href="" className="mr-20 transition duration-150 hover:scale-110  cursor-pointer">
                        <img src={"/assets/btnFb.svg"} alt=""/>
                    </a>
                    <a href="" className="mr-20 transition duration-150 hover:scale-110  cursor-pointer">
                        <img src={"/assets/btnInsta.svg"} alt=""/>
                    </a>
                    <a href="" className="mr-20 transition duration-150 hover:scale-110  cursor-pointer">
                        <img src={"/assets/btnLinkedin.svg"} alt=""/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;