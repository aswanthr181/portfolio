import React from 'react'
import SkillCard from '../utilities/SkillCard'
import SkillList from '../utilities/SkillList'

import {IoLogoHtml5,IoLogoCss3,IoLogoNodejs} from 'react-icons/io'

import {SiMongodb,SiExpress,SiJavascript,SiTailwindcss,SiPostgresql,SiGithub,SiRedux} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
function Skill() {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div className='flex-1 flex flex-wrap  pt-10'> 
            <div
              data-aos="zoom-in"
              className="progress flex items-center w-[50%] h-[100%] justify-end md:justify-center"
            >
               
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <SkillList logo={<IoLogoHtml5 />}    name={"HTML/CSS"} />
                <SkillList logo={<SiTailwindcss />}  name={"TailwindCSS"} />
                <SkillList logo={<SiJavascript />}   name={"Javascript"} />
                <SkillList logo={<FaReact />}        name={"React Js"} />
                <SkillList logo={<SiRedux />}        name={"Redux"} />
              </div>
              </div>

              <div
              data-aos="zoom-in"
              className="progress flex items-center w-[50%] h-[100%] justify-end md:justify-center"
            >
               
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <SkillList logo={<IoLogoNodejs />} name={"Node Js"} />
                <SkillList logo={<SiExpress />}    name={"Express Js"}  />
                <SkillList logo={<SiMongodb />}    name={"MongoDB"} />
                <SkillList logo={<SiPostgresql />} name={"postgreSQL"} />
                <SkillList logo={<SiGithub />}     name={"Git"} />
              </div>
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1  flex  p-5 gap-10  items-center justify-center sm:w-full">
            <div className="first2 flex flex-col  gap-10">
              <SkillCard logo={<IoLogoNodejs />} black={"white"} white={"black"} skill={"Node Js"} />
              <SkillCard logo={<SiMongodb />} black={"white"} white={"black"}skill={"MongoDB"} />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillCard logo={<SiExpress />} black={"black"} white={"white"} skill={"Express Js"}/>
              <SkillCard className="" logo={<FaReact/>} black={"black"} white={"white"} skill={"React Js"}/>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Skill