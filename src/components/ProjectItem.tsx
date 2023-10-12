import {ProjectType} from "../types";

const ProjectItem = ({item}: {item: ProjectType}) => {
    return (
        <>
            {/*<h1 className={`text-gradient text-5xl relative mb-20`}>{item.name}</h1>*/}

            <div className="myBox sky p-4">
                <div className=" text-center col-span-2">
                    <div className="myBox py-1 sky mb-12">
                        <img src={`/assets/projects/${item.image}`} alt={item.name} />
                    </div>
                    <a target={"_blank"} href={item.url} className={"text-xl hover:underline"}>
                        <img className={"inline scale-[-1] w-16"} src="/assets/arrow.svg" alt="" /> {item.name}{" "}
                        <img className={"inline w-16"} src="/assets/arrow.svg" alt="" />
                    </a>
                </div>
                <p className={" col-span-3 "}>{item.description}</p>
            </div>
        </>
    );
};

export default ProjectItem;
