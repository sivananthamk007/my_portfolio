import emailjs from "emailjs-com";
import { useRef } from "react";


function Contact() {

    const formref = useRef();

    const Emailsend = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_e180sm4", "template_i4mnjmt", formref.current, "AQmdBziIszkkgbGg6")
            .then(
                (result) => {
                    alert("message send successfully");
                    formref.current.reset();
                },
                (error) => {
                    alert("Failed to send message: " + error.text)
                }
            )
    }

    return (
        <div className="md:mb-[8%] mb-[20%]" >
            <div className="md:mt-[10%] md:ml-[11%] mt-[20%]  ">
                <div className="text-center md:mr-32">
                    <h1 className="md:text-3xl text-2xl text-gray-700 font-bold">Contact Me</h1>
                </div>
                <div className="mt-[5%] text-center md:mr-32">

                    <form ref={formref} onSubmit={Emailsend} className="flex flex-col gap-5 items-center">
                        <input type="text"
                            name="user_name"
                            placeholder="sivanantham"
                            className="border-2 bg-gray-200 md:w-1/3 w-[70%] px-5 py-2 text-lg rounded"
                            required />

                        <input type="email"
                            name="user_email"
                            placeholder="sivanantham007k@gmail.com"
                            className="border-2 bg-gray-200 md:w-1/3 w-[70%]  px-5 py-2 text-lg rounded"
                            required />
                 
                        <textarea
                         placeholder="subject"
                            name="subject"
                            className="border-2 bg-gray-200 h-30 px-5 py-2 md:w-1/3 w-[70%]  text-lg rounded"
                            required>
                        </textarea>

                        <textarea placeholder="description"
                            name="message"
                            className="border-2 bg-gray-200 h-30 px-5 py-2 md:w-1/3 w-[70%]  text-lg rounded"
                            required>
                        </textarea>

                        <button type="submit"

                            className="md:px-10 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500 hover:cursor-pointer">
                            SUBMIT
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default Contact;