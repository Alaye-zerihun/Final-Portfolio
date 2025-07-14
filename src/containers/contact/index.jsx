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
        setStatusMessage('✅ Success! Your message has been delivered.');
        e.target.reset();
        setFocused({ name: false, email: false, message: false });
        setTimeout(() => setStatusMessage(null), 5000);
      })
      .catch(() => {
        setStatusType('error');
        setStatusMessage('❌ Error! Please try again later.');
        setTimeout(() => setStatusMessage(null), 5000);
      });
  };

  return (
    <section id="contact" className={styles.contact} aria-label="Contact Section">
      <PageHeaderContent headerText="Connect With Me" icon={<BsInfoCircleFill size={40} />} />
      <div className={styles.wrapper}>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(-200px)', opacity: 0 }}
          end={{ transform: 'translateX(0px)', opacity: 1 }}
        >
          <div className={styles.formContainer}>
            <h3 className={styles.formHeader}>Let’s Create Something Amazing</h3>
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
                  aria-label="Your Full Name"
                />
                <label className={`${styles.formLabel} ${focused.name ? styles.focused : ''}`}>
                  Your Name
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
                  aria-label="Your Email Address"
                />
                <label className={`${styles.formLabel} ${focused.email ? styles.focused : ''}`}>
                  Your Email
                </label>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className={styles.formTextarea}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  placeholder=" "
                  aria-label="Your Message"
                />
                <label className={`${styles.formLabel} ${focused.message ? styles.focused : ''}`}>
                  Your Message
                </label>
              </div>

              <button type="submit" className={styles.formButton}>
                Send Now
              </button>

              <div className={styles.buttonGroup}>
                <a
                  href="mailto:abinetzerihun0@gmail.com"
                  className={`${styles.formButton} ${styles.altButton}`}
                  aria-label="Email Me Directly"
                >
                  Hire Me Today
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
        
              
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;