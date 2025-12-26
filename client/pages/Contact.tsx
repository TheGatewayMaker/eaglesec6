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
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-background text-foreground py-24 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-foreground">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl font-bold leading-relaxed text-muted-foreground">
            Contact our security experts for a consultation or inquiries
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom">
              <MapPin className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-4">
                Head Office
              </h3>
              <p className="text-muted-foreground font-bold mb-2">Islamabad</p>
              <p className="text-muted-foreground/80 font-bold">
                Central coordination hub for all operations
              </p>
            </div>

            <div
              className="bg-card p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <Phone className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-4">
                Phone
              </h3>
              <p className="text-muted-foreground font-bold mb-2">
                For inquiries and quotes
              </p>
              <p className="text-muted-foreground/80 font-bold">
                Contact through our form or visit office
              </p>
            </div>

            <div
              className="bg-card p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <Clock className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-4">
                Response Time
              </h3>
              <p className="text-muted-foreground font-bold mb-2">
                Quick turnaround
              </p>
              <p className="text-muted-foreground/80 font-bold">
                We prioritize all security consultations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-10">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-600/10 border-2 border-green-600 text-green-600 dark:text-green-400 p-6 rounded-xl mb-8">
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
                    className="block font-black text-foreground mb-3"
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
                    className="w-full px-5 py-3 bg-input border-2 border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-black text-foreground mb-3"
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
                    className="w-full px-5 py-3 bg-input border-2 border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-black text-foreground mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-input border-2 border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-black text-foreground mb-3"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-input border-2 border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
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
                  className="block font-black text-foreground mb-3"
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
                  className="w-full px-5 py-3 bg-input border-2 border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-300"
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
      <section className="py-20 md:py-28 bg-card transition-colors duration-300 border-y border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-16">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Office */}
            <div className="bg-background p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom">
              <h3 className="text-2xl font-black text-foreground mb-6">
                Head Office
              </h3>
              <p className="font-black text-foreground mb-2">Islamabad</p>
              <p className="text-muted-foreground font-bold">
                Central coordination and management
              </p>
            </div>

            {/* Regional Offices */}
            <div
              className="bg-background p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="text-2xl font-black text-foreground mb-6">
                Regional Offices
              </h3>
              <ul className="space-y-3 text-muted-foreground font-bold text-sm md:text-base">
                <li>• South (Multan)</li>
                <li>• Lahore</li>
                <li>• Karachi</li>
                <li>• Jhelum</li>
                <li>• Gujranwala</li>
              </ul>
            </div>

            {/* Area & Sub Offices */}
            <div
              className="bg-background p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-2xl font-black text-foreground mb-6">
                Area & Sub Offices
              </h3>
              <ul className="space-y-3 text-muted-foreground font-bold text-sm md:text-base">
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
