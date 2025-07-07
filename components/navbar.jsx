import { Link } from "react-router-dom";


function Navbar() {

    return (
        <div className="pt-10">
            <nav className="flex justify-center">
                <ul className="flex gap-8 bg-gray-50 rounded-xl px-10 py-3 shadow-gray-300 shadow-lg">
                    <Link to="/"><h1>Home</h1></Link>
                    <Link to="/about"><h1>About</h1></Link>
                    <Link to="/project"><h1>Skills</h1></Link>
                    <Link to="/project"><h1>Projects</h1></Link>
                    <Link to="/contact"><h1>Contacts</h1></Link>
                </ul>
            </nav>


        </div>
    )
}
export default Navbar;