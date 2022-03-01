import emailjs from 'emailjs-com'
import { useRef, useState } from 'react';
import{ init } from '@emailjs/browser';
init("kmek_W5mktXnxykMV");

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kkzq1oa', 'template_4m59o3k', form.current, "kmek_W5mktXnxykMV")
    .then(
      (result) => {
        console.log(result.text);
        alert("SUCCESS!");
      },
      (error) => {
        console.log(error.text);
        alert("FAILED...", error);
      });
      setSubmitted(true);

  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
    <h2 class="pt-3 pt-lg-0 mb-5 fs-2 fw-bold text-center" >Get in touch  </h2>
    <form ref={form} onSubmit={handleSubmit}>
      <div className="mb-3 pt-0" >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          style={{width: '400px'}}
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          style={{width: '400px'}}
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          style={{width: '400px', height: '200px'}}
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="text-dark link bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          style={{cursor: "none", width:'400px', backgroundColor: 'black'}}
        >
          Send a message
        </button>
      </div>
    </form>
    </>
  );
};

export default ContactForm;