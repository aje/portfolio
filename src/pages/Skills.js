import CarouselContainer from "../components/CarouselContainer";

const Skills = () => {
    return (
        <CarouselContainer>
            <div className={"container flex-col h-screen flex justify-center relative pb-32 items-center"}>
                <h1 className="text-center text-gradient text-5xl relative after:content-['Character_skills'] ">Character skills</h1>
                <div className="myBox  gray p-8 mt-12 ">
                        <ul className={"skills text-2xl"}>
                            <li>
                                <div className="flex items-center mb-8">
                                    <img className={"w-10 mr-6"} src="/assets/mobile-phone.png" alt=""/>
                                    <p className={"flex-1"}>ReactJS, React Native, ...</p>
                                    <div className="text-3xl text-sky-600 ">52 Months XP</div>
                                </div>
                                {/*<div className={"mb-8 mt-4 relative"}>*/}
                                {/*    <div className="myBox gray h-5">*/}
                                {/*        <div className="absolute -top-1 -left-1 w-full">*/}
                                {/*        <div className="myBox sky  w-[90%]  h-5"/></div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </li>

                            <li>
                                <div className="flex items-center mb-8">
                                    <img className={"w-10 mr-6"} src="/assets/monitor.png" alt=""/>
                                    <p className={"flex-1"}>HTML5, CSS3, JavaScript, ...</p>
                                    <div className="text-3xl text-sky-600 ">120 Months XP</div>
                                </div>
                                {/*<div className={"mb-8 mt-4 relative"}>*/}
                                {/*    <div className="myBox gray h-5">*/}
                                {/*        <div className="absolute -top-1 -left-1 w-full">*/}
                                {/*        <div className="myBox sky  w-[98%]  h-5"/></div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </li>

                            <li>
                                <div className="flex items-center mb-8">
                                    <img className={"w-10 mr-6"} src="/assets/thinking.png" alt=""/>
                                    <p className={"flex-1"}>UX researcher, UI/UX Designer, ...</p>
                                    <div className="text-3xl text-sky-600 ">30 Months XP</div>
                                </div>
                                {/*<div className={"mb-8 mt-4 relative"}>*/}
                                {/*    <div className="myBox gray h-5">*/}
                                {/*        <div className="absolute -top-1 -left-1 w-full">*/}
                                {/*            <div className="myBox sky  w-[80%]  h-5"/></div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </li>
                            <li>
                                <div className="flex items-center mb-8">
                                    <img className={"w-10 mr-6"} src="/assets/gaming.png" alt=""/>
                                    <p className={"flex-1"}>NextJS, NodeJS,PHP, Java, ...</p>
                                    <div className="text-3xl text-sky-600 ">10 Months XP</div>
                                </div>
                                {/*<div className={"mb-8 mt-4 relative"}>*/}
                                {/*    <div className="myBox gray h-5">*/}
                                {/*        <div className="absolute -top-1 -left-1 w-full">*/}
                                {/*        <div className="myBox sky  w-[50%]  h-5"/></div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </li>

                            <li>
                                <div className="flex items-center mb-8">
                                    <img className={"w-10 mr-6"} src="/assets/pixels.png" alt=""/>
                                    <p className={"flex-1"}>Database, MongoDB, SQL, ...</p>
                                    <div className="text-3xl text-sky-600 ">40 Months XP</div>
                                </div>
                                {/*<div className={"mb-8 mt-4 relative"}>*/}
                                {/*    <div className="myBox gray h-5">*/}
                                {/*        <div className="absolute -top-1 -left-1 w-full">*/}
                                {/*        <div className="myBox sky  w-[60%]  h-5"/></div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </li>

                            <li>
                                <div className="flex items-center mb-8">
                                    <p className={"flex-1"}>...</p>
                                </div>
                            </li>

                        </ul>
                        <div className="">

                        </div>

                    </div>

                <img src={"/assets/astro.svg"}  className={"absolute scale-75 bottom-[13vh] right-[45%]"}/>
            </div>

        </CarouselContainer>

    );
};

export default Skills;