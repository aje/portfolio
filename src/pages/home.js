

const Home = () => {
    return (
        <>
            <div className="main-bg"/>
            <div className="index-bg"/>
            <div className="container flex flex-col justify-center h-screen">
                <h1 className={"text-7xl mt-20 text-gradient relative after:content-['Welcome']"}>Welcome</h1>
                <h1 className={"text-7xl text-gradient relative after:content-['Player1']"}>Player1</h1>
                <h2 className={"text-4xl mt-20 text-shadow"}>Press start to<br/>
                    Enter my story</h2>

                <div className={"mt-12 flex items-center"}>
                    <a href={'/level/1'} className={"cursor-pointer mr-6 transition duration-150 hover:scale-110 btn-main inline-block text-3xl p-12"}>
                        <span className="text-gradient">START</span>
                    </a>
                    <img src={"/assets/arrow.svg"} />
                </div>


                <h2 className={"text-3xl mt-32 text-shadow"}>Contact me at</h2>
                <div className="flex items-end mt-8">
                    <a href="" title={"Email"} className="mr-16 transition duration-150 hover:scale-110  cursor-pointer">
                        <img src={"/assets/mail.png"} width={40} alt="Email"/>
                    </a>
                    <a href="" title={"Linkedin"} className="mr-16 transition duration-150 hover:scale-110  cursor-pointer">
                        <img src="/assets/linkedin.png" width={40} alt="Linkedin"/>
                    </a>
                    <a href="" className="mr-16 transition duration-150 hover:scale-110  cursor-pointer">
                        <img src="/assets/chat.png" width={40} title={"WeChat"} alt="WeChat"/>
                    </a>
                    {/*<a href="" className="mr-16 transition duration-150 hover:scale-110  cursor-pointer">*/}
                    {/*    <img src={"/assets/btnLinkedin.svg"} alt=""/>*/}
                    {/*</a>*/}
                </div>
                <p className={"mt-8 text-sky-900 text-xl text-shadow-1"}>Email: behroozina@live.com</p>
                <p className={" text-sky-900 text-shadow-1 text-xl"}>Resume: <a href="/" className={"text-sky-700 hover:underline"} title={"Download PDF"}>
                    <img src="/assets/downloading.png" width={20} alt="Download Behrouz Erfania Resume" className="inline mr-2"/>
                    Download PDF
                </a></p>
            </div>
        </>
    );
};

export default Home;