import { Link } from "react-router-dom";
import { Target, Lightbulb, Compass } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-background text-foreground py-24 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-foreground">
            About Eagle Security Guards
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl font-bold leading-relaxed text-muted-foreground">
            Building trust through excellence in professional security services
            since 1992
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
                Our Background
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-bold mb-6">
                Eagle Security Guards was established in 1992. The company has
                the NOC to operate all over Pakistan including AJK. Today the
                company is one of the leading private security companies in
                Pakistan upholding its credible name to provide most reliable,
                efficient and cost effective guarding services.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-bold">
                Our head office is located in Islamabad with regional/branch
                offices in almost all major cities of Pakistan, ensuring
                comprehensive coverage and local expertise throughout the
                nation.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg h-64 md:h-96">
              <img
                src="https://images.pexels.com/photos/7714972/pexels-photo-7714972.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional security personnel"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-20 md:py-28 bg-background transition-colors duration-300 border-y border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-16">
            Our Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Vision */}
            <div className="bg-card p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-black text-foreground">Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-bold">
                Vigilance by the dedicated and quality conscious guards is the
                ultimate answer to security.
              </p>
            </div>

            {/* Mission */}
            <div
              className="bg-card p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-black text-foreground">Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-bold">
                Being managed by competent ex-army officers with wide experience
                in designing and implementing effective security systems, we aim
                to select and deploy experienced, well-trained personnel to
                combat prevailing threats.
              </p>
            </div>

            {/* Core Values */}
            <div
              className="bg-card p-8 md:p-10 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-8 h-8 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-black text-foreground">
                  Commitment
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-bold">
                Providing most reliable, efficient and cost effective guarding
                services with dedication to quality and integrity throughout
                Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-3xl animate-fade-in">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-bold mb-6">
              Eagle Security Guards (Pvt) Ltd draws its main pool of manpower
              from the armed forces of Pakistan, ensuring that our personnel
              bring professional military training and discipline to every
              assignment.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-bold mb-6">
              We are committed to imparting comprehensive training to meet
              critical security requirements reliably and efficiently. Our
              comprehensive vetting process ensures that only the most qualified
              and trustworthy individuals join our organization.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
              Our Commitment to Quality
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-bold mb-6">
              Every member of our team undergoes rigorous screening and
              verification. Comprehensive personal data is collected, screened,
              vetted, and stored in our secure database, ensuring that no
              compromised or blacklisted individuals join our ranks.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-bold">
              This dedication to quality and integrity has made us the trusted
              choice for organizations across government, banking, media, and
              corporate sectors throughout Pakistan.
            </p>
          </div>

          <div className="bg-card text-foreground p-10 md:p-12 rounded-xl border-2 border-accent">
            <h3 className="text-3xl font-black text-foreground mb-8">
              Nationwide Presence
            </h3>
            <p className="leading-relaxed mb-6 font-bold text-muted-foreground">
              With our head office in Islamabad and multiple regional, area, and
              sub offices across Pakistan, we ensure reliable coverage and local
              expertise wherever you need us.
            </p>
            <p className="leading-relaxed font-bold text-muted-foreground">
              Our extensive network allows us to respond quickly to your
              security needs and provide consistent, high-quality service across
              all regions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-foreground mb-6 font-black">
            Learn More About Our Services
          </h2>
          <Link
            to="/services"
            className="bg-accent text-accent-foreground px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
}
