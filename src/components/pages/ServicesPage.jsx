import React from 'react';
import { MicroscopeIcon, Wrench, GraduationCap, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.tsx";
import { Button } from "../ui/button.tsx";

const ServicesPage = () => {
  const services = [
    {
      icon: <MicroscopeIcon className="w-12 h-12 text-cyan-600" />,
      title: "Material Analysis",
      description: "Advanced characterization and synthesis solutions",
      details: [
        "Two/Four Probe System Analysis",
        "GUI Interfaced Temperature Control",
        "Precision Equipment Development"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12 text-cyan-600" />,
      title: "Instrument Development",
      description: "Custom research equipment solutions",
      details: [
        "Probe Stations Development",
        "High-Pressure Autoclave Systems",
        "LED Light Source Solutions"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-cyan-600" />,
      title: "Technical Support",
      description: "Comprehensive support and training",
      details: [
        "24/7 Technical Assistance",
        "Equipment Training",
        "Software Integration Support"
      ]
    }
  ];

  const products = [
    {
      title: "Two Probe System",
      image: "/photos/Products_images/WhatsApp Image 2024-12-01 at 12.34.54 PM (4).jpeg",
      features: [
        "Manually controlled two/four probes",
        "Tungsten probes with tip diameters 15-50 microns",
        "GUI interfaced temperature controller (RT-350°C)"
      ],
      description: {
        title: "Optoelectronic Probes system with internal probes",
        details: [
          "Manually controlled two probes",
          "Tungsten probes with tip diameters ranging from 15 to 50 microns",
          "GUI interfaced temperature controller, range RT-350 ˚C"
        ]
      }
    },
    {
      title: "Hybrid Optoelectronic Probe Station",
      image: "/photos/Products_images/image.png",
      features: [
        "Two Internal controlled tungsten electrodes for precise measurements",
        "Back contact arrangement for solar cell stability testing",
        "Vacuum compatible with gas purge control facility",
        "Dual-stage temperature control with high accuracy"
      ],
      description: {
        title: "Hybrid Optoelectronic Probe Station",
        details: [
          "Back contact arrangement optimized for long-term stability measurement of solar cells",
          "Two Internal controlled tungsten electrodes for making precise electrical contacts",
          "3 pixels can be analyzed simultaneously for efficient testing",
          "Low resistance SMU connection port for accurate measurements",
          "Dual-stage temperature control system:",
          "- Stage 1: -30°C to 150°C with GUI interfaced controller (±0.5°C accuracy)",
          "- Stage 2: RT to 350°C with GUI interfaced controller (±0.5°C accuracy)",
          "Professional-grade PT 100 sensor for precise temperature monitoring",
          "Vacuum compatible design for controlled environment testing",
          "Integrated gas purge/control facility for atmosphere management",
          "Port for vacuum and gas purge with easy access",
          "Complete system for optoelectronic device characterization and research"
        ]
      }
    },
    {
      title: "Four Probe Station with Internal Probes",
      image: "/photos/Products_images/WhatsApp Image 2024-12-01 at 12.34.55 PM.jpeg", 
      features: [
        "Octagonal vacuum chamber design",
        "Four internal precision probes for measurements",
        "Dual temperature range attachments",
        "Vacuum compatible with gas purge facility"
      ],
      description: {
        title: "Four Probe Station with Internal Probes",
        details: [
          "Precision-engineered octagonal chamber design for optimal access and control",
          "High-quality quartz window for clear sample visualization",
          "Four internal probes for accurate electrical measurements",
          "Full vacuum compatibility for controlled environment testing",
          "Integrated gas purge facility for atmosphere management",
          "Customized electrical contacts for versatile testing capabilities",
          "Dual temperature control attachments:",
          "- Low temperature: -30°C to 120°C range",
          "- High temperature: Room temperature to 400°C range",
          "Designed for advanced semiconductor and materials characterization",
          "Professional-grade construction for research laboratory use",
          "Integrated controls for precise measurement conditions"
        ]
      }
     },
    {
      title: "Micro Positional Four Probe Station",
      image: "/photos/Products_images/WhatsApp Image 2024-12-01 at 12.34.54 PM (2).jpeg",
      features: [
        "Four External controlled tungsten electrodes",
        "Vacuum compatible",
        "Gas purge/control facility"
      ],
      description: {
        title: "Micro positional Four Probe Station",
        details: [
          "Four External controlled tungsten electrodes for making electrical contacts",
          "Vacuum compatible",
          "Gas purge/control facility",
          "Temperature range: -30°C to 120°C (Stage 1)",
          "GUI interfaced temperature controller with ±0.5°C accuracy",
          "PT 100 sensor for precise measurements",
          "X, Y & Z direction control via external mechanism",
          "Micro Positional Control chamber with temperature-controlled stability setup",
          "Low resistance SMU connection port",
          "Port for vacuum and gas purge"
        ]
      }
    },
    {
      title: "Multi-Wavelength LED Light Source",
      image: "/photos/Products_images/WhatsApp Image 2024-12-01 at 12.34.55 PM (2).jpeg",
      features: [
        "1000Watt/m² White LED source",
        "Nine LEDs arrangement",
        "Control features"
      ],
      description: {
        title: "Multi-Wavelength LED Light Source",
        details: [
          "1000Watt/m² White LED source calibrated with standard AAA solar simulator",
          "A total of nine LEDs (from blue to red range) arranged inside the barrel",
          "Back contact sample stage positioned below the LED window",
          "Control the position of the LED on the sample by selector switch",
          "Control the intensity of individual LEDs over a sample",
          "Anodized Aluminum casing",
          "Gas purge facility (optional)",
          "Thermal environmental control (optional)"
        ]
      }
    },
    {
      title: "High-Pressure Reactor",
      image: "/photos/Products_images/WhatsApp Image 2024-12-01 at 12.34.54 PM (3).jpeg",
      features: [
        "50 ml to 1000 ml capacity",
        "Pressure gauge included",
        "Temperature control"
      ],
      description: {
        title: "High-Pressure reactor /autoclave",
        details: [
          "50 ml to 1000 ml High-pressure autoclave",
          "Pressure gauge",
          "Gas or liquid (reagent, pH control, etc.) purge",
          "Compatible up to 200°C temperature",
          "Material of Construction: Head and body SS316",
          "Design pressure: 100 bar (Continuous safe working pressure being 90% of the design pressure)",
          "Magnetic stirring from the bottom",
          "PTFE gasket",
          "Head fitting includes: Analog Pressure gauge with vacuum protection 1-100bar, Two safety rupture discs for double protection, Gas inlet valve, Liquid sample valve, Vent needle valve",
          "4.3-inch LCD control Panel with PID Temperature controller"
        ]
      }
    },

    {
      title: "Catalytic Reactor Station",
      image: "/photos/Products_images/WhatsApp Image 2024-12-01 at 12.34.54 PM (1).jpeg",
      features: [
        "PID-controlled temperature and RPM system",
        "LED control with variable wavelength options",
        "Multiple sample capacity with UV illumination",
        "Water cooling jacket for exothermic reactions"
      ],
      description: {
        title: "Catalytic Reactor Station",
        details: [
          "Hot Plate Specifications:",
          "- Area: 150mm X 150mm heating surface",
          "- Temperature Range: RT to 250°C with PID control",
          "- RPM Range: 1200 to 1500 with PID control",
          "Reaction Cavity Features:",
          "- Accommodates 12 test tubes of 5 ml capacity",
          "- Individual 3-watt UV LED illumination for test tubes",
          "- Space for up to 100 ml beaker with 30-watt UV illumination",
          "- Customizable wavelength options available",
          "- Integrated water cooling jacket for exothermic reaction control",
          "LED Configuration Options:",
          "- Single wavelength LEDs available",
          "- Multi-wavelength LEDs with customizable settings",
          "Control Features:",
          "- PID-controlled temperature system",
          "- PID-controlled RPM for precise mixing",
          "- Variable DC control of LED intensity",
          "- Individual light intensity and wavelength control (Optional)",
          "Designed for efficient catalytic reaction research and testing"
        ]
      }
     },
  ];

  const clients = [
    { name: "PDEU", image: "/photos/clients_logos/PDEU_logo.png" },
    { name: "IISER Kolkata", image: "/photos/clients_logos/IISER_Kolkata_logo.jpg" },
    { name: "Central University of Gujarat", image: "/photos/clients_logos/Central_university_Gujarat_logo.jpg" },
    { name: "University of Hyderabad", image: "/photos/clients_logos/University_of_Hyderabad_logo.jpeg" },
    { name: "PAN", image: "/photos/clients_logos/PAN_logo.png" },
    { name: "Shiv Nadar University", image: "/photos/clients_logos/shiv_nadar_university_logo.jpeg" },
    { name: "IIT Bombay", image: "/photos/clients_logos/IIT_Bombay_logo.jpeg" },
    { name: "IIT Delhi", image: "/photos/clients_logos/IIT_Delhi_logo.jpg" },
    { name: "Panjab University", image: "/photos/clients_logos/Panjab_University_logo.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Services
          </h1>
          <p className="text-xl text-center text-cyan-100 max-w-3xl mx-auto">
            Advanced research instrumentation and development solutions
          </p>
        </div>
      </div>

      {/* Services Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center mb-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-cyan-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <CardTitle className="text-xl text-center my-4">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-cyan-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl mb-4">
                          {product.description.title}
                        </DialogTitle>
                        <DialogDescription>
                          <ul className="space-y-2">
                            {product.description.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-cyan-600 mr-2">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-4 mb-4 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={client.image}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h4 className="font-medium text-center text-gray-800">
                  {client.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;