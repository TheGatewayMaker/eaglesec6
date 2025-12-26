import { Award, Shield, Users, CheckCircle2, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            Why Choose Eagle Security Guards
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl font-bold leading-relaxed">
            Excellence in security services trusted by Pakistan's leading
            organizations
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-850">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Military Excellence */}
            <div className="p-8 md:p-10 rounded-xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <Award className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-6">
                Military Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed font-bold text-sm md:text-base">
                Our personnel are drawn from the armed forces of Pakistan,
                bringing professional military training, discipline, and
                experience.
              </p>
            </div>

            {/* Thorough Vetting */}
            <div className="p-8 md:p-10 rounded-xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <Shield className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-6">
                Thorough Vetting
              </h3>
              <p className="text-gray-300 leading-relaxed font-bold text-sm md:text-base">
                Comprehensive personal data screening ensures only trusted,
                verified individuals are part of our team. No compromises on
                integrity.
              </p>
            </div>

            {/* Elite Special Forces */}
            <div className="p-8 md:p-10 rounded-xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <Users className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-6">
                Elite Special Forces
              </h3>
              <p className="text-gray-300 leading-relaxed font-bold text-sm md:text-base">
                Bodyguards drawn from Special Service Group (SSG) - the cream of
                Pakistan's most elite military units.
              </p>
            </div>

            {/* Professional Training */}
            <div className="p-8 md:p-10 rounded-xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <Zap className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-6">
                Professional Training
              </h3>
              <p className="text-gray-300 leading-relaxed font-bold text-sm md:text-base">
                Continuous training in modern security protocols, threat
                assessment, and emergency response procedures.
              </p>
            </div>

            {/* Comprehensive Solutions */}
            <div className="p-8 md:p-10 rounded-xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <CheckCircle2 className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-6">
                Comprehensive Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed font-bold text-sm md:text-base">
                From personnel protection to cutting-edge security equipment, we
                provide complete coverage for every scenario.
              </p>
            </div>

            {/* Nationwide Presence */}
            <div className="p-8 md:p-10 rounded-xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300">
              <Star className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-white mb-6">
                Nationwide Presence
              </h3>
              <p className="text-gray-300 leading-relaxed font-bold text-sm md:text-base">
                Multiple offices across Pakistan ensure quick response and
                consistent service quality wherever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-850 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            Trusted by Pakistan's Leading Organizations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              "ARY News",
              "National Bank of Pakistan",
              "Meezan Bank",
              "Government of Pakistan",
              "DESCON",
              "PARCO",
              "State Life",
              "Shifa International Hospitals",
            ].map((client) => (
              <div
                key={client}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 md:p-8 rounded-xl border-2 border-slate-600 shadow-sm hover:shadow-md hover:border-accent transition-all duration-300 text-center"
              >
                <p className="font-black text-white text-sm md:text-base">
                  {client}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 text-base md:text-lg font-bold max-w-2xl mx-auto">
            Government agencies, financial institutions, media companies, and
            multinational corporations depend on Eagle Security Guards for their
            safety and security needs.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-850">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            What Sets Us Apart
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border-2 border-slate-600 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-white mb-3">
                    Source of Personnel
                  </h4>
                  <p className="text-gray-300 font-bold text-sm md:text-base">
                    Armed forces of Pakistan with military discipline
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border-2 border-slate-600 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-white mb-3">
                    Vetting Process
                  </h4>
                  <p className="text-gray-300 font-bold text-sm md:text-base">
                    Comprehensive screening and database verification
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border-2 border-slate-600 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-white mb-3">
                    Training Standards
                  </h4>
                  <p className="text-gray-300 font-bold text-sm md:text-base">
                    Critical security requirement training and protocols
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border-2 border-slate-600 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-white mb-3">
                    Geographic Reach
                  </h4>
                  <p className="text-gray-300 font-bold text-sm md:text-base">
                    Multiple offices across Pakistan for local expertise
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border-2 border-slate-600 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-white mb-3">Service Range</h4>
                  <p className="text-gray-300 font-bold text-sm md:text-base">
                    Static guards, bodyguards, escorts, and equipment
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border-2 border-slate-600 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-white mb-3">Client Base</h4>
                  <p className="text-gray-300 font-bold text-sm md:text-base">
                    Government, banking, media, and corporate sectors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-6 font-black">
            Experience the Eagle Security Difference
          </h2>
          <p className="text-base md:text-xl text-gray-300 mb-10 font-bold">
            Contact us today for a security consultation
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
