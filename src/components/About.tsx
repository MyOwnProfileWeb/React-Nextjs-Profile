import React from 'react';
import { FaJs, FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiAngular, SiDotnet } from 'react-icons/si';
import {Button} from "primereact/button";

const AboutComponent: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-700 mb-4">
                        <strong>Bachelor of Science in Computer Science</strong><br/>
                        University of the Western Cape, 2023
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Skills</h3>
                    <div className="grid grid-cols-2 gap-4 text-center mb-4">
                        <div className="flex flex-col items-center">
                            <FaJs className="text-yellow-500 text-6xl mb-2"/>
                            <span>JavaScript, TypeScript</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaReact className="text-blue-500 text-6xl mb-2"/>
                            <span>React, Redux</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiAngular className="text-red-600 text-6xl mb-2"/>
                            <span>Angular</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaNode className="text-green-500 text-6xl mb-2"/>
                            <span>Node.js, Express</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaDatabase className="text-purple-500 text-6xl mb-2"/>
                            <span>MongoDB, SQL</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaHtml5 className="text-orange-500 text-6xl mb-2"/>
                            <span>HTML</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaCss3Alt className="text-blue-700 text-6xl mb-2"/>
                            <span>CSS, Tailwind CSS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaJava className="text-red-500 text-6xl mb-2"/>
                            <span>Java, Spring Boot</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaPython className="text-blue-400 text-6xl mb-2"/>
                            <span>Python, Machine Learning</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiDotnet className="text-purple-600 text-6xl mb-2"/>
                            <span>.NET</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaGitAlt className="text-orange-600 text-6xl mb-2"/>
                            <span>Git, Azure DevOps</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">CV</h3>
                    <p className="text-gray-700">
                        You can view my full CV by clicking the button below:
                    </p>
                    <Button
                        onClick={() => window.location.href = '/Serobanye-Joseph-Moganedi.pdf'}
                        className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Resume Here
                    </Button>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-700 mb-4">
                    Email: josephserobanye@gmail.com<br/>
                    Phone: +27 73 443 4497
                </p>
            </div>
        </div>
    );
};

export default AboutComponent;