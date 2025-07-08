
import { CopyrightsIcon, FileIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../assets/logos";
import { EmailIcon } from "../assets/logos";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import About from "./about";
import Project from "./project";
import Contact from "./contact";
import { useEffect, useState } from "react";
import "../index.css"

function Homepage() {
    const [show, setshow] = useState(false)
    useEffect(() => {
        setTimeout(() => setshow(true), 650);
    }, [])

    const linkedin = "https://www.linkedin.com/in/sivanantham-kumar-426838311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    const email = "sivananthamk007@gmail.comj="
    const github = "https://github.com/sivananthamk007"

    const handleclick = () => {
        const a = document.createElement("a");
        a.href = "/my_resume.pdf";
        a.open = "Resume.pdf";
        a.click();
    };
    return (
        <div className="overflow-hidden">
            <Navbar />

            <div className="mt-10 md:mt-[10%] md:pb-10 md:flex md:flex-row flex-col items-center px-8 md:px-4 mx-auto max-w-screen-xl" id="home">
                <div className="w-full ">
                    <div className="mt-6 space-y-6">
                        <h1 className="bg-yellow-800 text-white text-sm md:text-lg w-fit px-2 py-1 md:py-0 rounded-md animate__animated animate__fadeInDown">
                            sivanantham kumar
                        </h1>

                        <div className="flex items-center gap-2 md:gap-3 transform transition-all duration-700 ease-out">
                            <h2 className="text-3xl md:text-6xl text-gray-800 font-semibold">I'm</h2>
                            <h2 className="md:text-6xl text-3xl font-semibold bg-gradient-to-r from-blue-500 via-blue-500
                                          to-pink-500 bg-clip-text text-transparent animate__animated animate__flipInX">
                                Frontend Developer
                            </h2>
                        </div>

                        <p className="text-gray-600 text-base md:text-lg font-medium max-w-xl animate__animated animate__slideInLeft">
                            Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.
                        </p>

                        <div className="flex md:justify-normal justify-center gap-6 mt-8">
                            <button className="md:px-5 md:py-3 px-4 py-3 md:bg-blue-700 md:shadow-blue-300 md:hover:bg-gray-300 bg-gray-300 shadow-lg shadow-gray-400 hover:bg-blue-700 rounded-2xl
                             md:text-white md:hover:text-black md:hover:shadow-gray-400 text-black hover:text-white transition-colors duration-300">
                                Hire Me
                            </button>

                            <div onClick={handleclick} className="flex gap-2 items-center bg-gray-300 shadow-gray-400 shadow-lg hover:cursor-pointer md:px-5 md:py-3 px-4 py-3 rounded-xl
                                           hover:bg-blue-700 hover:text-white transition-colors duration-300 hover:shadow-blue-300">
                                <span>Download CV</span>
                                <FileIcon />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center md:justify-normal gap-6 animate__animated animate__fadeInUp">

                        <a href={linkedin} target="_blank" className="bg-white p-3 rounded-full group shadow-md shadow-gray-400 hover:bg-black hover:text-white transition duration-300"><LinkedinIcon /></a>
                        <a href={github} target="_blank" className="bg-white p-3 rounded-full group shadow-md shadow-gray-400 hover:bg-black hover:text-white transition duration-300"><GithubIcon /></a>
                        <a href="mailto:sivananthamk007@gmail.com" target="_blank" className="bg-white p-3 rounded-full group shadow-md shadow-gray-400 hover:bg-black hover:text-white transition duration-300"><EmailIcon /></a>

                    </div>
                </div>
                <div className="md:hidden flex justify-center">
                    <img src="/siva.jpg"
                        alt="siva"
                        className="rounded-full scale-50 bg-cyan-400 p-10 " />
                </div>

                <div className="w-1/2 hidden md:flex items-center relative right-10 animate__animated animate__slideInRight">

                    <div
                        className="p-4 w-66 h-70 relative left-60 animate-spin bg-cyan-400 rounded-full 
                                   border-2 border-cyan-400" style={{ animationDuration: "4s" }}
                    ></div>
                    <div
                        className="md:flex p-4 w-66 h-70 relative animate-spin bg-cyan-400 rounded-full 
                                   border-2 border-cyan-400" style={{ animationDuration: "3.3s" }}
                    ></div>
                    <img
                        src="/siva.jpg"
                        alt="siva"
                        className="absolute right-10 w-54 h-54 rounded-full z-100"
                    />
                </div>


            </div>

            <div id="about">
                <About />

            </div>

            <div id="project">
                <Project />

            </div>

            <div id="contact">
                <Contact />

            </div>

            <div id="footer">
                <Footer />

            </div>

        </div>


    )
}
export default Homepage;