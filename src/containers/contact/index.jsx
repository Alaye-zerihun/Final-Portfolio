
import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaHandshake, FaUsers } from 'react-icons/fa';
import styles from './Contact.module.css';
import PageHeaderContent from '../../components/pageHeaderContent';

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
      .sendForm('service_zj0qnff', 'template_cyqz1lk', form.current, 'kF2-MOWEg0fKTFuJH')
      .then(() => {
        setStatusType('success');
        setStatusMessage('Thank you! Your message has been successfully delivered.');
        e.target.reset();
        setFocused({ name: false, email: false, message: false });
        setTimeout(() => setStatusMessage(null), 5000);
      })
      .catch(() => {
        setStatusType('error');
        setStatusMessage('Apologies, your message could not be sent. Please try again later.');
        setTimeout(() => setStatusMessage(null), 5000);
      });
  };

  return (
    <section id="contact" className={styles.contact} aria-label="Contact Section">
      <PageHeaderContent headerText="Get in Touch" icon={<BsInfoCircleFill size={40} />} />
      <div className={styles.wrapper}>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(-200px)', opacity: 0 }}
          end={{ transform: 'translateX(0px)', opacity: 1 }}
        >
          <div className={styles.formContainer}>
            <h3 className={styles.formHeader}>Let's Collaborate</h3>
            <form ref={form} onSubmit={sendEmail} className={styles.form} noValidate>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="user_name"
                  required
                  className={styles.formInput}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  placeholder=" "
                  aria-label="Full Name"
                />
                <label className={`${styles.formLabel} ${focused.name ? styles.focused : ''}`}>
                  Name
                </label>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="user_email"
                  required
                  className={styles.formInput}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  placeholder=" "
                  aria-label="Email Address"
                />
                <label className={`${styles.formLabel} ${focused.email ? styles.focused : ''}`}>
                  Email
                </label>
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className={styles.formTextarea}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  placeholder=" "
                  aria-label="Message"
                />
                <label className={`${styles.formLabel} ${focused.message ? styles.focused : ''}`}>
                  Message
                </label>
              </div>
              <button type="submit" className={styles.formButton} aria-live="polite">
                Send Message
              </button>
              <div className={styles.buttonGroup}>
                <a
                  href="mailto:abinetzerihun0@gmail.com"
                  className={`${styles.formButton} ${styles.altButton}`}
                  aria-label="Contact via Email"
                >
                  Hire Me
                </a>
              </div>
              {statusMessage && (
                <div className={`${styles.formStatusMessage} ${styles[statusType]}`}>
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0.2}
          start={{ transform: 'translateX(200px)', opacity: 0 }}
          end={{ transform: 'translateX(0px)', opacity: 1 }}
        >
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <div className={styles.introLine}>
                <FaHandshake className={styles.cooperationIcon} aria-hidden="true" />
                <h1 tabIndex={-1}>Hello!</h1>
              </div>
              <p>
                As a passionate developer, I’m eager to collaborate with forward-thinking teams to
                solve real-world challenges through innovative software solutions. I value clear
                communication, continuous improvement, and impactful design.
              </p>
              <p>
                <FaUsers className={styles.cooperationIcon} aria-hidden="true" />
                Let’s create outstanding digital experiences together. I’m just a message
                away—feel free to connect anytime!
              </p>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
