import { Link } from "react-router-dom";
import { Shield, Users, Truck, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-32 -right-20 w-72 h-72 bg-accent rounded-full blur-3xl animation-pulse"></div>
          <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-accent rounded-full blur-3xl animation-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-h1 text-primary-foreground mb-6 font-black leading-tight">
              Professional Security Services You Can Trust
            </h1>
            <p className="text-2xl text-primary-foreground mb-10 opacity-95 leading-relaxed font-semibold">
              Eagle Security Guards (Pvt) Ltd draws its manpower from armed
              forces of Pakistan and imparts training to meet critical security
              requirements reliably and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-accent text-accent-foreground px-10 py-5 font-black text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block text-center"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground text-primary-foreground px-10 py-5 font-black text-lg rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 inline-block text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 text-primary text-center mb-16 font-black">
              Established Since 1992
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-10 rounded-xl border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-h3 font-black text-primary mb-5">
                  Our Vision
                </h3>
                <p className="text-lg text-foreground leading-relaxed font-semibold">
                  Vigilance by the dedicated and quality conscious guards is the
                  ultimate answer to security.
                </p>
              </div>

              <div className="bg-white p-10 rounded-xl border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-h3 font-black text-primary mb-5">
                  Our Mission
                </h3>
                <p className="text-lg text-foreground leading-relaxed font-semibold">
                  Being managed by competent ex-army officers with wide
                  experience in designing and implementing effective security
                  systems to combat prevailing threats, we aim to select and
                  deploy experienced, well-trained personnel.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-xl border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-h3 font-black text-primary mb-6">
                Our Background
              </h3>
              <p className="text-lg text-foreground leading-relaxed font-semibold mb-5">
                Eagle Security Guards was established in 1992. The company has
                the NOC to operate all over Pakistan including AJK. Today the
                company is one of the leading private security companies in
                Pakistan upholding its credible name to provide most reliable,
                efficient and cost effective guarding services.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-semibold">
                Our head office is located in Islamabad with regional/branch
                offices in almost all major cities of Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-primary text-center mb-4 font-bold">
            Our Security Services
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Comprehensive security solutions tailored to your specific needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Static Guards */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-3">
                Static Security Guards
              </h3>
              <p className="text-foreground leading-relaxed">
                Comprehensive personal data screening ensures only vetted,
                trained guards join our ranks.
              </p>
            </div>

            {/* Bodyguards */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-3">
                Bodyguards
              </h3>
              <p className="text-foreground leading-relaxed">
                Drawn from Special Service Group (SSG) of Pakistan Army. Cream
                of handpicked men dedicated to difficult missions.
              </p>
            </div>

            {/* Mobile Escorts */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Truck className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-3">
                Mobile Escorts
              </h3>
              <p className="text-foreground leading-relaxed">
                Fully trained teams to protect personnel during movement with
                defensive measures for any eventuality.
              </p>
            </div>

            {/* Security Equipment */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Lock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-3">
                Security Equipment
              </h3>
              <p className="text-foreground leading-relaxed">
                CCTV cameras, walkthrough gates, wireless comm devices, and
                barbed wire protection solutions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-primary text-primary-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-primary text-center mb-4 font-bold">
            Presence Across Pakistan
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Multiple offices nationwide ensuring reliable coverage and local
            expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Head Office */}
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-h3 font-bold text-primary mb-4">
                Head Office
              </h3>
              <p className="text-lg font-semibold text-accent mb-2">
                Islamabad
              </p>
              <p className="text-muted-foreground">
                Our central hub providing comprehensive coordination and
                management
              </p>
            </div>

            {/* Regional Offices */}
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-h3 font-bold text-primary mb-4">
                Regional Offices
              </h3>
              <ul className="space-y-2 text-foreground">
                <li>• South (Multan)</li>
                <li>• Lahore</li>
                <li>• Karachi</li>
                <li>• Jhelum</li>
                <li>• Gujranwala</li>
              </ul>
            </div>

            {/* Area & Sub Offices */}
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-h3 font-bold text-primary mb-4">
                Area & Sub Offices
              </h3>
              <ul className="space-y-2 text-foreground">
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

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-primary text-center mb-16 font-bold">
            Why Choose Eagle Security Guards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-h3 font-bold text-primary mb-4">
                Military Excellence
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Our personnel are drawn from armed forces of Pakistan, ensuring
                top-tier training and discipline in security operations.
              </p>
            </div>

            <div>
              <h3 className="text-h3 font-bold text-primary mb-4">
                Thorough Vetting Process
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Comprehensive personal data screening and database verification
                ensures no compromised individuals join our team.
              </p>
            </div>

            <div>
              <h3 className="text-h3 font-bold text-primary mb-4">
                Elite Specialized Units
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Bodyguards from Special Service Group (SSG) represent the cream
                of our handpicked men trained for critical missions.
              </p>
            </div>

            <div>
              <h3 className="text-h3 font-bold text-primary mb-4">
                Comprehensive Solutions
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                From personnel protection to equipment solutions, we provide
                complete security coverage for every scenario.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/why-choose-us"
              className="bg-primary text-primary-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-primary text-center mb-16 font-bold">
            Trusted by Leading Organizations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
            {[
              "ARY News",
              "Rousch Pakistan",
              "Meezan Bank",
              "DESCON",
              "National Bank of Pakistan",
              "PARCO",
              "UNDP",
              "Imtiaz",
              "Government of Pakistan",
              "State Life",
              "The Educators",
              "Allied Schools",
              "Shifa International Hospitals",
              "Dawood Hercules",
            ].map((client) => (
              <div
                key={client}
                className="bg-white p-6 rounded-lg border border-border flex items-center justify-center text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-foreground text-sm">
                  {client}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-lg">
            Join our growing list of satisfied clients across government,
            banking, media, and corporate sectors
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-h2 text-primary-foreground mb-6 font-bold">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-xl text-primary-foreground mb-8 opacity-95 max-w-2xl mx-auto">
            Contact us today for a consultation with our security experts
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Get in Touch Now
          </Link>
        </div>
      </section>
    </div>
  );
}
