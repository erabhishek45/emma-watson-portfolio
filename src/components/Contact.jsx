import React from 'react'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarker, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}   
    id="contact" className="py-20 bg-dark-200">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Get In <span className="text-purple">Touch</span></h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Have a project in mind or want to collaborate?
                Let's talk!</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                            <input type="text" id="name"
                                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                            <input type="email" id="email"
                                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                            <textarea id="message" rows="5"
                                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"></textarea>
                        </div>
                        <button type="submit"
                            className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition-colors">Send
                            Message</button>
                    </form>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="text-accent-purple text-2xl mr-4">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Location</h3>
                            <p className="text-gray-400">San Francisco, California</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-accent-pink text-2xl mr-4">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <p className="text-gray-400">hello@example.com</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-accent-blue text-2xl mr-4">
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Phone</h3>
                            <p className="text-gray-400">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="#"
                                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-accent-purple hover:bg-purple hover:text-white transition-colors">
                                    <FaGithub />
                            </a>
                            <a href="#"
                                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-accent-blue hover:bg-blue hover:text-white transition-colors">
                                    <FaLinkedin />
                            </a>
                            <a href="#"
                                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                                    <FaTwitter />
                            </a>
                            <a href="#"
                                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                                    <FaDribbble />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Contact