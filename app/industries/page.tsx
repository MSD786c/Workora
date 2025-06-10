import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import IndustryCard from "../../components/IndustryCard";

export default function Industries() {
  const industries = [
    {
      title: "Construction",
      description: "General labor, steel fixers, masons, carpenters, electricians, and more for construction projects.",
    },
    {
      title: "Hospitality",
      description: "Professional staff including waiters, receptionists, kitchen helpers, and housekeeping personnel.",
    },
    {
      title: "Cleaning",
      description: "Skilled janitors and sanitation workers for commercial, residential, and industrial spaces.",
    },
    {
      title: "Logistics & Warehouse",
      description: "Helpers, packers, loaders, drivers, and inventory assistants for logistics and supply chains.",
    },
    {
      title: "Event Management",
      description: "Temporary manpower for setup, ushers, event crew, and support staff for exhibitions and festivals.",
    },
    {
      title: "Security",
      description: "Licensed and trained security personnel for residential, commercial, and event protection.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Navbar />

      <section className="px-4 py-20 text-center bg-[#f7f7f7]">
        <h1 className="text-4xl font-bold text-[#d4af62] mb-6">Industries We Serve</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-12">
          Workora supports a wide range of sectors with on-demand labor solutions, ensuring smooth operations for our clients across the UAE.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
