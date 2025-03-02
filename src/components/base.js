import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.jpg";
import emailIcon from "./email.png";
import callIcon from "./call.png";
import whatsappIcon from "./whatsapp.png";
import "animate.css";

export default function LockLeaveMarketing() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-vh-100" style={{ background: "linear-gradient(to right, rgb(142, 81, 168), rgb(37, 37, 37))", color: "#212529" }}>
      {/* Fixed Header Section with Logo */}
      <header className={`d-flex align-items-center justify-content-between bg-white shadow fixed-top py-3 px-4 animate__animated animate__fadeInDown border-bottom border-secondary ${scrolled ? "header-scrolled" : "header-initial"}` }>
        <div className="d-flex align-items-center transition-header">
          <img
            src={logo}
            alt="Lock & Leave Logo"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Lock+%26+Leave")}
            style={{ width: "50px", marginRight: "10px" }}
          />
          <h1 className="display-6 fw-bold text-dark mb-0">Lock & Leave</h1>
        </div>
        <div className="position-relative contact-dropdown" ref={dropdownRef}>
          <button className="btn btn-outline-dark" onClick={() => setShowDropdown(!showDropdown)}>Contact Us</button>
          {showDropdown && (
            <div className="position-absolute bg-white shadow rounded mt-2 p-2 animate__animated animate__fadeIn" style={{ right: 0, zIndex: 1000, opacity: 0.95 }}>
              <a href="mailto:lockandleave24@gmail.com" className="d-block text-dark px-3 py-2">
                <img src={emailIcon} alt="Email" style={{ width: "24px", marginRight: "8px" }} />
              </a>
              <a href="tel:+1234567890" className="d-block text-dark px-3 py-2">
                <img src={callIcon} alt="Call" style={{ width: "24px", marginRight: "8px" }} />
              </a>
              <a href="https://wa.me/message/ZWCKHBPEKKTLG1e" className="d-block text-dark px-3 py-2">
                <img src={whatsappIcon} alt="WhatsApp" style={{ width: "24px", marginRight: "8px" }} />
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container text-center" style={{ marginTop: "120px" }}>
        {/* Hero Section */}
        <div className="py-5 bg-white rounded shadow-sm animate__animated animate__fadeInUp text-dark border border-secondary" style={{ opacity: 0.95 }}>
          <h2 className="fw-bold text-primary">Your Trusted Luggage Storage Solution</h2>
          <p className="lead">Explore cities freely while we keep your luggage safe! 🚀</p>
        </div>

        {/* Features Section */}
        <div className="mt-5">
          <h2 className="fw-bold text-dark">Why Choose Lock & Leave?</h2>
          <div className="row mt-4 g-4">
            {["Secure Storage", "Affordable", "Convenient Locations", "24/7 Support"].map((feature, index) => (
              <div key={index} className="col-md-3 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="card p-4 text-center shadow-sm bg-white border border-secondary" style={{ opacity: 0.95 }}>
                  <h5 className="fw-bold text-primary">{feature}</h5>
                  <p>{
                    feature === "Secure Storage" ? "We ensure the safety of your belongings with our trusted hosts."
                    : feature === "Affordable" ? "Competitive pricing for travelers of all budgets."
                    : feature === "Convenient Locations" ? "Find storage spaces near you in seconds."
                    : "We're here to help you at any time, anywhere."
                  }</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Host & Customer Buttons */}
        <div className="mt-5">
          <a
            href="https://forms.gle/exampleHostForm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-success me-3 shadow animate__animated animate__heartBeat animate__delay-2s"
          >
            Become a Host
          </a>
          <button className="btn btn-lg btn-secondary shadow animate__animated animate__shakeX animate__delay-3s" disabled>Find Storage (Coming Soon)</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white text-dark text-center py-4 mt-5 animate__animated animate__fadeInUp" style={{ opacity: 0.95 }}>
        <p className="fw-bold mb-1">Contact Us |
          <a href="mailto:lockandleave24@gmail.com" className="text-dark mx-2">Email</a> |
          <a href="https://wa.me/message/ZWCKHBPEKKTLG1e" className="text-dark mx-2">WhatsApp</a> |
          <a href="https://instagram.com/lock_nd_leave" className="text-dark mx-2">Instagram</a>
        </p>
        <p>&copy; 2025 Lock & Leave. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
