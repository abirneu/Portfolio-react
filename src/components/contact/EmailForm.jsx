import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",  // New subject field
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = "service_u5uacz8";
    const templateId = "template_cuw9afe";
    const publicKey = "RISBaVM9xZQYtxYkz";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,  // Include subject
          message: formData.message,
        },
        publicKey
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);
        setIsLoading(false);

        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("FAILED TO SEND EMAIL:", error);
        alert(
          `⚠️ Failed to send message. Check console for details.\n${error.text || error}`
        );
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-secondary/60 dark:bg-gray-800 rounded-xl  p-6 md:p-8 max-w-md mx-auto border-2 border-primary" 
      data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Send me a message
      </h2>

      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          ✅ Thank you for your message! I’ll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-3 bg-stone-200 dark:bg-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-3  bg-stone-200 dark:bg-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          placeholder="Subject"
          className="w-full mb-4 px-4 py-3  bg-stone-200 dark:bg-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows="5"
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-3 border  bg-stone-200 dark:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/80 transition"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
