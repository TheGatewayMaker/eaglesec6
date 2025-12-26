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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl font-bold leading-relaxed">
            Contact our security experts for a consultation or inquiries
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-slate-50 p-8 rounded-lg border border-border">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-3">
                Head Office
              </h3>
              <p className="text-foreground mb-2">Islamabad</p>
              <p className="text-muted-foreground text-sm">
                Central coordination hub for all operations
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-border">
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-3">Phone</h3>
              <p className="text-foreground mb-1">For inquiries and quotes</p>
              <p className="text-muted-foreground text-sm">
                Contact through our form or visit office
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-border">
              <Clock className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-3">
                Response Time
              </h3>
              <p className="text-foreground mb-1">Quick turnaround</p>
              <p className="text-muted-foreground text-sm">
                We prioritize all security consultations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-8">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-8">
                <p className="font-semibold mb-1">Message Sent Successfully!</p>
                <p className="text-sm">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold text-foreground mb-2"
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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold text-foreground mb-2"
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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-semibold text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-semibold text-foreground mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="security-guards">
                      Static Security Guards
                    </option>
                    <option value="bodyguards">Bodyguards</option>
                    <option value="mobile-escorts">Mobile Escorts</option>
                    <option value="equipment">Security Equipment</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold text-foreground mb-2"
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-primary text-center mb-16 font-bold">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Office */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-h3 font-bold text-primary mb-4">
                Head Office
              </h3>
              <p className="font-semibold text-foreground mb-1">Islamabad</p>
              <p className="text-muted-foreground text-sm mb-4">
                Central coordination and management
              </p>
            </div>

            {/* Regional Offices */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-h3 font-bold text-primary mb-4">
                Regional Offices
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• South (Multan)</li>
                <li>• Lahore</li>
                <li>• Karachi</li>
                <li>• Jhelum</li>
                <li>• Gujranwala</li>
              </ul>
            </div>

            {/* Area & Sub Offices */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-h3 font-bold text-primary mb-4">
                Area & Sub Offices
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
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
