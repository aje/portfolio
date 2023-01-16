import CarouselContainer from "../components/CarouselContainer";
import ExperienceItem from "../components/ExperieceItem";

const  experiences = [
    {
        name: "Sunrain Project Manager",
        image: "img_1.png",
        url: "/ohioh",
        description: "Sunrain is a major company",
        position: "Front end developer",
        start: "2021/02",
        finish: "2022/02",
    },
    {
        name: "Googsell",
        image: "img_1.png",
        url: "/ohioh",
        description: "Sunrain is a major company",
        position: "Front end developer",
        start: "2021/02",
        finish: "2022/02",
    },
]

const Experience = () => {
    return (
        <CarouselContainer>
            {/*<div className={"main-container"}>*/}
            {/*    <h1 className="text-gradient text-5xl relative  after:content-['Work_Experience']">Work Experience</h1>*/}

            {/*    <div className="p-8 mx-32 mt-20 myBox gray mb-32">*/}
            {/*        <div className="arrow border-solid border-blue-200"/>*/}
            {/*        <p className="text-2xl  leading-loose">Hi there! This is behrouz erfanian. <br /> You are about to see 10 years of work here</p>*/}
            {/*        <p className="text-2xl  leading-loose mt-4">This is a <span className="text-gradient">hard level!!</span>*/}

            {/*            <br />Please be pationt so you can pass this level!</p>*/}
            {/*    </div>*/}


            {/*    <img src={"/assets/astro.svg"}  className={"absolute scale-x-[-1] bottom-[14vh] left-[45%]"}/>*/}
            {/*</div>*/}

            {experiences.map(item => <ExperienceItem item={item}/>)}
            {/*<div className="main-container">*/}
            {/*    <h1 className="text-gradient text-5xl relative after:content-['Work_experience']">Work Experience</h1>*/}
            {/*</div>*/}
        </CarouselContainer>
    );
};

export default Experience;