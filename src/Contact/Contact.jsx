import React, { useState } from 'react';
import { SiTicktick } from "react-icons/si";
import { CgDanger } from "react-icons/cg";
const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');


  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [subjectValid, setSubjectValid] = useState(null);
  const [messageValid, setMessageValid] = useState(null);

  const [nameMessage, setNameMessage] = useState('');
const [emailMessage, setEmailMessage] = useState('');
const [subjectMessage, setSubjectMessage] = useState('');
const [messageMessage, setMessageMessage] = useState('');

  const validateName = () => {
    if (name.trim() === '') {
      setNameValid(false);
      setNameMessage('Name is required.');
    } else {
      setNameValid(true);
      setNameMessage("");
    }
  };
  
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailValid(false);
      setEmailMessage("Please Enter a valid Email")
    } else {
      setEmailValid(true);
      setEmailMessage("");
    }
  };
  
  const validateSubject = () => {
    if (subject.trim() === '') {
      setSubjectValid(false);
      setSubjectMessage('Subject is required.');
    } else {
      setSubjectValid(true);
      setSubjectMessage("");
    }
  };
  
  const validateMessage = () => {
    if (message.trim() === '') {
      setMessageValid(false);
      setMessageMessage('Message cannot be empty.');
    } else {
      setMessageValid(true);
      setMessageMessage("");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
  
    if (nameValid && emailValid && subjectValid && messageValid) {
      const Contact = { name, email, subject, message };
      console.log(Contact);
  
      fetch("http://localhost:8096/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Contact),
      }).then(() => {
        console.log("Contact details added");
      });
    } else {
      console.log("Validation failed");
    }
  };
  return (
    <div className=" relative flex flex-col sm:flex-row items-center h-screen bg-gray-100 ">
      <div className=' h-full w-full flex flex-col sm:pl-80 sm:bg-sky-200 font-poppins justify-center mt-24 mb-4 font-popins'>
        <h3 className='text-2xl text-gray-400'>Contact Us</h3>
        <h1 className=' text-5xl font-bold mb-2 text-gray-500'>Let's Talk</h1>
        <h2 className='ml-1 text-5xl font-semibold text-gray-500'>about you</h2>
      </div>
      <div className=" sm:absolute sm:right-80 flex items-center gap-7 bg-white sm:mt-20 p-8 rounded-lg  shadow-lg shadow-black">
        <div className="w-80 font-poppins">
          <h2 className="text-pink-500 font-semibold mb-4">Send us a Message</h2>
          <form>
            <div className="mb-2">
              <label className="block font-bold" htmlFor="name">Full Name*</label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); validateName(); }}
                  onBlur={validateName}
                  required
                  className={`w-full px-3 py-1 border ${nameValid === false ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {nameValid === true && <SiTicktick className="inline text-green-500 ml-2" />}
                {nameValid === false && <CgDanger className="inline text-red-500 ml-2" />}
              </div>
              {nameMessage && <p className={`text-sm ${nameValid === false ? 'text-red-500' : 'text-green-500'}`}>{nameMessage}</p>}
            </div>
           
            <div className="mb-2">
              <label className="block font-bold mb-2" htmlFor="email">E-Mail*</label>
              <div className="flex items-center">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); validateEmail(); }}
                  onBlur={validateEmail}
                  required
                  className={`w-full px-3 py-1 border ${emailValid === false ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {emailValid === true && <SiTicktick className="inline text-green-500 ml-2" />}
                {emailValid === false && <CgDanger className="inline text-red-500 ml-2" />}
              </div>
              {emailMessage && <p className={`text-sm ${emailValid === false ? 'text-red-500' : 'text-green-500'}`}>{emailMessage}</p>}
            </div>
            <div className="mb-2">
              <label className="block font-bold mb-2" htmlFor="subject">Subject*</label>
              <div className="flex items-center">
                <select
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => { setSubject(e.target.value); validateSubject(); }}
                  onBlur={validateSubject}
                  required
                  className={`w-full px-3 py-1 border ${subjectValid === false ? 'border-red-500' : 'border-gray-300'} rounded`}
                >
                  <option value="">Select Subject</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Other">Other</option>
                </select>
                {subjectValid === true && <SiTicktick className="inline text-green-500 ml-2" />}
                {subjectValid === false && <CgDanger className="inline text-red-500 ml-2" />}
              </div>
              {subjectMessage && <p className={`text-sm ${subjectValid === false ? 'text-red-500' : 'text-green-500'}`}>{subjectMessage}</p>}
            </div>
            <div className="mb-2">
              <label className="block font-bold mb-2" htmlFor="message">Your message here*</label>
              <div className="flex items-center">
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); validateMessage(); }}
                  onBlur={validateMessage}
                  required
                  className={`w-full px-3 py-1 border ${messageValid === false ? 'border-red-500' : 'border-gray-300'} rounded h-24 resize-y`}
                ></textarea>
                {messageValid === true && <SiTicktick className="inline text-green-500 ml-2" />}
                {messageValid === false && <CgDanger className="inline text-red-500 ml-2" />}
              </div>
              {messageMessage && <p className={`text-sm ${messageValid === false ? 'text-red-500' : 'text-green-500'}`}>{messageMessage}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors" onClick={handleClick}
            >
              Send
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Contact;
