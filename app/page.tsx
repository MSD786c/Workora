import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Image from "next/image"; // make sure this is at the top

export default function Home() {
  const previewServices = [
    {
      title: "Construction Labor",
      description: "Skilled and unskilled workers for site operations, masonry, carpentry, and more.",
    },
    {
      title: "Hospitality Staff",
      description: "Waiters, housekeeping, receptionists, and kitchen helpers.",
    },
    {
      title: "Cleaning Services",
      description: "Manpower for commercial, residential, and industrial cleaning.",
    },
  ];

  return (
    <main className="bg-white text-black relative">
      <Navbar />


    <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional Manpower Solutions for Every Industry
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Workora delivers vetted manpower to drive your success — across construction, hospitality, logistics, and more.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#d4af62] text-black font-semibold px-6 py-3 rounded hover:bg-[#c49b3e] transition"
          >
            Get a Quote
          </a>
        </div>
      </section> 



      {/* Preview of Services */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#d4af62]">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {previewServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <a
          href="/services"
          className="mt-10 inline-block text-[#d4af62] font-semibold underline hover:no-underline"
        >
          View all services →
        </a>
      </section>

      <Footer />
    </main>
  );
}
