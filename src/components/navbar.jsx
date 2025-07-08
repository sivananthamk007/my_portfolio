import { Link } from "react-router-dom";
import { FileIcon } from "../assets/logos"
import { useState } from "react";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const handleclick = () => {
        const a = document.createElement("a");
        a.href = "/my_resume.pdf";
        a.open = "Resume.pdf";
        a.click();
    };

    return (
        <div className="top-0 w-full z-50  shadow-md bg-gray-100" >
            <div className="flex md:flex-row gap-5 flex-col justify-around md:items-center ps-10 md:ms-0 bg-[#f7f2f0b0] py-5 shadow-md ">


                <div className="flex gap-1 justify-between pe-8 items-center">
                    <div >
                        <h1 className="md:text-3xl text-2xl font-bold text-cyan-600">Siva.</h1>
                    </div>
                    <div>
                        <button
                            className="md:hidden text-gray-800 hover:cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {
                                isOpen ? (
                                    <svg
                                        className="w-6 h-6  "
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    // Hamburger (≡) icon

                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )



                            }

                        </button>
                    </div>

                </div>
                <div className="hidden md:flex gap-20 text-lg text-gray-800 font-medium ">
                    <a href="#home" className="hover:text-cyan-500">Home</a>
                    <a href="#about" className="hover:text-cyan-500">About</a>
                    <a href="#project" className="hover:text-cyan-500">Project</a>
                    <a href="#contact" className="hover:text-cyan-500">Contact</a>
                </div>

                {/* mobile menu */}
                {isOpen && (
                    <div id="mobile-menu" className="md:hidden px-4 pb-4 space-y-2">
                        <a href="#" class="block text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#about" class="block text-gray-600 hover:text-blue-600">About</a>
                        <a href="#project" class="block text-gray-600 hover:text-blue-600">Project</a>
                        <a href="#contact" class="block text-gray-600 hover:text-blue-600">Contact</a>
                    </div>
                )}


                <div onClick={handleclick} className="hidden md:flex gap-3 text-lg text-gray-800 bg-gray-200 py-2 px-3 rounded-xl items-center 
                                font-medium shadow-lg hover:text-white hover:bg-blue-700 hover:cursor-pointer">
                    <h1>Download CV</h1>
                    <h1><FileIcon /></h1>
                </div>

            </div>

        </div>


    )
}
export default Navbar;