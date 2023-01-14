import React from 'react';

const ExperienceItem = ({item}) => {
    return (
        <div className={"main-container"}>
            <h1 className={`text-gradient text-5xl relative mb-20`}>{item.name}</h1>

            <div className="grid grid-cols-5 gap-12 myBox gray">
                <div className=" text-center col-span-2">
                    <div className="myBox py-1 sky mb-12">
                        <img src={`/assets/projects/${item.image}`}  alt={item.name}/>
                    </div>
                    <a target={"_blank"} href={item.url} className={"text-xl hover:underline"}> <img  className={"inline scale-[-1] w-16"} src="/assets/arrow.svg" alt=""/> {item.name} <img  className={"inline w-16"} src="/assets/arrow.svg" alt=""/></a>
                </div>
                <div className={" col-span-3 "}>
                    <div className="flex text-sky-700 mb-2 justify-between"><span>Position:</span> <span className={"text-gradient"}>{item.position}</span></div>
                    <div className="flex text-sky-700 mb-2 justify-between"><span>Date of start:</span> <span className={"text-gradientf"}>{item.start}</span></div>
                    <div className="flex text-sky-700 justify-between mb-8"><span>Date of finish:</span> <span className={"text-gradientf"}>{item.finish}</span></div>
                    {item.description}
                </div>
            </div>

            <img src="/assets/astro.svg"  className={"absolute  bottom-[17vh] right-80"}/>
            <img src="/assets/scientist.svg"  className={"absolute  bottom-[15vh] right-20"}/>
        </div>
    );
};

export default ExperienceItem;