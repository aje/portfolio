import CarouselContainer from "../components/CarouselContainer";
import {RecType} from "../types";
import {recommends} from "../data";

function Item({item}: {item: RecType}) {
    return (
        <div className={"main-container"}>
            <img
                src={"/assets/scientist.svg"}
                className={"absolute  bottom-[14vh] scale-x-[-1] left-10"}
                alt={"scientist"}
            />

            <h1 className={`text-gradient text-5xl relative mb-20`}>{item.name}</h1>
            <div className="flex items-center relative ">
                <div className="avatar w-40 h-40 flex mr-12 items-center justify-center">
                    <img src={`/assets/${item.image}`} className={"w-28"} alt="" />
                </div>
                <div className="">
                    <p className={"mb-4"}>
                        <img src="/assets/first.png" className={"w-8 mr-4 inline"} alt={item.position} />
                        {item.position}
                    </p>
                    <p className={"mb-4"}>
                        <img src="/assets/bank.png" className={"w-8 mr-4 inline"} alt={item.source} />
                        {item.source}
                    </p>
                    <p className={""}>
                        <img src="/assets/mail.png" className={"w-8 mr-4 inline"} alt={item.email} />
                        {item.email}
                    </p>
                </div>
            </div>
            <p className="text-3xl relative text-center mt-12 px-16 font-mono ">{item.description}</p>
        </div>
    );
}

const Recommendations = () => {
    return (
        <CarouselContainer>
            {recommends.map((item) => (
                <Item item={item} />
            ))}
        </CarouselContainer>
    );
};

export default Recommendations;
