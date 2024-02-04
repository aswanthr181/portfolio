import React from 'react'

import {FaTelegramPlane} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {RiInstagramFill} from 'react-icons/ri'
import {FiMail} from 'react-icons/fi'
import {FaPhone} from 'react-icons/fa'

function Footer() {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://t.me/Aswanthr"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://wa.me/917356791418"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          {/* <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.instagram.com/aswanth_r__/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a> */}
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="mailto:aswanthr181@gmail.com"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FiMail className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Mail</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="tel:+917356791418"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaPhone className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Phone</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2023 aswanth_r </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  )
}

export default Footer