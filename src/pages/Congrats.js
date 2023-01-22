import React from 'react';
import {levels} from "./LevelStart";

const Congrats = () => {
    return (
        <div className={"text-left"}>
            {levels.map((l, i) => i < 7 && <a key={l} className={" block mb-4 text-2xl hover:scale-110 duration-150 text-blue-100 hover:text-blue-400 cursor-pointer"} href={`/level/${i+1}`}>
                <img src="/assets/levelClearedAlian.svg" alt="" width={44} className={"mx-6 inline"}/>
                Level {i+1} - {l}
            </a>)}


            <a  className={"text-gradient block mb-4 text-center mt-12 text-3xl hover:scale-110 duration-150  cursor-pointer"} href={"/"}>
                <img width={36} src={"/assets/undo.png"} className={"mr-6 align-middle inline"} alt={"undo"}/>
                Start Over
            </a>



        </div>
    );
};

export default Congrats;