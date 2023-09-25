import Header from "../components/Header";
import {profile} from "../data";

const Contact = () => {
    return (
        <>
            <div className="main-bg" />
            <div className="footer-bg" />
            <Header />

            <div className={"main-container"}>
                <img
                    src={"/assets/scientist.svg"}
                    className={"absolute  bottom-[14vh] right-10"}
                    alt={"Behrouz erfanian"}
                />
                <img
                    src={"/assets/astro.svg"}
                    className={"absolute  bottom-[14vh]  left-10"}
                    alt={"بهروز عرفانیان گلابفروشان اهل یزد"}
                />
                <h2 className="text-gradient text-5xl after:content-['contact']">Contact</h2>

                <div className="mt-20 text-xl">
                    <p className={"mb-6 flex items-center"}>
                        <img src="/assets/mail.png" className={"w-8 mr-4 inline"} alt="email" />
                        <span className={"flex-1"}>email:</span>
                        <a href={`mailto:${profile.email}`} className={"hover:text-blue-500  text-blue-100"}>
                            {profile.email}
                        </a>
                    </p>
                    <p className={"mb-6 flex items-center"}>
                        <img src="/assets/linkedin.png" className={"w-8 mr-4 inline"} alt="position" />
                        <span className={"flex-1 mr-20"}>Linkedin: </span>
                        <a
                            title={"Behrooz erfanian Linkedin"}
                            target={"_blank"}
                            className={"hover:text-blue-500  text-blue-100"}
                            href={`http://linkedin/${profile.linkedin}`}>
                            {profile.linkedin}
                        </a>
                    </p>
                    <p className={"mb-6 flex items-center"}>
                        <img src="/assets/chat.png" className={"w-8 mr-4 inline"} alt="source" />
                        <span className={"flex-1"}>Whatsapp:</span> {profile.whatsapp}
                    </p>

                    <p className={"mb-6 flex items-center"}>
                        <img
                            src="/assets/downloading.png"
                            alt="Download Behrouz Erfanian Resume"
                            className={"w-8 mr-4 inline"}
                        />
                        <span className={"flex-1 mr-20"}>Resume: </span>
                        <a href={profile.resume} className={"hover:text-blue-500 text-blue-100"} title={"Download PDF"}>
                            Download PDF
                        </a>
                    </p>
                </div>

                <a href={`/level/8`} className=" hover:scale-[1.2] duration-150  mt-20">
                    <img src="/assets/ufo.svg" alt="ufo" />
                </a>
            </div>
        </>
    );
};

export default Contact;
