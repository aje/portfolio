const ErrorPage = () => {
    return (
        <div className={"levelStart h-screen text-center flex flex-col items-center relative justify-center "}>
            <a href={"/"} className="absolute flex items-center top-20 left-20 text-3xl">
                <img src={"/assets/backArrow.svg"} className={"mr-12"} alt={"error"} />
                Start Over
            </a>
            <h1 className="text-9xl mb-20 text-gradient">404</h1>
            <h2 className="text-6xl mb-2s0 text-gradiesnt">GAME OVER</h2>
        </div>
    );
};

export default ErrorPage;
