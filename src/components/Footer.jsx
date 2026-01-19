import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Footer.module.css';
import {
  footerServices,
  footerPricing,
  footerCompany,
  contactInfo,
  socialLinks,
} from '../utils/constants';

const Footer = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  /* ================= EMAILJS INIT ================= */
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user_name, user_phone, user_email } = formData;

    if (!user_name || !user_phone || !user_email) {
      setMessageType('error');
      setMessage('Please fill all fields');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData
      )
      .then(() => {
        setMessageType('success');
        setMessage('You registered successfully ✓');
        setFormData({
          user_name: '',
          user_phone: '',
          user_email: '',
        });
        setTimeout(() => setMessage(''), 3000);
      })
      .catch((error) => {
        console.error(error);
        setMessageType('error');
        setMessage('Something went wrong!');
      });
  };

  return (
    <footer className={`${styles.footer} section`} id="footer">
      <div className={`${styles.footerContainer} container grid`}>
        {/* Contact Section */}
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src="/assets/img/logo-nav.png" alt="MFZ Gym Logo" />
            <div className={styles.footerBrand}>
              <span className={styles.footerBrandMain}>MFZ</span>
              <span className={styles.footerBrandSub}>My Fitness Zone</span>
            </div>
          </div>

          <p className={styles.footerDescription}>
            Subscribe for company updates below.
          </p>

          <form className={styles.footerForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className={styles.footerInput}
              value={formData.user_name}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Enter your phone number"
              className={styles.footerInput}
              value={formData.user_phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className={styles.footerInput}
              value={formData.user_email}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className={`button ${styles.footerButton}`}>
              Subscribe
            </button>
          </form>

          <p
            className={styles.footerMessage}
            style={{
              color:
                messageType === 'error'
                  ? 'hsl(0, 80%, 64%)'
                  : '#00b341',
            }}
          >
            {message}
          </p>
        </div>

        {/* Services */}
        <div className={styles.footerContent}>
          <h3 className={styles.footerTitle}>SERVICES</h3>
          <ul className={styles.footerLinks}>
            {footerServices.map((service) => (
              <li key={service.id}>
                <a
                  href="#"
                  className={styles.footerLink}
                  onClick={(e) => e.preventDefault()}
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className={styles.footerContent}>
          <h3 className={styles.footerTitle}>PRICING</h3>
          <ul className={styles.footerLinks}>
            {footerPricing.map((plan) => (
              <li key={plan.id}>
                <a
                  href="#"
                  className={styles.footerLink}
                  onClick={(e) => e.preventDefault()}
                >
                  {plan.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className={styles.footerContent}>
          <h3 className={styles.footerTitle}>COMPANY</h3>
          <ul className={styles.footerLinks}>
            {footerCompany.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className={styles.footerLink}
                  onClick={(e) => e.preventDefault()}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className={styles.footerContent}>
          <h3 className={styles.footerTitle}>FOLLOW US</h3>

          <div className={styles.footerContactMini}>
            <p className={styles.footerContactLine}>
              <i className="ri-phone-fill"></i>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                {contactInfo.phone}
              </a>
            </p>
            <p className={styles.footerContactLine}>
              <i className="ri-map-pin-2-fill"></i>
              {contactInfo.address}
            </p>
          </div>

          <ul className={styles.footerSocial}>
            <li>
              <a
                href={socialLinks.whatsapp}
                className={styles.footerSocialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-whatsapp-fill"></i>
              </a>
            </li>
            <li>
              <a
                href={socialLinks.instagram}
                className={styles.footerSocialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a
                href={socialLinks.twitter}
                className={styles.footerSocialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerCopy}>
        <p className={styles.footerCopyLink}>
          © 2026 <strong>MFZ Gym</strong> — Built with Passion & Strength.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
