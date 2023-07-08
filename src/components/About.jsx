import React from 'react';
import Pic from '../assets/portrait.png';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Karanvir Sodhi, nice to meet you. Please take a look around.
                            <img src={Pic} alt="My Picture" />
                        </p>
                    </div>
                    <div>
                        <p>I'm a beginning software engineer who recently completed the Full Stack Web Development certificate program at Northwestern University. With a focus on both front-end and back-end technologies, I've gained expertise in HTML, CSS, JavaScript, React.js, Node.js, Express, and working with databases like MongoDB and MySQL.

                            During the program, I worked on real-world projects, strengthening my problem-solving and collaboration skills. I'm a detail-oriented individual who loves learning and staying up-to-date with the latest industry trends. I'm eager to contribute my skills to building innovative web applications that provide seamless user experiences.

                            I'm a strong communicator and quick learner, ready to adapt to new technologies and frameworks. I'm committed to delivering high-quality solutions and thrive in dynamic, innovative environments.

                            Let's connect and discuss how I can contribute to your organization's success as a motivated and versatile software engineer!
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
