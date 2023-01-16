import React from 'react';

const Contact = () => {
    return (
        <>


            <div className="main-bg"/>
            <div className="footer-bg"/>
            <div className={"main-container"}>
                <img src={"/assets/scientist.svg"}  className={"absolute  bottom-[14vh] right-10"}/>
                <img src={"/assets/astro.svg"}  className={"absolute  bottom-[14vh]  left-10"}/>
                <h2 className="text-gradient text-5xl after:content-['contact']">Contact</h2>


                <div className="mt-20 text-xl">
                    <p className={"mb-6 flex items-center"}><img src="/assets/mail.png" className={"w-8 mr-4 inline"} alt='email'/><span className={"flex-1"}>email:</span> behroozina@live.com</p>
                    <p className={"mb-6 flex items-center"}><img src="/assets/linkedin.png" className={"w-8 mr-4 inline"} alt='position'/><span className={"flex-1 mr-20"}>Linkedin: </span> linkdin/behroozina</p>
                    <p className={"mb-6 flex items-center"}><img src="/assets/chat.png" className={"w-8 mr-4 inline"} alt='source'/><span className={"flex-1"}>Wechat:</span> Behrooozinaa</p>
                </div>
            </div>


        </>
    );
};

export default Contact;