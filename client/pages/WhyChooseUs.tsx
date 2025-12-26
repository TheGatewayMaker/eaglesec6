import { Award, Shield, Users, CheckCircle2, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-background text-foreground py-24 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-foreground">
            Why Choose Eagle Security Guards
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl font-bold leading-relaxed text-muted-foreground">
            Excellence in security services trusted by Pakistan's leading
            organizations
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Military Excellence */}
            <div className="p-8 md:p-10 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom">
              <Award className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-6">
                Military Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                Our personnel are drawn from the armed forces of Pakistan,
                bringing professional military training, discipline, and
                experience.
              </p>
            </div>

            {/* Thorough Vetting */}
            <div
              className="p-8 md:p-10 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "50ms" }}
            >
              <Shield className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-6">
                Thorough Vetting
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                Comprehensive personal data screening ensures only trusted,
                verified individuals are part of our team. No compromises on
                integrity.
              </p>
            </div>

            {/* Elite Special Forces */}
            <div
              className="p-8 md:p-10 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <Users className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-6">
                Elite Special Forces
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                Bodyguards drawn from Special Service Group (SSG) - the cream of
                Pakistan's most elite military units.
              </p>
            </div>

            {/* Professional Training */}
            <div
              className="p-8 md:p-10 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "150ms" }}
            >
              <Zap className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-6">
                Professional Training
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                Continuous training in modern security protocols, threat
                assessment, and emergency response procedures.
              </p>
            </div>

            {/* Comprehensive Solutions */}
            <div
              className="p-8 md:p-10 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <CheckCircle2 className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-6">
                Comprehensive Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                From personnel protection to cutting-edge security equipment, we
                provide complete coverage for every scenario.
              </p>
            </div>

            {/* Nationwide Presence */}
            <div
              className="p-8 md:p-10 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "250ms" }}
            >
              <Star className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-black text-foreground mb-6">
                Nationwide Presence
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                Multiple offices across Pakistan ensure quick response and
                consistent service quality wherever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 md:py-28 bg-card transition-colors duration-300 border-y border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-16">
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
                className="bg-card p-6 md:p-8 rounded-xl border-2 border-border shadow-sm hover:shadow-md hover:border-accent transition-all duration-300 text-center animate-fade-in"
              >
                <p className="font-black text-foreground text-sm md:text-base">
                  {client}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-base md:text-lg font-bold max-w-2xl mx-auto">
            Government agencies, financial institutions, media companies, and
            multinational corporations depend on Eagle Security Guards for their
            safety and security needs.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-16">
            What Sets Us Apart
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-card rounded-xl border-2 border-border shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-foreground mb-3">
                    Source of Personnel
                  </h4>
                  <p className="text-muted-foreground font-bold text-sm md:text-base">
                    Armed forces of Pakistan with military discipline
                  </p>
                </div>
                <div className="p-8 bg-card rounded-xl border-2 border-border shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-foreground mb-3">
                    Vetting Process
                  </h4>
                  <p className="text-muted-foreground font-bold text-sm md:text-base">
                    Comprehensive screening and database verification
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-card rounded-xl border-2 border-border shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-foreground mb-3">
                    Training Standards
                  </h4>
                  <p className="text-muted-foreground font-bold text-sm md:text-base">
                    Critical security requirement training and protocols
                  </p>
                </div>
                <div className="p-8 bg-card rounded-xl border-2 border-border shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-foreground mb-3">
                    Geographic Reach
                  </h4>
                  <p className="text-muted-foreground font-bold text-sm md:text-base">
                    Multiple offices across Pakistan for local expertise
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-card rounded-xl border-2 border-border shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-foreground mb-3">
                    Service Range
                  </h4>
                  <p className="text-muted-foreground font-bold text-sm md:text-base">
                    Static guards, bodyguards, escorts, and equipment
                  </p>
                </div>
                <div className="p-8 bg-card rounded-xl border-2 border-border shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-black text-foreground mb-3">
                    Client Base
                  </h4>
                  <p className="text-muted-foreground font-bold text-sm md:text-base">
                    Government, banking, media, and corporate sectors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-foreground mb-6 font-black">
            Experience the Eagle Security Difference
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-10 font-bold">
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
