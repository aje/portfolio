import {useParams} from "react-router-dom";
import Lvl1 from "../pages/Lvl1";
import Lvl2 from "../pages/Lvl2";
import Lvl3 from "../pages/Lvl3";
import ErrorPage from "./ErrorPage";

const Levels = () => {
    const {level} = useParams();

    switch (level) {
        case "1":
            return <Lvl1 />
        case "2":
            return <Lvl2 />
        case "3":
            return <Lvl3 />
        default:
            return <ErrorPage />
    }
};

export default Levels;