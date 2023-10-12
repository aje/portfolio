import {EduType} from "../types";

const EduItem = ({item}: {item: EduType}) => {
    return (
        <div className={"main-container"}>
            <h1 className="text-gradient text-5xl mb-20">{item.name}</h1>
            <div className=" text-2xl">
                {/*<div className="relative">*/}
                {/*    <img src="/assets/trophy.png" alt="" className={""} />*/}
                {/*    /!*<div className="myBox py-1 sky">*!/*/}
                {/*    /!*    <img src={`/assets/certificates/${item.image}`} alt={item.name} />*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}

                <div className={"text-center "}>
                    <div className="flex text-sky-300 mb-2 justify-between">
                        <span>Type:</span> <span className={"text-right text-3xl text-gradient"}>{item.type}</span>
                    </div>
                    <div className="flex text-sky-300 mb-2 justify-between">
                        <span>Major:</span> <span className={"text-right text-3xl text-gradient"}>{item.major}</span>
                    </div>
                    <div className="flex text-emerald-200 mt-12 mb-2 justify-between">
                        <span>Date of start:</span> <span className={"text-gradientf"}>{item.start}</span>
                    </div>
                    <div className="flex text-emerald-200 justify-between mb-8">
                        <span>Date of finish:</span> <span className={"text-gradientf"}>{item.finish}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduItem;
