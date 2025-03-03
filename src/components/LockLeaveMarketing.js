import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.jpg";
import emailIcon from "./email.png";
import callIcon from "./call.png";
import whatsappIcon from "./whatsapp.png";
import luggageGif from "./luggage.gif";
import secureImg from "./secure.png";
import affordableImg from "./affordable.png";
import locationImg from "./location.png";
import supportImg from "./support.png";
import "animate.css";
import "./LockLeaveMarketing.css";

export default function LockLeaveMarketing() {
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("loaded");
    return () => document.body.classList.remove("loaded");
  }, []);

  return (
      <div className="lock-leave-container">
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="header-content">
            <img src={logo} alt="Lock & Leave Logo" className="logo" />
            <h1 className="header-title">Lock & Leave</h1>
          </div>
          <div className="dropdown" ref={dropdownRef}>
            <button className="contact-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Contact Us
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="mailto:lockandleave24@gmail.com"><img src={emailIcon} alt="Email" /> Email</a></li>
              <li><a className="dropdown-item" href="tel:+917982718223"><img src={callIcon} alt="Call" /> Call</a></li>
              <li><a className="dropdown-item" href="https://wa.me/917982718223"><img src={whatsappIcon} alt="WhatsApp" /> WhatsApp</a></li>
            </ul>
          </div>
        </header>

        <main>
          <section className="hero" style={{ backgroundImage: `url(${luggageGif})` }}>
            <div className="hero-content">
              <h2>Your Trusted Luggage Storage Solution</h2>
              <p>Explore cities freely while we keep your luggage safe! 🚀</p>
            </div>
          </section>

          <section className="features">
            <h2>Why Choose Lock & Leave?</h2>
            <div className="feature-grid">
              {[
                { title: "Secure Storage", img: secureImg, desc: "We ensure the safety of your belongings with our trusted hosts." },
                { title: "Affordable", img: affordableImg, desc: "Competitive pricing for travelers of all budgets." },
                { title: "Convenient Locations", img: locationImg, desc: "Find storage spaces near you in seconds." },
                { title: "24/7 Support", img: supportImg, desc: "We're here to help you at any time, anywhere." }
              ].map((feature, index) => (
                  <div key={index} className="feature-card">
                    <img src={feature.img} alt={feature.title} />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
              ))}
            </div>
          </section>

          <section className="cta">
            <a href="https://forms.gle/jR8rcm1oqhjwrg7x9" target="_blank" rel="noopener noreferrer" className="cta-btn host">
              Become a Host
            </a>
            <button className="cta-btn customer" disabled>Find Storage (Coming Soon)</button>
          </section>
        </main>

        <footer>
          <p>Contact Us:
            <a href="mailto:lockandleave24@gmail.com">Email</a> |
            <a href="https://wa.me/917982718223">WhatsApp</a> |
            <a href="https://instagram.com/lock_nd_leave">Instagram</a>
          </p>
          <p>&copy; 2025 Lock & Leave. All Rights Reserved.</p>
        </footer>
      </div>
  );
}
