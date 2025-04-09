"use client";
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // const result = await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, // Replace with your EmailJS service ID
      //   process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID, // Replace with your EmailJS template ID
      //   {
      //     name: formData.name,
      //     email: formData.email,
      //     message: formData.message,
      //   },
      //   { publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY }
      // );

      // console.log(result.text);
      setResponseMessage(
        "Your message has been sent successfully! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage(
        "There was an error submitting your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We're here to assist you with any questions you may have. Fill out
            the form below, and we'll get back to you as soon as possible.
          </p>

          {responseMessage && (
            <div
              className={`mb-6 text-center p-3 rounded-md ${
                responseMessage.includes("successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {responseMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-0 transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-0 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-0 transition-all"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition cursor-pointer disabled:bg-yellow-200"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Office
          </h2>
          <div className="text-lg text-gray-600 mb-6">
            <p>
              <strong>Address:</strong> 123 MyEstate Street, New York City,
              RE 12345
            </p>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@test.com" className="text-yellow-500">
                info@myestate.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
