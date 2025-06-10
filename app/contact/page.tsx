import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      <section className="px-4 py-20 text-center bg-[#f7f7f7]">
        <h1 className="text-4xl font-bold text-[#d4af62] mb-6">Contact Us</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-10">
          Reach out to us with your inquiries. We’re ready to assist you with your manpower needs.
        </p>

        <ContactForm />
      </section>

      {/* Google Map Embed */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with your real embed URL
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
