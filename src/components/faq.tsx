'use client'
import React, { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What types of appliances do you repair in Bangalore?",
          answer:
            "We specialize in repairing microwaves, washing machines, chimneys, refrigerators, ACs, and water purifiers in Bangalore and surrounding areas.",
        },
        {
          question: "How do I book a service appointment in Marathahalli?",
          answer:
            "You can book a service appointment in Marathahalli by filling out the form on our website or calling us directly.",
        },
        {
          question: "Do you offer same-day service in Whitefield?",
          answer:
            "Yes, we strive to provide same-day service for most repair requests in Whitefield, subject to technician availability.",
        },
        {
          question: "Do you provide a warranty for your repairs in Electronic City?",
          answer:
            "Yes, we provide a limited warranty for most of our repair services in Electronic City. The warranty duration depends on the type of repair and the parts used.",
        },
        {
          question: "What is your service area in Bangalore?",
          answer: (
            <>
              We serve all areas in and around Bangalore including Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, and Sarjapur. Contact us to confirm service availability in your location.{" "}
              <Link href="/location">
              <button className="bg-transparent border-b-4 border-black cursor-pointer"> View all locations</button>
              </Link>
            </>
          ),
        },
        {
          question: "Are your technicians certified in HSR Layout?",
          answer:
            "Yes, all our technicians in HSR Layout are certified, experienced, and trained to handle repairs for all major brands.",
        },
        {
          question: "Do I need to bring my appliance to your service center in Koramangala?",
          answer:
            "No, our technicians will visit your home in Koramangala for most appliance repairs. However, if a repair requires advanced diagnostics, we may request that you bring the appliance to our center.",
        },
        {
          question: "What payment methods do you accept in Indiranagar?",
          answer:
            "We accept cash, UPI, credit/debit cards, and online payments in Indiranagar.",
        },
      ],
    },
    {
      category: "Microwave Oven Repair Services",
      questions: [
        {
          question: "What types of microwave ovens do you repair in JP Nagar?",
          answer:
            "We repair solo, grill, and convection microwave ovens of all major brands, including Samsung, LG, Whirlpool, and more in JP Nagar.",
        },
        {
          question: "My microwave is not heating in BTM Layout. Can you fix it?",
          answer:
            "Yes, our technicians can diagnose and repair heating issues in BTM Layout, which are commonly caused by magnetron or capacitor problems.",
        },
        {
          question: "Why does my microwave make a loud noise while operating in Banashankari?",
          answer:
            "Loud noises in Banashankari may be caused by faulty components like the turntable motor, fan, or magnetron. Our technicians can diagnose and fix the issue.",
        },
        {
          question: "Can you repair older microwave oven models in Hebbal?",
          answer:
            "Yes, we repair older models in Hebbal if the required parts are available. Contact us with your model details for more information.",
        },
        {
          question: "How much does microwave oven repair typically cost in Yelahanka?",
          answer:
            "Repair costs in Yelahanka depend on the type of issue and replacement parts. We provide an upfront estimate after diagnosis.",
        },
        {
          question: "Why does my microwave door not close properly in Jayanagar?",
          answer:
            "This issue in Jayanagar is often caused by damaged hinges, latches, or seals. We can repair or replace these parts as needed.",
        },
        {
          question: "Do you offer microwave oven installation services in Malleshwaram?",
          answer:
            "Yes, we provide installation services for new microwave ovens in Malleshwaram.",
        },
      ],
    },
    {
      category: "Washing Machine Repair  Services",
      questions: [
        {
          question: "What brands of washing machines do you repair?",
          answer:
            "We repair washing machines from brands like LG, Samsung, Bosch, IFB, Whirlpool, and more.",
        },
        {
          question: "Why is my washing machine making a loud noise?",
          answer:
            "A loud noise could be due to issues with the drum, motor, or bearings. Our technicians can inspect and fix the problem efficiently.",
        },
        {
          question: "Why is my washing machine not spinning?",
          answer:
            "This could be due to a malfunctioning motor, drive belt, or control panel. We can identify and resolve the issue.",
        },
        {
          question: "Do you repair semi-automatic washing machines?",
          answer:
            "Yes, we repair both semi-automatic and fully automatic washing machines.",
        },
        {
          question: "Why does my washing machine leak water?",
          answer:
            "Leaks may result from damaged hoses, seals, or overloading. Our technicians will inspect and fix the problem.",
        },
        {
          question: "Can you replace washing machine drums?",
          answer:
            "Yes, we can replace damaged drums for most major brands.",
        },
        {
          question: "Do you offer washing machine installation services?",
          answer:
            "Yes, we provide installation services for new washing machines.",
        },
      ],
    },
    {
      category: "Refrigerator Repair  Services",
      questions: [
        {
          question: "Why is my refrigerator not cooling properly?",
          answer:
            "Common reasons include issues with the compressor, thermostat, or evaporator coil. We’ll inspect and fix the problem.",
        },
        {
          question: "Do you repair frost-free refrigerators?",
          answer:
            "Yes, we repair frost-free, single-door, and double-door refrigerators.",
        },
        {
          question: "Why is my refrigerator making a buzzing noise?",
          answer:
            "This could be due to a failing compressor, fan, or condenser. Contact us for a diagnosis.",
        },
        {
          question: "What should I do if my refrigerator leaks water?",
          answer:
            "Water leakage might indicate clogged drain lines or a faulty gasket. Our experts can resolve it quickly.",
        },
        {
          question: "Do you offer refrigerator installation services?",
          answer:
            "Yes, we provide installation services for new refrigerators.",
        },
      ],
    },
    {
      category: "Chimney Repair  Services",
      questions: [
        {
          question: "Why is my chimney not extracting smoke properly?",
          answer:
            "The issue could be caused by a blocked filter, a faulty motor, or improper installation.",
        },
        {
          question: "Do you clean chimney filters?",
          answer:
            "Yes, we offer chimney filter cleaning services for both baffle and mesh filters.",
        },
        {
          question: "How often should I service my chimney?",
          answer:
            "Chimneys should be serviced every 6–12 months, depending on usage, to maintain optimal performance.",
        },
        {
          question: "Can you repair chimney motors?",
          answer:
            "Yes, we repair or replace faulty motors in kitchen chimneys.",
        },
        {
          question: "Do you offer chimney installation services?",
          answer:
            "Yes, we provide installation services for new chimneys.",
        },
      ],
    },
    {
      category: "AC Repair  Services",
      questions: [
        {
          question: "Why is my AC not cooling properly?",
          answer:
            "This could be due to issues with the compressor, refrigerant levels, or a clogged filter. We’ll inspect and fix the problem.",
        },
        {
          question: "Do you repair all types of ACs?",
          answer:
            "Yes, we repair window, split, and central ACs of all major brands.",
        },
        {
          question: "Why is my AC making a loud noise?",
          answer:
            "Loud noises may be caused by issues with the fan, motor, or compressor. Our technicians can diagnose and fix the issue.",
        },
        {
          question: "Do you offer AC installation services?",
          answer:
            "Yes, we provide installation services for new AC units.",
        },
      ],
    },
    {
      category: "Water Purifier Repair  Services",
      questions: [
        {
          question: "Why is my water purifier not dispensing water?",
          answer:
            "This could be due to a clogged filter, low water pressure, or a faulty pump. We’ll inspect and fix the problem.",
        },
        {
          question: "Do you repair all types of water purifiers?",
          answer:
            "Yes, we repair RO, UV, and UF water purifiers of all major brands.",
        },
        {
          question: "Why is my water purifier making a noise?",
          answer:
            "Noises may be caused by issues with the pump or filters. Our technicians can diagnose and fix the issue.",
        },
        {
          question: "Do you offer water purifier installation services?",
          answer:
            "Yes, we provide installation services for new water purifiers.",
        },
      ],
    },
    {
      category: "Pricing and Scheduling",
      questions: [
        {
          question: "Is there a service charge for diagnostics?",
          answer:
            "Yes, we charge a nominal fee for diagnostics, which will be adjusted in the final bill if you proceed with the repair.",
        },
        {
          question: "What is the average cost of repairs?",
          answer:
            "Repair costs depend on the appliance and the issue. We provide detailed estimates before starting the repair.",
        },
        {
          question: "How long does a typical repair take?",
          answer:
            "Most repairs are completed within 1–2 hours. Complex issues may require additional time.",
        },
        {
          question: "Can I reschedule my service appointment?",
          answer:
            "Yes, you can reschedule by contacting us at least 24 hours in advance.",
        },
      ],
    },
    {
      category: "Service Guarantees",
      questions: [
        {
          question: "What happens if the issue recurs after the repair?",
          answer:
            "If the problem persists within the warranty period, we’ll fix it free of charge.",
        },
        {
          question: "Do you use genuine spare parts?",
          answer:
            "Yes, we use only original or high-quality spare parts for all repairs.",
        },
        {
          question: "Do you offer annual maintenance contracts?",
          answer:
            "Yes, we provide AMC services for refrigerators, washing machines, geysers, and chimneys.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Top Appliance Repair Services in Bangalore | Urban Service Company</title>
        <meta name="description" content="Get the best microwave, AC, washing machine, and other appliance repair services in Bangalore and surrounding areas. Contact us for fast and reliable service." />
        <meta name="keywords" content="microwave repair, AC repair, washing machine repair, appliance repair, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto p-6 md:p-8" id="faqs">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900 font-poppins">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-6">
            {faqs.map((faqCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <h2 className="text-xl font-semibold font-poppins text-gray-900">{faqCategory.category}</h2>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      expandedCategory === categoryIndex ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedCategory === categoryIndex && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 space-y-4">
                        {faqCategory.questions.map((faq, idx) => (
                          <div
                            key={idx}
                            className="border-b border-gray-100 last:border-0"
                          >
                            <button
                              onClick={() => setExpandedQuestion(expandedQuestion === `${categoryIndex}-${idx}` ? null : `${categoryIndex}-${idx}`)}
                              className="w-full py-4 text-left font-roboto text-gray-900 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                                <svg
                                  className={`w-5 h-5 transform transition-transform duration-200 ${
                                    expandedQuestion === `${categoryIndex}-${idx}` ? 'rotate-180' : ''
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </button>
                            
                            <AnimatePresence>
                              {expandedQuestion === `${categoryIndex}-${idx}` && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pb-4"
                                >
                                  <p className="text-gray-700 font-roboto">{faq.answer}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
