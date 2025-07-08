import { projectGH } from "../components/ProjectsGH";

function project() {

    return (

        <div className="md:mt-[10%] mt-[20%]">
            <h1 className="md:text-3xl text-2xl font-bold text-gray-700 text-center">Projects</h1>
            <div className="flex md:flex-row flex-col justify-center items-center gap-10 mt-[10%] ">
                {projectGH.map((project, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 md:w-[25%] w-[65%] hover:brightness-70 hover:scale-103 ">
                        <div className="mb-4 flex justify-center">
                            <img src={project.image} alt={project.name} className=" rounded-md h-40  object-cover w-[90%] " />

                        </div>
                        <h3 className="md:text-xl text-lg font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-600 mb-4 text-md">{project.description}</p>
                        <div className="flex gap-3">
                            <a href={project.demoLink} target="_blank" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Live Demo</a>
                            <a href={project.codeLink} target="_blank" className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-200">Code</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <a target="_blank" href="https://github.com/sivananthamk007?tab=repositories" className="bg-blue-700 hover:bg-blue-500 text-white rounded px-5 py-2">more projects</a>
            </div>
        </div>


    )
}
export default project;
