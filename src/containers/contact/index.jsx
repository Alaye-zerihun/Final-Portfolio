// Contact.jsx - Scientifically optimized and cleaned

import React, { useRef, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import { FaHandshake, FaUsers } from "react-icons/fa";
import "./styles.scss";

const Contact = () => {
  const form = useRef();
  const [focused, setFocused] = useState({ name: false, email: false, message: false });

  const handleFocus = (field) => setFocused({ ...focused, [field]: true });
  const handleBlur = (field) => setFocused({ ...focused, [field]: false });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zj0qnff",
        "template_cyqz1lk",
        form.current,
        "kF2-MOWEg0fKTFuJH"
      )
      .then(
        (result) => {
          alert("Your message has been sent!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="My Contact" icon={<BsInfoCircleFill size={40} />} />

      <div className="contact__wrapper">
        <Animate play duration={1} delay={0} start={{ transform: "translateX(-200px)" }} end={{ transform: "translateX(0px)" }}>
          <div className="contact__wrapper__form-container">
            <h3 className="contact__wrapper__form-container__header-text">Let's Talk</h3>
            <div className="contact__wrapper__form-container__formcontrolswrapper">
              <form ref={form} onSubmit={sendEmail}>
                <div className="inputName">
                  <input type="text" name="user_name" required onFocus={() => handleFocus("name")} onBlur={() => handleBlur("name")} />
                  <label className={focused.name ? "focused" : ""}>Name:</label>
                </div>

                <div className="inputEmail">
                  <input type="email" name="user_email" required onFocus={() => handleFocus("email")} onBlur={() => handleBlur("email")} />
                  <label className={focused.email ? "focused" : ""}>Email:</label>
                </div>

                <div className="inputDescription">
                  <textarea name="message" rows="5" required onFocus={() => handleFocus("message")} onBlur={() => handleBlur("message")} />
                  <label className={focused.message ? "focused" : ""}>Message</label>
                </div>

                <button type="submit" className="button1">Send</button>
              </form>
            </div>
          </div>
        </Animate>

        <div className="contact__text-container">
          <div className="contact__text">
            <div className="intro-line">
              <FaHandshake className="cooperation-icon" />
              <h1>Hi!</h1>
            </div>
            <p>
              As a passionate developer, I'm excited about the opportunity to collaborate with your team and community. With my skills, I'm committed to bringing innovative solutions to the table.
            </p>
            <p>
              <FaUsers className="cooperation-icon" /> Let's work together to create something impactful and beneficial for our users and community. Reach out today, and let's start building together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
