import React, { useState } from 'react';
import './style.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
            resetForm();
            sendFormEmail();
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!formData.name) {
            validationErrors.name = 'Name is required';
        }
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is invalid';
        }
        if (!formData.phone) {
            validationErrors.phone = 'Phone number is required';
        }
        if (!formData.subject) {
            validationErrors.subject = 'Subject is required';
        }
        if (!formData.message) {
            validationErrors.message = 'Message is required';
        }
        return validationErrors;
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };


    const sendFormEmail = () => {
        const emailData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
        };

        fetch('https://formspree.io/f/xbjenkbr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Email sent successfully');
                    // Reset the form after successful submission
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                    });
                } else {
                    console.log('Failed to send email');
                }
            })
            .catch((error) => {
                console.log('Error sending email:', error);
            });
    };

    return (
        <div className="min-h-[100vh]  bg-[#0D0D0D]  justify-center items-center ">
            <h2 className="text-[2rem] pt-6 font-bold text-[#ccc]">Contact Me</h2>
            <div className="flex-none xl:flex">
                {/* <div className=" flex items-center justify-center	 ">
                    <div className=" bg-[#1c1c1c]  p-6  m-12 w-[400px] shadow-lg ">
                        <p className='text-white  text-justify 	text-2xl '>
                            I am open to job opportunities, freelance work, and other collaborations. If you are interested in hiring me or exploring potential projects together, please don't hesitate to get in touch. I bring [mention your key skills/experience] to the table and have a strong commitment to delivering quality results. You can reach me at [webdeveloperaryank@gmail.com] or [+91 6394311141]. I am excited to discuss how we can work together and contribute to mutual success. Let's connect and explore the possibilities!
                        </p>
                    </div>
                </div> */}

                <div className=" flex justify-end  w-full p-0 sm:p-6 md:p-10 lg:p-16 xl:pl-32  xl:pr-32 2xl:pl-44 2xl:pr-44">


                    <form className="w-full h-fit " onSubmit={handleSubmit}>
                        {submitted && (
                            <p className="text-green-300 mb-4 text-2xl ">Form submitted successfully!</p>
                        )}
                        <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:p-10'>

                            <div className="mb-4 ">
                                <label htmlFor="name" className="block font-medium ">
                                    {/* Name */}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleChange}

                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-medium ">
                                    {/* Email */}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='email'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                {errors.email && <p className="text-red-500 text-sm ">{errors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block font-medium ">
                                    {/* Phone Number */}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder='Phone Number'
                                    value={formData.phone}
                                    onChange={handleChange}

                                />
                                {errors.phone && <p className="text-red-500 text-sm ">{errors.phone}</p>}
                            </div>
                            <div className="">
                                <label htmlFor="subject" className="block font-medium ">
                                    {/* Subject */}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder='Subject'
                                    value={formData.subject}
                                    onChange={handleChange}

                                />
                                {errors.subject && <p className="text-red-500 text-sm ">{errors.subject}</p>}
                            </div>
                        </div>

                        <div className="mb-4 pl-4 pr-4">
                            <label htmlFor="message" className="block font-medium">
                                {/* Message */}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Your message Write hare'
                                value={formData.message}
                                onChange={handleChange}
                                // className={`w-full p-2  border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                //     } rounded`}
                                rows={10}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm ">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-[#3000e9] w-[150px] text-white py-6  rounded hover:bg-blue-600 "
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
