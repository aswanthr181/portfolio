import React from 'react'

function Academics() {
  return (
    <div id="Academics" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Academics
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
      <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                B.Tech, Mechanical Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Govt. Rajiv Gandhi Institute Of Technology-Kottayam
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Aug 2018 - Jul 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Throughout my B.Tech in Mechanical Engineering, I've navigated a diverse curriculum, mastering subjects from thermodynamics to materials science. 
                This journey has instilled in me a solid foundation in problem-solving and critical thinking. 
                As I transition to the next phase, I am excited to apply these skills in the realm of software engineering. 
                Eager to contribute my analytical mindset and engineering acumen to software development challenges, I am poised for a dynamic career in the software engineering field.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[85%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Higher Secondary, computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  GVHSS Payyoli
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jul 2015 - Mar 2017
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                In my Higher Secondary studies focused on Computer Science, 
                I immersed myself in a comprehensive curriculum covering programming, algorithms, and data structures. 
                Practical projects and coursework honed my analytical and problem-solving skills. 
                Concluding this phase, I am equipped with a robust foundation in computer science principles. 
                Ready to apply my knowledge in innovative ways, I am enthusiastic about contributing to the dynamic and evolving field of software engineering with creativity and determination.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Academics