import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Construction Labor",
      description: "Skilled and unskilled workers for site operations, masonry, carpentry, steel fixing, and more.",
    },
    {
      title: "Hospitality Staff",
      description: "Waiters, housekeeping, receptionists, kitchen helpers, and hotel support staff.",
    },
    {
      title: "Cleaning Services",
      description: "Commercial, residential, and industrial cleaning manpower.",
    },
    {
      title: "Logistics & Warehouse",
      description: "Pickers, packers, forklift operators, and inventory staff.",
    },
    {
      title: "Event Crew",
      description: "Setup crews, ushers, stewards, and temporary manpower for events.",
    },
    {
      title: "Security Personnel",
      description: "Trained guards for residential, commercial, and event security.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Navbar />

      <section className="px-4 py-20 text-center bg-[#f7f7f7]">
        <h1 className="text-4xl font-bold text-[#d4af62] mb-6">Our Services</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-12">
          Workora provides skilled and semi-skilled manpower for key sectors across the UAE.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
