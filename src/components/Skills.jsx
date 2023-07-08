import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
    <div name='skills'>
        {/* Container */}
    <div>
    <div>
        <p>Experience</p>
<p>Here are some of the technologies that I have worked with</p>
    </div>
    <div>
        <img src={HTML} alt="HTML icon" />
        <p>HTML</p>
    </div>
    <div>
        <img src={CSS} alt="CSS icon" />
        <p>CSS</p>
    </div>
    <div>
        <img src={JavaScript} alt="JavaScript icon" />
        <p>JavaScript</p>
    </div>
    <div>
        <img src={ReactImg} alt="React icon" />
        <p>React</p>
    </div>
    <div>
        <img src={GitHub} alt="GitHub icon" />
        <p>GitHub</p>
    </div>
    <div>
        <img src={Node} alt="Node icon" />
        <p>Node</p>
    </div>
    <div>
        <img src={Mongo} alt="Mongo icon" />
        <p>Mongo</p>
    </div>
    <div>
        <img src={Tailwind} alt="Tailwind icon" />
        <p>Tailwind</p>
    </div>
    </div>
    </div>
    );
};

export default Skills