
function About() {
    const handleclick=()=>{
        window.open("/my_resume.pdf","_blank")
    }
    return (
        <div >
            <div className="md:ml-[11%] md:mt-[10%] mt-[20%] ">
                <h1 className="md:text-3xl text-center text-2xl font-bold text-gray-700  md:mr-30 animate__animated animate__slideInDown">About Me</h1>
                <div className="md:flex md:flex-row md:mt-25 mt-10 md:gap-45 gap-15 mr-30 w-full flex flex-col items-center">
                    <div className="bg-white w-xl space-y-6 p-7 rounded-2xl shadow-2xl hover:bg-gray-50">
                        <h1 className="text-[21px] text-gray-800 text-center font-semibold">My Introduction</h1>
                        <p className="text-gray-600 text-center md:text-lg">I am well-versed in HTML, CSS and JavaScript , and other cutting edge frameworks
                            and libraries,which allows me to implement interactive features. Additionally,
                            I have experirence working with content management systems (CMS) like WordPress.
                        </p>
                        <div className="flex justify-end mr-3 ">
                            <button onClick={handleclick} className="hover:bg-gray-600 hover:shadow-none md:px-6 md:py-3 px-4 py-2 rounded-3xl 
                                                transition-colors transition-shadowcd  duration-300 bg-blue-700 text-white shadow-lg
                                              shadow-gray-500 font-semibold text-sm hover:cursor-pointer ">View CV</button>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h1 className="font-semibold md:text-xl text-[22px] text-center text-gray-800">frontend</h1>
                        <div className="mt-5 flex flex-col gap-2 text-center px-10 py-2 md:text-sm font-medium text-xs">
                            <span className="bg-blue-700 text-white px-2 py-1 rounded hover:bg-blue-600">HTML</span>
                            <span className="bg-blue-700 text-white px-2 py-1 rounded hover:bg-blue-600">CSS</span>
                            <span className="bg-blue-700 text-white px-2 py-1 rounded hover:bg-blue-600">JAVA SCRIPT</span>
                            <span className="bg-blue-700 text-white px-2 py-1 rounded hover:bg-blue-600">REACT</span>
                            <span className="bg-blue-700 text-white px-2 py-1 rounded hover:bg-blue-600">TAILWINDCSS</span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default About;
