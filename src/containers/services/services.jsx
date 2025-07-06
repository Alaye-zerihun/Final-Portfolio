import React, { useState, useEffect } from "react";
import "./services.css";
import {
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
  FaLightbulb,
  FaCode,
  FaTools
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const servicesData = [
  {
    id: 1,
    icon: <MdWeb className="services__icon" aria-hidden="true" />,
    title: "Full Stack Web Developer",
    description:
      "Craft seamless web experiences blending front-end aesthetics with back-end functionality, ensuring robust development and user satisfaction.",
    details: [
      "Design and develop dynamic and responsive web applications.",
      "Implement complex functionalities on both the front-end and back-end.",
      "Utilize frameworks like ReactJS, NodeJS, AngularJS, HTML, CSS, and PHP.",
      "Ensure scalability and security of web projects.",
      "Provide ongoing maintenance and support.",
      "Collaborate with teams to deliver high-quality solutions."
    ]
  },
  {
    id: 2,
    icon: <FaCode className="services__icon" aria-hidden="true" />,
    title: "Software Engineer",
    description:
      "Engineer elegant and efficient software solutions across platforms, driving innovation through meticulous testing and best practices.",
    details: [
      "Build software using C++, Java, and Python.",
      "Develop mobile apps using Flutter/Dart.",
      "Use industry-standard tools for high-fidelity designs.",
      "Architect scalable and robust software systems.",
      "Conduct thorough testing and debugging.",
      "Stay updated with software engineering trends.",
      "Collaborate with stakeholders on technical goals."
    ]
  },
  {
    id: 3,
    icon: <FaLightbulb className="services__icon" aria-hidden="true" />,
    title: "ICT Consultant",
    description:
      "Offer strategic guidance on emerging technologies and empower digital transformation for competitive advantage.",
    details: [
      "Advise on leveraging AI, Blockchain, and other innovations.",
      "Assess business feasibility and technical alignment.",
      "Plan tech integration strategies and roadmaps.",
      "Evaluate tools and platforms for client needs.",
      "Deliver training and support for new systems.",
      "Research industry and competitor trends."
    ]
  }
];

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const modalContent = document.querySelector(".services__modal-content");
      if (activeModal && modalContent && !modalContent.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeModal]);

  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <h2 className="section__title" id="services-title">Services</h2>
      <span className="section__subtitle">What I do</span>

      <div className="services-icons-container" aria-hidden="true">
        <FaTools />
      </div>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <article
            key={service.id}
            className="services__content"
            tabIndex={0}
            aria-describedby={`service-desc-${service.id}`}
            aria-haspopup="dialog"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActiveModal(service.id);
            }}
          >
            <div>
              {service.icon}
              <h3 className="services__title">{service.title}</h3>
            </div>

            <button
              className="services__button"
              onClick={() => setActiveModal(service.id)}
              aria-expanded={activeModal === service.id}
              aria-controls={`modal-${service.id}`}
            >
              View More
              <FaArrowRight className="services__button-icon" />
            </button>

            {activeModal === service.id && (
              <div
                id={`modal-${service.id}`}
                className="services__modal active-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby={`modal-title-${service.id}`}
                aria-describedby={`modal-desc-${service.id}`}
              >
                <div className="services__modal-content">
                  <button
                    className="services__modal-close"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    <FaTimes />
                  </button>
                  <h3 className="services__modal-title" id={`modal-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p
                    className="services__modal-description"
                    id={`modal-desc-${service.id}`}
                  >
                    {service.description}
                  </p>
                  <ul className="services__modal-services grid">
                    {service.details.map((item, idx) => (
                      <li
                        className="services__modal-service"
                        key={idx}
                      >
                        <FaCheckCircle className="services__modal-icon" aria-hidden="true" />
                        <p className="services__modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
