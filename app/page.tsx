import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

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
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#f7f7f7]">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#d4af62] mb-4">
          Workora – Your Trusted Labor Supply Partner
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
          Delivering manpower solutions across construction, hospitality, events, and more — with reliability and speed across the UAE.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-[#d4af62] text-white px-6 py-3 rounded shadow hover:bg-[#c19c4f] transition"
        >
          Get in Touch
        </Link>
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
