'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { 
  HardHat, 
  Utensils, 
  Sparkles, 
  Truck, 
  Users, 
  Shield, 
  CheckCircle,
  DollarSign,
  Building2,
  Wrench,
  Stethoscope,
  Factory,
  Ship,
  Hotel,
  Warehouse,
  Briefcase,
  Calculator,
  FileText,
  TrendingUp
} from 'lucide-react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import HeroBanner from "../../components/HeroBanner";
import SectionTitle from "../../components/SectionTitle";
import CallToAction from "../../components/CallToAction";
import ScrollToTopButton from "../../components/ScrollToTopButton";

export default function Services() {
  // Handle anchor navigation when page loads
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1) // Remove the #
      const element = document.getElementById(sectionId)
      if (element) {
        // Add a delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 500)
      }
    }
  }, [])

  // Blue Collar = physical/manual/field/technical/operational roles
  const blueCollarServices = [
    {
      title: "Construction & Civil",
      description: "Skilled and unskilled workers for construction projects, including steel fixers, masons, carpenters, and general labor.",
      icon: <HardHat size={24} />,
      imageUrl: "/images/services/construction.jpg",
      skills: ["Masons and carpenters", "Steel fixers and fabricators", "Painters and plasterers", "General laborers", "Site supervisors"]
    },
    {
      title: "Oil & Gas",
      description: "Specialized workforce for upstream, midstream, and downstream operations in the oil and gas industry.",
      icon: <Building2 size={24} />,
      imageUrl: "/images/industries/oil-and-gas.jpg",
      skills: ["Rig workers and operators", "Pipeline technicians", "Refinery workers", "HSE specialists", "Maintenance technicians"]
    },
    {
      title: "MEP Services",
      description: "Specialized technicians for mechanical, electrical, and plumbing projects across residential and commercial sectors.",
      icon: <Wrench size={24} />,
      imageUrl: "/images/industries/mep.jpg",
      skills: ["Electricians", "HVAC technicians", "Plumbers", "Fire system technicians", "BMS operators", "Ductman", "Insulator"]
    },
    {
      title: "Logistics & Warehouse",
      description: "Skilled personnel for warehouse operations, inventory management, and transportation services.",
      icon: <Truck size={24} />,
      imageUrl: "/images/services/logistics.jpg",
      skills: ["Warehouse workers", "Forklift operators", "Packers and loaders", "Inventory clerks", "Delivery drivers"]
    },
  
    {
      title: "Manufacturing & Engineering",
      description: "Skilled workers for production lines, quality control, and engineering support across manufacturing sectors.",
      icon: <Factory size={24} />,
      imageUrl: "/images/industries/manufacturing.jpg",
      skills: ["Production line workers", "Quality control inspectors", "Machine operators", "Assembly technicians", "Maintenance staff"]
    },
    {
      title: "Marine & Offshore",
      description: "Specialized workforce for shipyards, ports, and offshore operations requiring maritime expertise.",
      icon: <Ship size={24} />,
      imageUrl: "/images/industries/marine.jpg",
      skills: ["Ship maintenance crew", "Port workers", "Offshore technicians", "Marine engineers", "Dock workers"]
    },
    {
      title: "Delivery Drivers",
      description: "Professional drivers for last-mile delivery, logistics, and courier services across all vehicle types.",
      icon: <Truck size={24} />,
      imageUrl: "/images/services/delivery-driver.jpg",
      skills: ["Van and truck drivers", "Motorcycle couriers", "Bicycle delivery riders"]
    },
    // --- MOVED FROM WHITE COLLAR ---
    {
      title: "Hospitality & Events Support",
      description: "Hands-on staff for hotels, restaurants, catering, and event setup including waiters, housekeepers, kitchen helpers, and event setup crews.",
      icon: <Utensils size={24} />,
      imageUrl: "/images/industries/events.jpg",
      skills: [
        "Housekeeping staff", 
        "Food & beverage servers", 
        "Kitchen helpers", 
        "Event setup crews", 
        "Ushers and stewards"
      ]
    },
    {
      title: "Healthcare Assistants",
      description: "Non-clinical support staff for hospitals and clinics, including patient care assistants, orderlies, and cleaners.",
      icon: <Stethoscope size={24} />,
      imageUrl: "/images/industries/healthcare.jpg",
      skills: [
        "Patient care assistants", 
        "Orderlies", 
        "Cleaners"
      ]
    },
    {
      title: "Facility & Maintenance Staff",
      description: "Technicians and support workers across various industries for property upkeep, cleaning, and maintenance operations.",
      icon: <Warehouse size={24} />,
      imageUrl: "/images/industries/facility.jpg",
      skills: [
        "Cleaning and janitorial staff", 
        "Maintenance technicians", 
        "Facility support"
      ]
    }
  ];

  // White Collar = admin, coordinator, supervisor, professional, office/customer-facing
  const whiteCollarServices = [
    {
      title: "Front Desk & Supervisors",
      description: "Professional administrative staff for hotels, hospitality, and business centers including front desk, reception, and shift supervisors.",
      icon: <Hotel size={24} />,
      imageUrl: "/images/services/receptionist.jpg",
      skills: [
        "Front desk personnel", 
        "Reception staff", 
        "Shift supervisors"
      ]
    },
    {
      title: "Event & Office Coordination",
      description: "Experienced coordinators and admin staff for event planning, office management, and customer service.",
      icon: <Users size={24} />,
      imageUrl: "/images/services/events.jpg",
      skills: [
        "Event coordinators", 
        "Office administrators", 
        "Customer service staff"
      ]
    },
    {
      title: "Healthcare Admin Support",
      description: "Administrative and records management staff for healthcare facilities.",
      icon: <Stethoscope size={24} />,
      imageUrl: "/images/industries/healthcare.jpg",
      skills: [
        "Administrative assistants", 
        "Medical records clerks", 
        "Support coordinators"
      ]
    },
    {
      title: "Facility Management (Admin)",
      description: "Administrative and management professionals for building operations and vendor coordination.",
      icon: <Warehouse size={24} />,
      imageUrl: "/images/industries/facility.jpg",
      skills: [
        "Property administrators", 
        "Maintenance coordinators", 
        "Facility supervisors", 
        "Vendor management", 
        "Administrative support"
      ]
    }
  ];

  const payrollServices = [
    {
      title: "Visa Sponsorship & Processing",
      description: "Complete visa sponsorship under our company when you face quota restrictions. Transparent cost structure.",
      icon: <Calculator size={24} />,
      features: [
        "Elimination of quota-related hiring barriers",
        "Complete visa sponsorship under our company",
        "Transparent cost structure",
        "Fast processing times"
      ]
    },
    {
      title: "Bank Account Opening & Salary Transfer via WPS",
      description: "We assist employees with opening bank accounts to ensure smooth salary transfers, with WPS-compliant salary transfers ensuring timely and accurate payments to all employees.",
      icon: <Briefcase size={24} />,
      features: [
        "Bank account setup assistance",
        "Documentation support",
        "Multiple bank partnerships",
        "Quick approval process",
        "WPS-compliant salary transfers",
        "Pay slip distribution",
        "End-of-service benefits management",
        "Full regulatory compliance"
      ]
    }
  ];

  const serviceProcess = [
    {
      title: "Initial Consultation",
      description: "We meet with you to understand your specific manpower requirements, timeline, and budget."
    },
    {
      title: "Custom Proposal",
      description: "We develop a tailored manpower solution based on your needs and industry requirements."
    },
    {
      title: "Worker Selection",
      description: "We select qualified workers from our database who match your specific requirements."
    },
    {
      title: "Deployment",
      description: "Workers are deployed to your site with all necessary documentation and safety training."
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support and supervision to ensure optimal performance."
    }
  ];

  const benefits = [
    "Reduced administrative burden and HR costs",
    "Flexible workforce scaling based on project demands",
    "Access to pre-screened, qualified workers",
    "Minimized legal and compliance risks",
    "Quick replacement of workers when needed",
    "Consistent quality and performance standards"
  ];

  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner 
        title="Our Services" 
        backgroundImage="/images/services/hero.jpg" 
      />

      {/* Blue Collar Services */}
      <section id="blue-collar" className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Blue Collar Services" 
            subtitle="Skilled and semi-skilled workforce solutions for hands-on operations across various industries."
          />

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {blueCollarServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {service.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <motion.img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover" 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
                <div className="px-7 py-6">
                  <div className="flex items-center mb-3">
                    <div className="text-[#d4af62] mr-3">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-[#d4af62]">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                  {service.skills && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-800">Key Skills:</h4>
                      <ul className="space-y-1">
                        {service.skills.map((skill, i) => (
                          <li key={i} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="text-[#d4af62] mr-1 flex-shrink-0" size={12} />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* White Collar Services */}
      <section id="white-collar" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="White Collar Services" 
            subtitle="Professional and administrative staff for customer-facing and office-based operations."
          />

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {whiteCollarServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {service.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <motion.img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover" 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
                <div className="px-7 py-6">
                  <div className="flex items-center mb-3">
                    <div className="text-[#d4af62] mr-3">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-[#d4af62]">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                  {service.skills && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-800">Key Skills:</h4>
                      <ul className="space-y-1">
                        {service.skills.map((skill, i) => (
                          <li key={i} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="text-[#d4af62] mr-1 flex-shrink-0" size={12} />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Payroll Management Services */}
      <section id="payroll-management" className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Payroll & Visa Sponsorship" 
            subtitle="Seamless payroll solutions and visa sponsorship that eliminate quota barriers and compliance headaches."
          />

          {/* Description */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Payroll is one of the most critical aspects of any organization, yet it often comes with significant administrative and compliance challenges. In the UAE, these challenges become even greater when companies face staff quota restrictions.
              </p>
              <div className="w-16 h-1 bg-[#d4af62] mx-auto mb-6"></div>
              <p className="text-[#d4af62] font-bold text-2xl mb-6">
                When this happens, Workora provides a seamless solution.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                If your company doesn't have the quota to hire staff under your own sponsorship, we take employees under our visa. The entire process is managed and processed through us, ensuring transparency, compliance, and efficiency.
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {payrollServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-[#d4af62]/40 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-[#d4af62] mr-4 bg-[#d4af62]/15 p-3 rounded-xl group-hover:bg-[#d4af62]/25 transition-colors duration-300">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#d4af62] transition-colors duration-300">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-8 text-base leading-relaxed">{service.description}</p>
                  {service.features && (
                    <div className="space-y-4">
                      <div className="w-12 h-0.5 bg-[#d4af62]/30 group-hover:bg-[#d4af62] transition-colors duration-300"></div>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="text-[#d4af62] mt-0.5 mr-3 flex-shrink-0" size={16} />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div 
            className="bg-gradient-to-br from-[#d4af62]/8 via-[#d4af62]/5 to-transparent p-12 rounded-2xl border border-[#d4af62]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="w-20 h-1 bg-[#d4af62] mx-auto mb-6"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-[#d4af62]">Workora</span>?
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                By outsourcing payroll and visa sponsorship to Workora, companies can streamline compliance with UAE labor laws, reduce administrative burdens, and ensure employees are paid accurately and on time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Shield className="text-[#d4af62] mx-auto mb-4" size={40} />
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Transparent Costs</h4>
                  <p className="text-gray-600">No hidden charges, clear fee structure with complete transparency</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle className="text-[#d4af62] mx-auto mb-4" size={40} />
                  <h4 className="font-bold text-lg text-gray-800 mb-2">WPS Compliant</h4>
                  <p className="text-gray-600">Secure salary transfers via WPS with full regulatory compliance</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md mb-3 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-0 flex items-center justify-center">
                    <img 
                      src="/images/aed-logo.png" 
                      alt="AED Currency" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Confidential & Secure</h4>
                  <p className="text-gray-600">Complete payroll data protection with bank-level security</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Service Process" 
            subtitle="How we deliver exceptional manpower solutions to our clients"
          />

          <div className="relative mt-16">
            {/* Progress Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-24">
              {serviceProcess.map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number */}
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <motion.div 
                      className="relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#d4af62] flex items-center justify-center text-white text-2xl font-bold z-10 relative">
                        {index + 1}
                      </div>
                      <div className="absolute -inset-2 rounded-full bg-[#d4af62]/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2">
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
                    >
                      <h3 className="text-xl font-semibold text-[#d4af62] mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-[#d4af62] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Benefits of Our Services
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Partnering with Workora for your manpower needs offers numerous advantages that help your business operate more efficiently and effectively.
              </motion.p>
              
              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-[#d4af62] mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#d4af62]/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
                <img 
                  src="/images/services/construction.jpg" 
                  alt="Construction Workers" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Need specialized manpower?"
        description="Contact us today to discuss your requirements and get a customized quote."
        buttonText="Request a Quote"
        buttonLink="/contact"
        backgroundImage="/images/services/hero.jpg"
      />

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
