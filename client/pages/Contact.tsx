import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl font-bold leading-relaxed">
            Contact our security experts for a consultation or inquiries
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-850">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-10 rounded-xl border-2 border-slate-600 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <MapPin className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-4">
                Head Office
              </h3>
              <p className="text-gray-300 font-bold mb-2">Islamabad</p>
              <p className="text-gray-400 font-bold">
                Central coordination hub for all operations
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-10 rounded-xl border-2 border-slate-600 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <Phone className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-4">Phone</h3>
              <p className="text-gray-300 font-bold mb-2">
                For inquiries and quotes
              </p>
              <p className="text-gray-400 font-bold">
                Contact through our form or visit office
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-10 rounded-xl border-2 border-slate-600 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <Clock className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-4">
                Response Time
              </h3>
              <p className="text-gray-300 font-bold mb-2">Quick turnaround</p>
              <p className="text-gray-400 font-bold">
                We prioritize all security consultations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-900/30 border-2 border-green-600 text-green-300 p-6 rounded-xl mb-8">
                <p className="font-black mb-2 text-lg">
                  Message Sent Successfully!
                </p>
                <p className="font-bold">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-black text-white mb-3"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-black text-white mb-3"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-black text-white mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-black text-white mb-3"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="" className="bg-slate-800 text-white">
                      Select a subject
                    </option>
                    <option
                      value="security-guards"
                      className="bg-slate-800 text-white"
                    >
                      Static Security Guards
                    </option>
                    <option
                      value="bodyguards"
                      className="bg-slate-800 text-white"
                    >
                      Bodyguards
                    </option>
                    <option
                      value="mobile-escorts"
                      className="bg-slate-800 text-white"
                    >
                      Mobile Escorts
                    </option>
                    <option
                      value="equipment"
                      className="bg-slate-800 text-white"
                    >
                      Security Equipment
                    </option>
                    <option value="inquiry" className="bg-slate-800 text-white">
                      General Inquiry
                    </option>
                    <option value="other" className="bg-slate-800 text-white">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-black text-white mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 font-black text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-850 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Office */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-10 rounded-xl border-2 border-slate-600 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-6">
                Head Office
              </h3>
              <p className="font-black text-white mb-2">Islamabad</p>
              <p className="text-gray-300 font-bold">
                Central coordination and management
              </p>
            </div>

            {/* Regional Offices */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-10 rounded-xl border-2 border-slate-600 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-6">
                Regional Offices
              </h3>
              <ul className="space-y-3 text-gray-300 font-bold text-sm md:text-base">
                <li>• South (Multan)</li>
                <li>• Lahore</li>
                <li>• Karachi</li>
                <li>• Jhelum</li>
                <li>• Gujranwala</li>
              </ul>
            </div>

            {/* Area & Sub Offices */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-10 rounded-xl border-2 border-slate-600 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-6">
                Area & Sub Offices
              </h3>
              <ul className="space-y-3 text-gray-300 font-bold text-sm md:text-base">
                <li>• Sargodha • Peshawar</li>
                <li>• Mirpur • Sialkot</li>
                <li>• Sheikhupura • Chakwal</li>
                <li>• Muzafarabad • Rawalakot</li>
                <li>• Gharo • Karachi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
