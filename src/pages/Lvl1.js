import "./lvl1.css"

const Lvl1 = () => {
    return (
        <>
            <div className="main-bg"/>
            <div className="footer-bg"/>

            <div className="flex h-screen container pr-56 flex-col justify-center pb-32 items-center">
                <h1 className="text-gradient text-5xl relative after:content-['It\'s_Behrouz_!!']">It's Behrouz !!</h1>
                <div className="flex items-center z-[3] relative">
                    <div className="avatar w-64 h-64 flex items-center justify-center">
                        <img src="/assets/img.png" className={"w-44"} alt=""/>
                    </div>
                    <div className="myBdox text-shadow text-2xl m-10 flex-1 p-4 stext-gray-700 sbg-gray-200 sbefore:bg-gray-200 after:bg-gray-200 relative sborder-solid sborder-sky-900">
                        Carlos is a professional software engineer and full-stack web developer specializing in the Ruby on Rails framework. He has worked with tech companies for over a decade, helping to build technology-based businesses from the ground up.
                    </div>
                </div>
            </div>

            <a href={"/level/2"}  className={"absolute  bottom-[18vh] right-[8vw]"}>
                <div className={"myBox bg-sky-500 border-solid before:bg-sky-500 after:bg-sky-500 border-sky-900 p-6 shadow-2 absolute -top-32 w-52  right-10 left-[-80%]"}>
                    Click me to<br /> enter next<br /> level
                    <div className="arrow center  border-solid border-sky-500"/>
                </div>
                <img src={"/assets/astro.svg"} className={"scale-x-[-1]"}/>
            </a>

        </>
    );
};

export default Lvl1;