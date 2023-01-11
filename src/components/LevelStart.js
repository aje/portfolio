import {useEffect, useState} from 'react';
import "./LevelStart.css"
import {useParams} from "react-router-dom";

const levels = ['Know about me', "explore my skills"]
const LevelStart = ({title}) => {
    const {level} = useParams();
    const lastLvl = parseInt(level) - 1;

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>setLoading(false), 1000)
    }, [])


    return (
        <div className={"levelStart h-screen text-center flex flex-col items-center justify-center relative"}>
            {loading ?
                <h1 className={"text-7xl mb-20 text-gradient"}>
                    {lastLvl <= 0 ? "INITIALIZING WORLD....." : "Loading next level....."}
                </h1>
                : <>
                <a href={lastLvl <= 0 ? "/": `/level/${lastLvl}`} className="absolute flex items-center top-20 left-20 text-3xl">
                    <img  src={"/assets/backArrow.svg"} className={"mr-12"}/>
                    {lastLvl <= 0 ? "Start Over" : `Level ${lastLvl}`}
                </a>
                <h1 className={"text-7xl mb-20 text-gradient"}>Level {level}</h1>
                <h2 className={"text-4xl mb-24 text-shadow"}>{levels[lastLvl]}</h2>
                <a href={`/level/${level}/content`} className={"cursor-pointer mr-6 transition duration-150 hover:scale-110 btn-main inline-block text-3xl p-12"}>
                    <span className="text-gradient">START</span>
                </a>
            </>}
        </div>
    );
};

export default LevelStart;