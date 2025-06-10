import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      <section className="px-4 py-20 text-center bg-[#f7f7f7]">
        <h1 className="text-4xl font-bold text-[#d4af62] mb-6">About Workora</h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Workora Manpower Supply L.L.C. is a trusted provider of skilled and unskilled labor across the United Arab Emirates. From construction sites to hotel lobbies, we deliver reliable manpower where and when you need it.
        </p>
      </section>

      <section className="px-4 py-16 max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 text-left">
        <div>
          <h2 className="text-2xl font-semibold text-[#d4af62] mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To bridge the workforce gap by supplying reliable, skilled labor that adds value to every business and project we support.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#d4af62] mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading manpower supply company in the UAE, known for integrity, quality, and unmatched service delivery.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#d4af62] mb-2">Legal & Compliance</h2>
          <p className="text-gray-700">
            Workora is fully licensed under UAE laws to provide manpower supply services. We ensure all laborers are documented and compliant with MOHRE regulations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#d4af62] mb-2">Why Workora?</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Reliable workforce on short notice</li>
            <li>Strict documentation & visa compliance</li>
            <li>Multi-industry coverage (construction, hospitality, events, cleaning)</li>
            <li>UAE-wide service with dedicated support</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
