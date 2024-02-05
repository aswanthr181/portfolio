import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Message() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('');
  const [senderror, setSenderror] = useState('')
  const [success, setSuccess] = useState('')

  const resetStateValues = () => {
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    setSenderror('');
    setSuccess('');
  };
  const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  const handleMouseLeave = (e) => {
    e.preventDefault();
    // Validate the input on mouse leave
    if (!email.match(emailRegex)) {
      setError('enter a valid email')
      setTimeout(resetStateValues, 120000);
    } else {
      setError('');
    }
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (!email.trim() || !name.trim() || !message.trim()) {
      setSenderror("Fill All the Fields")
      setTimeout(resetStateValues, 300000);
    } else {
      setError('');
      setSenderror('')

      setTimeout(() => {
        setSuccess('Message send')
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(resetStateValues, 20000);
      }, 1500)


    }
  }
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4 sm:items-center">
            <div
              data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Leave me a message
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button

              data-aos="zoom-in"

              className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form onSubmit={handleSend}

            data-aos="zoom-in"

            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            action="mailto:xyz@gmail.com"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value), setError('') }}
              onBlur={handleMouseLeave}

              name=""
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Name"
              name=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name=""
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {senderror && <div style={{ color: 'red' }}>{senderror}</div>}
            {success && <div style={{ color: 'green' }} > {success}</div>}
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Message