import "./ServicesSection.scss";
import { FaWhatsapp } from "react-icons/fa";
import service1 from "../../../assets/Services/image-1.png";
import service2 from "../../../assets/Services/image-2.png";
import service3 from "../../../assets/Services/image-3.png";
import service4 from "../../../assets/Services/image-4.png";
import service5 from "../../../assets/Services/image-5.png";
import service6 from "../../../assets/Services/image-6.png";
import service7 from "../../../assets/Services/image-7.png";
import service8 from "../../../assets/Services/image-8.png";
import service9 from "../../../assets/Services/image-9.png";
import service10 from "../../../assets/Services/image-10.png";

const services = [
  {
    id: 1,
    image: service1,
    title: "Headache & Migraine",
    description: "Strong headaches affecting routine"
  },
  {
    id: 2,
    image: service2,
    title: "Nausea & Vomiting",
    description: "Feeling sick and vomiting"
  },
  {
    id: 3,
    image: service3,
    title: "Fever & Flu",
    description: "Fever, cold and weakness"
  },
  {
    id: 4,
    image: service4,
    title: "Food Poisoning & Diarrhea",
    description: "Loose motions and stomach pain"
  },
  {
    id: 5,
    image: service5,
    title: "Ear Pain & Wax",
    description: "Ear discomfort or blockage"
  },
  {
    id: 6,
    image: service6,
    title: "Period Pain & PMS",
    description: "Monthly cramps and pain"
  },
  {
    id: 7,
    image: service7,
    title: "Cough & Congestion",
    description: "Cough, cold and chest tightness"
  },
  {
    id: 8,
    image: service8,
    title: "UTI Symptoms",
    description: "Burning urine and lower pain"
  },
  {
    id: 9,
    image: service9,
    title: "Rash & Allergies",
    description: "Itchy skin and redness"
  },
  {
    id: 10,
    image: service10,
    title: "Kids Fever, Vomiting & Rashes",
    description: "Common sickness in children"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-wrapper">
        <h1 className="section-title">Medical Team, Delivered <br/>to Your Doorstep</h1>
        <p className="section-description">
          From diagnosis and lab tests to instant medication—our fully equipped mobile team handles everything at your bedside, so you can start recovering immediately.
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="whatsapp-booking-wrapper">
          <a href="https://wa.me/971987654321" className="btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="btn-icon" />
            Book instantly via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
