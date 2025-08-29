import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Gmail validation
    if (!gmailRegex.test(email)) {
      toast.error("Please enter a valid Gmail address");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();

          if (document.activeElement) document.activeElement.blur();
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Error. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contacts"
      className="bg-gradient-to-r from-green-100 via-gray-200 to-blue-100 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Side - Heading */}
        <div className="md:col-span-1">
          <p className="text-3xl md:text-4xl font-bold tracking-widest mb-4 motion-preset-seesaw">
            Contact{" "}
            <span className="text-blue-600 dark:text-amber-500">Me</span>
          </p>
          <h2 className="text-lg leading-tight">Let's Talk</h2>
        </div>

        {/* Right Side - Form */}
        <div className="md:col-span-2">
          {/* Email and Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <p className="uppercase text-xs text-blue-500 dark:text-amber-500 font-bold">
                Email:
              </p>
              <a
                href="mailto:uh819727@gmail.com"
                className="text-lg font-semibold hover:underline"
              >
                Uh819727@gmail.com
              </a>
            </div>
            <div>
              <p className="uppercase text-xs text-blue-500 dark:text-amber-500 font-bold">
                Call:
              </p>
              <a href="tel:+923135082991" className="text-lg font-semibold">
                +92 313-5082991
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-md shadow-md border border-gray-400 
                          dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-amber-500 
                          font-semibold placeholder-black dark:placeholder-white"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Gmail"
                required
                className="w-full px-4 py-3 rounded-md shadow-md border border-gray-400 
                            dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-amber-500 
                            font-semibold placeholder-black dark:placeholder-white"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md shadow-md border border-gray-400 
                        dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-amber-500 
                        font-semibold placeholder-black dark:placeholder-white"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              required
              className="w-full px-4 py-3 rounded-md shadow-md border border-gray-400 
                        dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-amber-500 
                        font-semibold placeholder-black dark:placeholder-white"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`shadow-md border border-gray-400 px-8 py-3 rounded-full text-sm font-semibold tracking-wider flex items-center justify-center space-x-2 transition-colors hover:motion-preset-shake cursor-pointer 
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "dark:bg-gray-600 hover:bg-blue-600 dark:hover:bg-amber-500"
                }`}
            >
              <span>{loading ? "SENDING..." : "SEND MESSAGE"}</span>
              {!loading && <span className="text-xl">•</span>}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Toast container scoped to contact section */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}
