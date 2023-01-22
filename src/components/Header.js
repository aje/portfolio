import React from 'react';
import {levels} from "../pages/LevelStart";
import {useParams} from "react-router-dom";

const Header = () => {
    const {level} = useParams()
    const l = parseInt(level)
    return (
        <div  className="absolute opacity-50 hover:opacity-100 flex w-full z-40 items-center justify-between top-16 px-20 text-2xl">
            <a href={l <= 0 ? "/": `/level/${l}`}>
                <img width={36} src={"/assets/undo.png"} className={"mr-12 align-middle inline"}/>
                {"Start Over"}
            </a>
            <span>level {l} - {levels[l-1]}</span>
        </div>
    );
};

export default Header;