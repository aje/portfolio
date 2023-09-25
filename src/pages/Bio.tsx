import "./lvl1.css";
import {levels} from "./LevelStart";
import {useParams} from "react-router-dom";
import {profile} from "../data";

const Bio = () => {
    const {level} = useParams();
    let l = 0;
    if (typeof level === "string") {
        l = parseInt(level);
    }
    return (
        <>
            <div className="main-bg" />
            <div className="footer-bg" />
            <div className="absolute opacity-50 hover:opacity-100 flex w-full z-40 items-center justify-between top-16 px-20 text-2xl">
                <a href={l <= 0 ? "/" : `/level/${l}`}>
                    <img width={36} src={"/assets/undo.png"} className={"mr-12 align-middle inline"} alt={"undo"} />
                    {"Start Over"}
                </a>
                <span>
                    level {l} - {levels[l - 1]}
                </span>
            </div>

            <div className="flex h-screen container pr-56 flex-col justify-center pb-32 items-center">
                <h1 className="text-gradient text-5xl relative after:content-['It\'s_Behrouz_!!']">{profile.name}</h1>
                <div className="md:flex flex-col md:flex-row items-center  z-[3] relative ">
                    <div className="avatar w-64 h-64 flex items-center justify-center">
                        <img src="/assets/img.png" className={"w-44"} alt="" />
                    </div>
                    <div className="tesxt-shadow font-bold font-mono leading-loose text-2xl m-10 flex-1 p-4  after:bg-gray-200 relative max-h-96 overflow-y-auto">
                        {profile.bio}
                    </div>
                </div>
            </div>

            <a href={"/level/2"} className={"absolute hover:scale-[1.05] duration-150 bottom-[18vh] right-[8vw]"}>
                <div className={"myBox sky p-6 shadow-2 absolute  w-52  left-[-45%]"}>
                    Click me to
                    <br /> enter next
                    <br /> level
                    <div className="arrow center  border-solid border-sky-500" />
                </div>
                <img src={"/assets/astro.svg"} className={"scale-x-[-1]"} alt={"astro"} />
            </a>
        </>
    );
};

export default Bio;
