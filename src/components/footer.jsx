import { InstaIcon } from "../assets/logos";
import { CopyrightsIcon, FileIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../assets/logos";
import { Up_arrow } from "../assets/logos";


function Footer() {
    
    const linkedin = "https://www.linkedin.com/in/sivanantham-kumar-426838311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    const github = "https://github.com/sivananthamk007"

    const handleclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
      


            <div className=" flex flex-col items-center bg-gray-100 mx-5 mb-1">
                <div className="flex items-center w-full ">
                    <div className="flex-grow h-px bg-gray-400"></div>
                    <button onClick={handleclick} className="mx-3 z-10 text-center p-2 rounded-full"><Up_arrow /></button>
                    <div className="flex-grow h-px bg-gray-400"></div>
                </div>

                <div className="mt-3">
                    <ul className="flex gap-7">
                        <a href={linkedin} target="_blank" className="bg-white p-3 rounded-full shadow-md shadow-gray-400 group hover:bg-black hover:text-white transition-colors duration-300"><LinkedinIcon /></a>
                        <a href={github} target="_blank" className="bg-white p-3 rounded-full shadow-md shadow-gray-400 group hover:bg-black hover:text-white transition-colors duration-300"><GithubIcon /></a>

                    </ul>
                </div>
                <div className="flex items-center mt-4 text-lg font-normal mb-3">

                    <p className="flex items-center"> copyrights &nbsp;<CopyrightsIcon /></p>

                    <p>
                        <span className="text-blue-800"> &nbsp;sivanantham kumar - </span>
                        All rights reserved
                    </p>
                </div>




            </div>
     
    )
}

export default Footer;