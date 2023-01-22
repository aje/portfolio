import Carousel from "nuka-carousel"
import LvlClear from "../pages/LvlClear";
import {useParams} from "react-router-dom";
import Header from "./Header"


const CarouselContainer = ({children}) => {
    const {level} = useParams()
    const l = parseInt(level)
    return (
        <>
            <div className="main-bg"/>
            <div className="footer-bg"/>
            <Header />

        <Carousel
            renderCenterLeftControls={({ previousDisabled, previousSlide }) => !previousDisabled &&(
                <a onClick={previousSlide}   className={"z-0 cursor-pointer hover:opacity-75 active:opacity-50"}>

                    <img className={"w-12 m-16 rotate-180 "} src="/assets/chevron.svg" alt=""/>
                </a>
            )}
            renderCenterRightControls={({ nextDisabled, nextSlide }) => !nextDisabled && (
                <a  onClick={nextSlide}   className={"z-0 cursor-pointer hover:opacity-75 active:opacity-50 "}>
                    <img className={"w-12 m-16 "} src="/assets/chevron.svg" alt=""/>
                </a>
            )}

            slidesToShow={1} slideIndex={0} renderBottomCenterControls={false} >
            {children}
            <LvlClear nextLevel={l + 1} />
        </Carousel>
     </>
    );
};

export default CarouselContainer;