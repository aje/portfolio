const Lvl1 = () => {
    return (
        <>
            <div className="main-bg"/>
            <div className="footer-bg"/>

            <div className="flex h-screen flex-col justify-center items-center">
                <h1 className="text-gradient text-5xl relative after:content-['It\'s_Behrouz_!!']">It's Behrouz !!</h1>
                <div className="flex items center">
                    <div className="avatar">avatar</div>
                    <div className="content">content</div>
                </div>
            </div>

            <a href={"/level/2"}  className={"absolute  bottom-[18vh] right-[8vw]"}>
                <div className={"bg-blue-300 p-8 absolute -top-32  right-10 left-[-100%]"}>Click me to<br /> enter next<br /> level</div>
                <img src={"/assets/astro.svg"} className={"scale-x-[-1]"}/>
            </a>

        </>
    );
};

export default Lvl1;