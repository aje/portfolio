import {useParams} from "react-router-dom";
import Bio from "../pages/Bio";
import Skills from "../pages/Skills";
import Showcase from "../pages/Showcase";
import ErrorPage from "./ErrorPage";
import Experience from "../pages/Experience";
import Edu from "../pages/Edu";
import Recommendations from "../pages/Recommendations";
import Contact from "../pages/Contact";

const Levels = () => {
    const {level} = useParams();

    switch (level) {
        case "1":
            return <Bio />
        case "2":
            return <Skills />
        case "3":
            return <Edu />
        case "4":
            return <Experience />
        case "5":
            return <Showcase />
        case "6":
            return <Recommendations />
        case "7":
            return <Contact />
        default:
            return <ErrorPage />
    }
};

export default Levels;