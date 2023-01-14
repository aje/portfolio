import "./lvl1.css"

const Bio = () => {
    return (
        <>
            <div className="main-bg"/>
            <div className="footer-bg"/>

            <div className="flex h-screen container pr-56 flex-col justify-center pb-32 items-center">
                <h1 className="text-gradient text-5xl relative after:content-['It\'s_Behrouz_!!']">It's Behrouz !!</h1>
                <div className="flex items-center z-[3] relative ">
                    <div className="avatar w-64 h-64 flex items-center justify-center">
                        <img src="/assets/img.png" className={"w-44"} alt=""/>
                    </div>
                    <div className="text-shadow leading-loose text-2xl m-10 flex-1 p-4  after:bg-gray-200 relative ">
                        Carlos is a professional software engineer and full-stack web developer specializing in the Ruby on Rails framework. He has worked with tech companies for over a decade, helping to build technology-based businesses from the ground up.
                    </div>
                </div>
            </div>

            <a href={"/level/2"}  className={"absolute  bottom-[18vh] right-[8vw]"}>
                <div className={"myBox sky p-6 shadow-2 absolute  w-52  left-[-30%]"}>
                    Click me to<br /> enter next<br /> level
                    <div className="arrow center  border-solid border-sky-500"/>
                </div>
                <img src={"/assets/astro.svg"} className={"scale-x-[-1]"}/>
            </a>

        </>
    );
};

export default Bio;