const LvlClear = ({nextLevel}: {nextLevel: number}) => {
    return (
        <div className={"container flex-col h-screen flex justify-around pb-32 items-center"}>
            <div className=" flex items-center  mt-24 ">
                <img className={"mx-12"} src="/assets/levelClearedAlian.svg" alt="levelClearedAlian" />
                <h1 className="text-gradient relative  text-5xl after:content-['Level_cleared']">Level cleared</h1>
                <img className={"mx-12"} src="/assets/levelClearedAlian.svg" alt="levelClearedAlian" />
            </div>

            <h2 className="text-shadow text-4xl ">Click on the ufo to enter next level</h2>

            <a href={`/level/${nextLevel}`} className="-mb-20 hover:scale-[1.2] duration-150 ">
                <img src="/assets/ufo.svg" alt="ufo" />
            </a>
        </div>
    );
};

export default LvlClear;
