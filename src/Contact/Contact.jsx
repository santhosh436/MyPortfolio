import React, { useState } from 'react';
const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');

  const handleClick = (e)=>{
    e.preventDefault()
    const Contact = {name,email,subject,message}
    console.log(Contact);
    fetch("http://localhost:8096/send",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Contact)
      
      }
    ).then(()=>{
      console.log("Contact details added")
    })
  }
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
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                required
                className="w-full px-3 py-1 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block font-bold mb-2" htmlFor="email">E-Mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                className="w-full px-3 py-1 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block font-bold mb-2" htmlFor="subject">Subject*</label>
              <select
                id="subject"
                name="subject"
                value={subject}
                onChange={(e)=>{setSubject(e.target.value)}}
                required
                className="w-full px-3 py-1 border border-gray-300 rounded" 
              >
                <option value="">Select Subject</option>
                <option value="Logo Design">Logo Design</option>
                <option value="Website Design">Website Design</option>
                <option value="Branding">Branding</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block font-bold mb-2" htmlFor="message">Your message here*</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
                required
                className="w-full px-3 py-1 border border-gray-300 rounded h-24 resize-y"
              ></textarea>
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
