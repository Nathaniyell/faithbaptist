"use client"
import React, { useState, FormEvent } from "react";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { FaFax } from "react-icons/fa";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import { sendEmail } from "@/components/email/Email";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../loading";
import AnimatedContainer from "@/components/utils/AnimatedContainer";
import { SlidingButton } from "@/components/utils/Button";


const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            setIsSubmitting(true);
            console.log(formData);
            toast.success("Email sent successfully!");
            // e.currentTarget.reset();
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Failed to send email. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <React.Suspense fallback={<Loading />}>
            <div className='w-full pb-10'>
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    hideProgressBar={false}
                />
                {/* <Breadcrumbs active="Contact" /> */}

               
                  <h1 className="text-4xl p-10 text-center font-semibold bg-rose-200">Contact Us</h1>
                <AnimatedContainer className='flex flex-col-reverse md:flex-row gap-8 justify-between w-[90%] mx-auto mt-14 '>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input className="w-full p-4 outline-none ring-0 bg-stone-100 focus:bg-white border focus:border-primary" type="text" placeholder="Your Name *" name="name" required />
                            <input className="w-full p-4 outline-none ring-0 bg-stone-100 focus:bg-white border focus:border-primary" type="email" placeholder="Email *" name="email" required />
                        </div>
                        <input className="w-full p-4 outline-none ring-0 bg-stone-100 focus:bg-white border focus:border-primary" type="text" placeholder="Subject *" name="subject" required />
                        <textarea className='block bg-stone-100 focus:bg-white w-full focus:outline-none border focus:border-primary p-4 ring-0 resize-none' name="message" placeholder="Message" required />
                        <SlidingButton
                        textColor="primary"
                        slideDirection="left"
                            type="submit"
                            disabled={isSubmitting}
                          className="w-fit h-12 border-primary2"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </SlidingButton>
                    </form>
                    <aside className="flex flex-col gap-4">
                        <p>Connect With Us Today! Fill Out Our Contact Form For Inquiries, Feedback, Or Just To Say Hello. We Value Your Input And Look Forward To Hearing From You!</p>
                        <address className="contact-block">
                            <ul>
                                <li data-aos="fade-up" className="flex items-center gap-2 w-full p-4 border-b border-b-[#d7d7d7]" data-aos-delay="200">
                                    <FaFax className="text-xl text-[#222]" />Your address goes here
                                </li>
                                <li data-aos="fade-up" className="flex items-center gap-2 w-full p-4 border-b border-b-[#d7d7d7]" data-aos-delay="400">
                                    <MdOutlinePhone className="text-xl text-[#222]" /> <a className="hover:!text-primary" href="tel:123-123-456-789">123 123 456 789</a>
                                </li>
                                <li data-aos="fade-up" className="flex items-center gap-2 p-4 w-full" data-aos-delay="600">
                                    <MdMailOutline className="text-xl text-[#222]" /> <a className="hover:!text-primary" href="mailto:demo@example.com">demo@example.com </a>
                                </li>
                            </ul>
                        </address>
                        {/* <div className="p-2" data-aos="fade-up" data-aos-delay="600">
                            <h6 className="title">Working Hours</h6>
                            <p>Monday – Saturday: 08AM – 10PM</p>
                        </div> */}
                    </aside>
                </AnimatedContainer>
            </div>
        </React.Suspense>
    );
};

export default Contact;
