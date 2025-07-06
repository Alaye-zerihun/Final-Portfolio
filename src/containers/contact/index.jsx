import React, { useRef, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import { FaHandshake, FaUsers } from "react-icons/fa";
import cvPDF from "../../containers/home/CV/My-Profile.pdf";
import "./styles.css";

const Contact = () => {
  const form = useRef();
  const [focused, setFocused] = useState({ name: false, email: false, message: false });
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  const handleFocus = (field) => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field) => setFocused((prev) => ({ ...prev, [field]: false }));

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_zj0qnff", "template_cyqz1lk", form.current, "kF2-MOWEg0fKTFuJH")
      .then(() => {
        setStatusType("success");
        setStatusMessage("Thank you! Your message has been successfully delivered.");
        e.target.reset();
        setFocused({ name: false, email: false, message: false });
        setTimeout(() => setStatusMessage(null), 5000);
      })
      .catch(() => {
        setStatusType("error");
        setStatusMessage("Apologies, your message could not be sent. Please try again later.");
        setTimeout(() => setStatusMessage(null), 5000);
      });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPDF;
    link.setAttribute("download", "My-Profile.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="contact" aria-label="Contact Section">
      <PageHeaderContent headerText="Get in Touch" icon={<BsInfoCircleFill size={40} />} />

      <div className="contact__wrapper">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__wrapper__form-container">
            <h3 className="contact__wrapper__form-container__header-text">Let's Collaborate</h3>

            <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  required
                  className="form-input"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  placeholder=" "
                  aria-label="Full Name"
                />
                <label className={`form-label ${focused.name ? "focused" : ""}`}>Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  required
                  className="form-input"
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  placeholder=" "
                  aria-label="Email Address"
                />
                <label className={`form-label ${focused.email ? "focused" : ""}`}>Email</label>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="form-textarea"
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  placeholder=" "
                  aria-label="Message"
                />
                <label className={`form-label ${focused.message ? "focused" : ""}`}>Message</label>
              </div>

              <button type="submit" className="form-button" aria-live="polite">
                Send Message
              </button>

              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <button
                  type="button"
                  onClick={handleDownload}
                  className="form-button alt-button"
                  aria-label="Download Resume"
                >
                  Download CV
                </button>
                <a
                  href="mailto:abinetzerihun0@gmail.com"
                  className="form-button alt-button"
                  aria-label="Contact via Email"
                >
                  Hire Me
                </a>
              </div>

              {statusMessage && (
                <div className={`form-status-message ${statusType}`}>{statusMessage}</div>
              )}
            </form>
          </div>
        </Animate>

        <div className="contact__text-container" aria-live="polite">
          <div className="contact__text">
            <div className="intro-line">
              <FaHandshake className="cooperation-icon" aria-hidden="true" />
              <h1 tabIndex={-1}>Hello!</h1>
            </div>
            <p>
              As a passionate developer, I’m eager to collaborate with forward-thinking teams to solve real-world challenges through innovative software solutions. I value clear communication, continuous improvement, and impactful design.
            </p>
            <p>
              <FaUsers className="cooperation-icon" aria-hidden="true" />
              Let’s create outstanding digital experiences together. I’m just a message away—feel free to connect anytime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
