import React from 'react';
import { data } from "../data/data.js";
import hoopWizard from "../assets/projects/hoop-wizard.png";
import vocabVault from "../assets/projects/vocab-vault.png";
import netMinder from "../assets/projects/coming-soon.png";
import weatherDashboard from "../assets/projects/coming-soon1.png";
import socialNetwork from "../assets/projects/social-network.png";
import noteTaker from "../assets/projects/note-taker.png";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Container*/}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid Item */}
                        <div
                            style={{ backgroundImage: `url(${hoopWizard})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    Interactive Front End Application
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href="https://github.com/truck-norris/hoop-wizard" target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    {/* eslint-disable-next-line */}
                                    <a href= "https://truck-norris.github.io/hoop-wizard/" target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div
                        style={{ backgroundImage: `url(${vocabVault})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                Interactive Full Stack Application
                            </span>
                            <div className="pt-8 text-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/The-word-warriors/vocab-vault" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="https://vocab-vault-0523.herokuapp.com/" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${netMinder})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                               MERN Stack Single-Page Application
                            </span>
                            <div className="pt-8 text-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/React-Rangers/netminder-frontend" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="/" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${weatherDashboard})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                Server-Side API Application
                            </span>
                            <div className="pt-8 text-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/karsodhi/06-Weather-Dashboard" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="https://karsodhi.github.io/06-Weather-Dashboard/" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${noteTaker})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                Express.js Application
                            </span>
                            <div className="pt-8 text-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/karsodhi/11-Note-Taker" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="https://note-taker-app1212-e2215c7988ff.herokuapp.com/" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${socialNetwork})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                NoSQL: Social Network API
                            </span>
                            <div className="pt-8 text-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/karsodhi/18-SocialNetworkApi" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="https://drive.google.com/file/d/11BXP97cADOPKCAszGo-GZjOe9qDbTVJn/view" target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;