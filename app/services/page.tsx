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
      title: "Cleaning Services",
      description: "Commercial, residential, and industrial cleaning manpower for all types of facilities.",
      icon: <Sparkles size={24} />,
      imageUrl: "/images/services/cleaning.jpg",
      skills: ["Commercial cleaning", "Residential cleaning", "Industrial cleaning", "Specialized sanitization", "Maintenance cleaning"]
    },
    {
      title: "Logistics & Warehouse",
      description: "Skilled personnel for warehouse operations, inventory management, and transportation services.",
      icon: <Truck size={24} />,
      imageUrl: "/images/services/logistics.jpg",
      skills: ["Warehouse workers", "Forklift operators", "Packers and loaders", "Inventory clerks", "Delivery drivers"]
    },
    {
      title: "Security Personnel",
      description: "Trained guards for residential, commercial, and event security with proper certifications.",
      icon: <Shield size={24} />,
      imageUrl: "/images/services/security.jpg",
      skills: ["Building security", "Event security", "Patrol services", "Access control", "Emergency response"]
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
      skills: ["Van and truck drivers", "Motorcycle couriers", "Bicycle delivery riders", "Package handlers", "Route optimization specialists", "Customer service representatives"]
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
      description: "Technicians and support workers for property upkeep, cleaning, and maintenance operations.",
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
      title: "Complete Payroll Processing",
      description: "End-to-end payroll management including salary calculations, statutory deductions, and timely disbursements through secure payment systems.",
      icon: <Calculator size={24} />,
      imageUrl: "/images/services/payroll.jpg",
      features: ["Monthly salary processing", "Overtime & allowance calculations", "Statutory deduction management", "WPS salary transfers", "End of service benefit calculations", "Multi-currency payroll support"]
    },
    {
      title: "Employee Administration",
      description: "Comprehensive employee lifecycle management from onboarding to exit, handling all documentation and government compliance requirements.",
      icon: <FileText size={24} />,
      imageUrl: "/images/services/payroll.jpg",
      features: ["Employee onboarding & documentation", "Visa & work permit processing", "Emirates ID coordination", "Medical insurance enrollment", "Bank account opening assistance", "Employee record maintenance"]
    },
    {
      title: "Attendance & Time Management",
      description: "Advanced time tracking and attendance management systems with automated timesheet processing and verification.",
      icon: <TrendingUp size={24} />,
      imageUrl: "/images/services/payroll.jpg",
      features: ["Biometric attendance systems", "Timesheet collection & verification", "Leave management integration", "Overtime tracking", "Shift schedule management", "Real-time attendance reporting"]
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring complete adherence to UAE labor laws, MOHRE regulations, and government requirements with expert guidance.",
      icon: <Briefcase size={24} />,
      imageUrl: "/images/services/payroll.jpg",
      features: ["UAE labor law compliance", "MOHRE liaison services", "Government audit support", "Legal documentation", "Policy implementation", "Regulatory updates management"]
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
            title="Payroll Management Solutions" 
            subtitle="Comprehensive payroll and HR services that let you focus on what matters most - growing your business."
          />

          {/* Payroll Description */}
          <motion.div 
            className="max-w-3xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Payroll is the backbone of every organization. With ever-changing regulations and complex compliance requirements, managing payroll in-house can be overwhelming and costly.
              </p>
              <p className="text-[#d4af62] font-semibold text-lg">
                Workora simplifies your payroll operations while ensuring 100% compliance, allowing your team to focus on strategic growth.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {payrollServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#d4af62]/30"
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
                <div className="px-7 py-6">
                  <div className="flex items-center mb-4">
                    <div className="text-[#d4af62] mr-3 bg-[#d4af62]/10 p-2 rounded-lg">{service.icon}</div>
                    <h3 className="text-lg font-bold text-[#d4af62]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                  {service.features && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-xs text-gray-600">
                            <CheckCircle className="text-[#d4af62] mt-0.5 mr-2 flex-shrink-0" size={12} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Payroll Benefits Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#d4af62]/5 to-[#d4af62]/10 p-8 rounded-xl border border-[#d4af62]/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#d4af62] mb-3">Why Choose Workora Payroll Management Solutions?</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Join hundreds of businesses who trust us with their payroll operations and focus on what they do best.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <DollarSign className="text-[#d4af62] mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-gray-800">Cost Effective</h4>
                  </div>
                  <p className="text-sm text-gray-600">Save up to 60% on payroll costs</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <Shield className="text-[#d4af62] mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-gray-800">100% Secure</h4>
                  </div>
                  <p className="text-sm text-gray-600">Bank-level security & encryption</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <CheckCircle className="text-[#d4af62] mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-gray-800">Fully Compliant</h4>
                  </div>
                  <p className="text-sm text-gray-600">UAE labor law & MOHRE certified</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <TrendingUp className="text-[#d4af62] mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-gray-800">Expert Support</h4>
                  </div>
                  <p className="text-sm text-gray-600">Dedicated account managers</p>
                </div>
              </div>
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
