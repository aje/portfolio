import CarouselContainer from "../components/CarouselContainer";
import {skills} from "../data";

const Skills = () => {
    return (
        <CarouselContainer>
            <div className={"container flex-col h-screen flex justify-center relative pb-32 items-center"}>
                <h1 className="text-center text-gradient text-5xl relative after:content-['Character_skills'] ">
                    Character skills
                </h1>
                <div className="myBox  gray p-8 mt-12 ">
                    <ul className={"skills text-2xl"}>
                        {skills.map((datum) => (
                            <li>
                                <div className="flex items-center mb-8">
                                    <img className={"w-10 mr-6"} src={datum.image} alt="" />
                                    <p className={"flex-1"}>{datum.description}</p>
                                    <div className="text-3xl text-sky-600 ">{datum.months} Months XP</div>
                                </div>
                            </li>
                        ))}
                        <li>
                            <div className="flex items-center mb-8">
                                <p className={"flex-1"}>...</p>
                            </div>
                        </li>
                    </ul>
                    <div className=""></div>
                </div>

                <img
                    src={"/assets/astro.svg"}
                    className={"absolute scale-75 bottom-[13vh] right-[45%]"}
                    alt={"astro"}
                />
            </div>
        </CarouselContainer>
    );
};

export default Skills;
