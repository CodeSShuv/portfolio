import { useState } from "react";
type form = {firstName:string, email:string, message:string}
const Contact = () => {
  const [formData, setFormData] = useState<form>({ firstName: "", email: "", message: "" });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ resize: "none" }}
          className="w-full p-2 mt-2 border rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
