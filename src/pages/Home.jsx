import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Self from '../components/self/Self';
import Footer from '../components/footer/Footer';
import Message from '../components/message/Message';
import Academics from '../components/academics/Academics';
import Skill from '../components/skills/Skill';
import Projects from '../components/projects/Projects';

function Home() {

    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }

    return (
        <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Self darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Skill darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Academics darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Message darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    )
}

export default Home