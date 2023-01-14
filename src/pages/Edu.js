import CarouselContainer from "../components/CarouselContainer";
import EduItem from "../components/EduItem";

const  edus = [
    {
        name: "Southwest Jiaotong",
        image: "img.png",
        url: "/ohioh",
        description: "Sunrain is a major company",
        position: "Front end developer",
        start: "2021/02",
        finish: "2022/02",
        type: "master",
    },
    {
        name: "Googsell",
        image: "img.png",
        url: "/ohioh",
        description: "Sunrain is a major company",
        position: "Front end developer",
        start: "2021/02",
        finish: "2022/02",
        type: "bachelor",
    },
    {
        name: "Googsell",
        image: "img.png",
        url: "/ohioh",
        description: "Sunrain is a major company",
        position: "Front end developer",
        start: "2021/02",
        finish: "2022/02",
        type: "Coursera",
    },
]

const Edu = () => {
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

            {edus.map(item => <EduItem item={item}/>)}
        </CarouselContainer>
    );
};

export default Edu;