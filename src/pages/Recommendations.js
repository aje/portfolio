import React from 'react';
import CarouselContainer from "../components/CarouselContainer";
import * as PropTypes from "prop-types";

const  data = [
    {
        name: "Dr. Hassan Nastaran",
        image: "img.png",
        description: "Sunrain is a major company, behrouz is one of the best in teamSunrain is a major company, behrouz is one of the best in teamSunrain is a major company, behrouz is one of the best in team",
        position: "Front end developer",
        source: "Sadjad University",
        email: "rezaee@fsd.co",
    },
    {
        name: "Dr. Rezaee",
        image: "img.png",
        description: "Sunrain is a major company, behrouz is one of the best in teamSunrain is a major company, behrouz is one of the best in teamSunrain is a major company, behrouz is one of the best in team",
        position: "Front end developer",
        source: "Khayyam University",
        email: "rezaee@fsd.co",
    },
    {
        name: "Navid Tabasi",
        image: "img.png",
        description: "Sunrain is a major company, behrouz is one of the best in teamSunrain is a major company, behrouz is one of the best in teamSunrain is a major company, behrouz is one of the best in team",
        position: "Front end developer",
        source: "Daya Co",
        email: "rezaee@fsd.co",
    },
]


function Item({item}) {
    return <div className={"main-container"}>
        <img src={"/assets/scientist.svg"}  className={"absolute  bottom-[14vh] scale-x-[-1] left-10"}/>

        <h1 className={`text-gradient text-5xl relative mb-20`}>{item.name}</h1>
        <div className="flex items-center relative ">
            <div className="avatar w-40 h-40 flex mr-12 items-center justify-center">
                <img src={`/assets/${item.image}`} className={"w-28"} alt=""/>
            </div>
            <div className="">
                <p className={"mb-4"}><img src="/assets/first.png" className={"w-8 mr-4 inline"} alt={item.position}/>{item.position}</p>
                <p className={"mb-4"}><img src="/assets/bank.png" className={"w-8 mr-4 inline"} alt={item.source}/>{item.source}</p>
                <p className={""}><img src="/assets/mail.png" className={"w-8 mr-4 inline"} alt={item.email}/>{item.email}</p>
            </div>
        </div>
        <p className="text-3xl relative text-center mt-12 px-16">{item.description}</p>


    </div>
}

Item.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        position: PropTypes.string,
        source: PropTypes.string,
        email: PropTypes.string
    })
};
const Recommendations = () => {
    return (
        <CarouselContainer>
            {data.map(item => <Item item={item}/>)}
        </CarouselContainer>
    );
};

export default Recommendations;