import { useState } from "react";
import "./FAQSection.scss";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqs = [
  {
    id: 1,
    question: "How long does it take for the doctor to arrive?",
    answer: "Arrival is typically within 30–60 minutes, based on location and availability."
  },
  {
    id: 2,
    question: "What is included in an EZDoc home visit?",
    answer: "Medical evaluation, vitals check, examination, and a treatment plan tailored to your condition."
  },
  {
    id: 3,
    question: "Are doctors prepared to treat patients at home?",
    answer: "Yes. Doctors come with the necessary tools for common medical care at home."
  },
  {
    id: 4,
    question: "Can I book a visit at any time?",
    answer: "Yes. EZDoc operates 24/7."
  },
  {
    id: 5,
    question: "Which emirates do you cover?",
    answer: "Services are available across Dubai, Abu Dhabi, Sharjah, and Ajman."
  },
  {
    id: 6,
    question: "How do you keep visits clean and safe?",
    answer: "Strict hygiene and infection-control practices are followed at all times."
  },
  {
    id: 7,
    question: "Is communication available in multiple languages?",
    answer: "Yes. Our team can communicate in several languages."
  },
  {
    id: 8,
    question: "Are extra medical services available if required?",
    answer: "Yes. Doctors may suggest lab tests, IV therapy, ECG, or other services during the visit."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-container">
      <div className="faq-wrapper">
        <h1 className="section-title">Got Questions? We've Got Answers!</h1>
        <p className="faq-description">
          Find answers to common questions about City Doctor's home medical services. 
          If you have additional questions, feel free to contact us directly.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? (
                    <IoChevronUp className="chevron-icon" />
                  ) : (
                    <IoChevronDown className="chevron-icon" />
                  )}
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

