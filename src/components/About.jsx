import React from 'react'
import { FaCode, FaLightbulb, FaPaintBrush } from 'react-icons/fa'
import { motion } from "framer-motion";
import { aboutInfo } from '../assets/assets';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            id="about" className="py-20 bg-dark-200">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-4">
                    About <span className="text-purple">Me</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Get to know more about my background and passion
                </p>

                {/* Image + My Journey */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            className="w-full h-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60"
                            alt="Profile"
                        />
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="md:w-1/2">
                        <div className=" rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                            <p className="text-gray-300 mb-6">
                                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions
                                for businesses around the world. My journey started with basic HTML/CSS websites and has evolved
                                into building complex web applications with modern frameworks.
                            </p>
                            <p className="text-gray-300 mb-12">
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                                projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous
                                learning and pushing the boundaries of what's possible on the web.
                            </p>

                            {/* Cards Now Inside My Journey */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                                            <div className="text-purple text-4xl mb-4">
                                                <data.icon />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                                            <p className="text-gray-400">
                                                {data.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default About
