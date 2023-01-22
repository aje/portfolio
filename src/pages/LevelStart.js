import {useEffect, useState} from 'react';
import "./LevelStart.css"
import {useNavigate, useParams,} from "react-router-dom";
import Congrats from "./Congrats";


export const levels = [
    'Know about me',
    "explore my skills",
    'certificates',
    "work experience",
    "project showcase",
    'recommendations',
    'boss level',
    'congratulations'
]
const LevelStart = ({title}) => {
    const {level} = useParams();
    const lastLvl = parseInt(level) - 1;
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>setLoading(false), 500)
        if(level > 0 && level < 8) {
            setTimeout(() => {
                navigate(`/level/${level}/content`)
            }, 2000);

        }
    }, [])


    return (
        <div className={"levelStart h-screen text-center flex flex-col items-center justify-center relative"}>
            {loading ?
                <h1 className={"text-6xl mb-20 text-gradient"}>
                    {lastLvl <= 0 ? "INITIALIZING WORLD..." : `Loading level ${level}...`}
                </h1>
                : <>
                <a href={lastLvl <= 0 ? "/": `/level/${lastLvl}`} className="absolute flex items-center top-20 left-20 text-3xl">
                    <img  src={"/assets/backArrow.svg"} className={"mr-12"} alt={""}/>
                    {lastLvl <= 0 ? "Start Over" : `Level ${lastLvl}`}
                </a>
                <h1 className={"text-7xl mb-20 text-gradient"}>{level === "8" ? "Congratulations" : `Level ${level}`}</h1>
                <h2 className={"text-4xl mb-24 text-shadow"}>
                    {level !== "8" ? levels[lastLvl] : <>You have passed all the levels <br/> You can go to any levels or start over <br/></>}</h2>
                    <div className="flex items-center">
                        {level !== "8" ? <>
                        {/*.text-2xlloading in {s}s*/}
                                <a href={`/level/${parseInt(level) +1 }`} className="mr-24 opacity-50 text-2xl">Skip</a>
                        <a href={`/level/${level}/content`} className={"cursor-pointer mr-6 transition duration-150 hover:scale-110 btn-main inline-block text-3xl p-12"}>
                            <span className="text-gradient">START</span>
                        </a>
                            </>

                            : <Congrats />}
                    </div>
            </>}
        </div>
    );
};

export default LevelStart;