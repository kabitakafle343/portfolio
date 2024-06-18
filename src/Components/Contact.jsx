import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, text } = data;
    let response = await fetch('https://portfolio-eac4a-default-rtdb.firebaseio.com/Contact.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        text
      })
    });
    if (response) {
      alert('submitted ✅');
    } else {
      alert('error while submission');
    }

    setData({name:'',email:'',text:''})
  };

  return (
    <div name="Contact" className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white pt-10 pb-2">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-1/2" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="my-6 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={data.name}
              autoComplete="new-name"
              onChange={handleChange}
            />
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md my-6 text-white focus:outline-none"
              value={data.email}
              autoComplete="new-email"
              onChange={handleChange}
            />
            <textarea
              name="text"
              rows="10"
              placeholder="Enter your message"
              className="my-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={data.text}
              autoComplete="new-message"
              onChange={handleChange}
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-200 px-6 py-3 my-8 mx-auto items-start hover:scale-100 duration-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
