import CarouselContainer from "../components/CarouselContainer";
import ProjectItem from "../components/ProjectItem";

const  projets = [
    {
        name: "Sunrain Project Manager",
        image: "img_1.png",
        description: "Sunrain is a major company"
    },
    {
        name: "Googsell",
        image: "img_1.png",
        description: "Sunrain is a major company"
    },
]

const Showcase = () => {
    return (<CarouselContainer>
            <div className={"main-container"}>
                <h1 className="text-gradient text-5xl relative  after:content-['Project_showcase']">Project showcase</h1>

                <div className="p-8 mx-32 mt-20 myBox gray mb-32">
                    <div className="arrow border-solid border-blue-200"/>
                    <p className="text-2xl  leading-loose">Hi there! This is behrouz erfanian. <br /> You are about to see 10 years of work here</p>
                    <p className="text-2xl  leading-loose mt-4">This is a <span className="text-gradient">hard level!!</span> <img src="/assets/ghost.png" width={32} className={"inline"} alt="alt"/>

                        <br />Please be pationt so you can pass this level!</p>
                </div>


                <img src={"/assets/scientist.svg"}  className={"absolute  bottom-[14vh] left-[45%]"}/>
            </div>

            {projets.map(item => <ProjectItem item={item}/>)}


        </CarouselContainer>
    );
};

export default Showcase;