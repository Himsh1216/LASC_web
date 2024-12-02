import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, X } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const [activeAboutFaq, setActiveAboutFaq] = useState(null);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const faqs = [
    {
      question: "What kind of instruments do you manufacture?",
      answer: "We manufacture sophisticated instrumentation for characterization and synthesis of materials, including probe stations, autoclaves, and custom testing equipment."
    },
    {
      question: "Do you provide software with your instruments?",
      answer: "Yes, we provide customizable software capabilities with GUI interfaces for our instruments, especially for temperature control and data acquisition."
    },
    {
      question: "What is your temperature control range?",
      answer: "Our instruments typically operate from -30°C to 350°C depending on the model, with accuracy of +/-0.5°C using PT 100 sensors."
    }
  ];

  const features = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      title: "Quality Assured",
      description: "High-precision instruments with rigorous testing"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      title: "Made in India",
      description: "Supporting local innovation and manufacturing"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      title: "Expert Support",
      description: "24/7 technical assistance and consultation"
    }
  ];

  const AboutModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">About LASC</h2>
          <button 
            onClick={() => setShowAboutModal(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Laboratory of Advanced Synthesis and Characterization (LASC) is an Indian tech company
            specializing in the development of sophisticated instrumentation for characterization
            and synthesis of materials.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Our Products:</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Two/Four Probe Stations</li>
              <li>Micro Positional Probe Stations</li>
              <li>Optoelectronic Probe Stations</li>
              <li>Sample Holders</li>
              <li>High-pressure Reactors / Autoclaves</li>
              <li>Multi-wavelength LED Light Sources</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Key Features:</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Temperature range from -30°C to 350°C</li>
              <li>GUI interfaced temperature controllers</li>
              <li>Vacuum compatible systems</li>
              <li>Gas purge/control facilities</li>
              <li>Customizable software capabilities</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-gray-600">
              Contact Information:<br />
              Email: info.lasc123@gmail.com<br />
              Phone: +91 7862993485<br />
              Address: IIC PDEU, Near UG Boys Hostel, Raisan-382007, Gandhinagar
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {showAboutModal && <AboutModal />}
      
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Laboratory of Advanced Synthesis and Characterization
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Advancing research through precision instrumentation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-colors"
              >
                Get Started
              </button>
              <button 
                onClick={() => setShowAboutModal(true)}
                className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setActiveAboutFaq(activeAboutFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transform transition-transform ${
                    activeAboutFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeAboutFaq === index && (
                  <div className="px-6 py-4 border-t bg-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;