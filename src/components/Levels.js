import {useParams} from "react-router-dom";
import Bio from "../pages/Bio";
import Skills from "../pages/Skills";
import Showcase from "../pages/Showcase";
import ErrorPage from "./ErrorPage";
import Experience from "../pages/Experience";
import Edu from "../pages/Edu";

const Levels = () => {
    const {level} = useParams();

    switch (level) {
        case "1":
            return <Bio />
        case "2":
            return <Skills />
        case "3":
            return <Showcase />
        case "4":
            return <Experience />
        case "5":
            return <Edu />
        default:
            return <ErrorPage />
    }
};

export default Levels;