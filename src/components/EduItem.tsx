import {EduType} from "../types";

const EduItem = ({item}: {item: EduType}) => {
    return (
        <div className={"main-container"}>
            <h1 className="text-gradient text-5xl mb-20">{item.name}</h1>
            <div className="grid grid-cols-2 gap-12 text-2xl">
                <div className="relative">
                    <img src="/assets/trophy.png" alt="" className={"absolute z-40 -top-10 -left-16"} />
                    <div className="myBox py-1 sky">
                        <img src={`/assets/certificates/${item.image}`} alt={item.name} />
                    </div>
                </div>

                <div className={" "}>
                    <div className="flex text-sky-300 mb-2 justify-between">
                        <span>Type:</span> <span className={"text-right text-3xl text-gradient"}>{item.type}</span>
                    </div>
                    <div className="flex text-sky-300 mb-2 justify-between">
                        <span>Date of start:</span> <span className={"text-gradientf"}>{item.start}</span>
                    </div>
                    <div className="flex text-sky-300 justify-between mb-8">
                        <span>Date of finish:</span> <span className={"text-gradientf"}>{item.finish}</span>
                    </div>
                    {item.description}
                </div>
            </div>
        </div>
    );
};

export default EduItem;
