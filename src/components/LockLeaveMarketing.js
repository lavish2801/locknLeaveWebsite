import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.jpg";
import emailIcon from "./email.png";
import callIcon from "./call.png";
import whatsappIcon from "./whatsapp.png";
import luggageGif from "./luggage.gif";
import secureImg from "./secure.jpg";
import affordableImg from "./affordable.png";
import locationImg from "./location.jpg";
import supportImg from "./support.png";
import "animate.css";
import "./LockLeaveMarketing.css"; // Import custom CSS

export default function LockLeaveMarketing() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [centered, setCentered] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setCentered(window.scrollY <= 50);
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

  // Scroll to top on component mount and add class to body
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("loaded");
    return () => {
      document.body.classList.remove("loaded");
    };
  }, []);

  return (
    <div className="min-vh-100" style={{ background: "linear-gradient(to right, rgb(81, 104, 168), rgb(37, 37, 37))", color: "#212529" }}>
      {/* Fixed Header Section with Logo */}
      <header className={`d-flex align-items-center justify-content-between bg-white shadow fixed-top py-3 px-4 animate__animated animate__fadeInDown border-bottom border-secondary ${scrolled ? "header-scrolled" : "header-initial"}`}>
        <div className={`d-flex align-items-center transition-header ${centered ? "header-centered" : "header-left"}`}>
          <img
            src={logo}
            alt="Lock & Leave Logo"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Lock+%26+Leave")}
            style={{ width: "50px", marginRight: "10px" }}
          />
          <h1 className="display-6 fw-bold text-dark mb-0 header-title">Lock & Leave</h1>
        </div>
        <div className="position-relative contact-dropdown" ref={dropdownRef}>
          <button className="btn btn-outline-dark" onClick={() => setShowDropdown(!showDropdown)}>Contact Us</button>
          {showDropdown && (
            <div className="position-absolute bg-white shadow rounded mt-2 p-2 animate__animated animate__fadeIn" style={{ right: 0, zIndex: 1000, opacity: 0.95 }}>
              <a href="mailto:lockandleave24@gmail.com" className="d-block text-dark px-3 py-2">
                <img src={emailIcon} alt="Email" style={{ width: "24px", marginRight: "8px" }} />
              </a>
              <a href="tel:+917982718223" className="d-block text-dark px-3 py-2">
                <img src={callIcon} alt="Call" style={{ width: "24px", marginRight: "8px" }} />
              </a>
              <a href="https://wa.me/917982718223" className="d-block text-dark px-3 py-2">
                <img src={whatsappIcon} alt="WhatsApp" style={{ width: "24px", marginRight: "8px" }} />
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container text-center" style={{ marginTop: "75px" }}>
        {/* Hero Section */}
        {/* Features Section */}
        <div className="py-5 bg-white rounded shadow-sm animate__animated animate__fadeInUp text-dark border border-secondary" style={{ opacity: 0.95, background: `url(${luggageGif}) repeat-x center center`, width: "100%", backgroundSize: "auto 150%", maxWidth: "1300px", marginTop: "10px", height: "250px", textAlign: "center", verticalAlign: "middle" }}>
          <h2 className="fw-bold text-primary" style={{fontFamily: "Libre Franklin", textAlign: "center", verticalAlign: "middle" }}>Your Trusted Luggage Storage Solution</h2>
          <p className="lead" style={{fontFamily: "Libre Franklin", textAlign: "center", verticalAlign: "middle"}}>Explore cities freely while we keep your luggage safe! 🚀</p>
        </div>

        {/* Features Section */}
        <div className="mt-5">
          <h2 className="fw-bold" style={{ color: "#ffeb3b" }}>Why Choose Lock & Leave?</h2>
          <div className="row mt-4 g-4">
            {["Secure Storage", "Affordable", "Convenient Locations", "24/7 Support"].map((feature, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch animate__animated animate__fadeInUp animate__delay-1s">
                <div className="card p-4 text-center shadow-sm bg-white border border-secondary d-flex flex-column" style={{ opacity: 0.95 }}>
                  <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                    <img src={
                      feature === "Secure Storage" ? secureImg
                      : feature === "Affordable" ? affordableImg
                      : feature === "Convenient Locations" ? locationImg
                      : supportImg
                    } alt={feature} style={{ width: "50px", marginBottom: "10px" }} />
                  </div>
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
            href="https://forms.gle/jR8rcm1oqhjwrg7x9"
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
        <p className="fw-bold mb-1">Contact Us :
          <a href="mailto:lockandleave24@gmail.com" className="text-dark mx-2">Email</a> |
          <a href="https://wa.me/917982718223" className="text-dark mx-2">WhatsApp</a> |
          <a href="https://instagram.com/lock_nd_leave" className="text-dark mx-2">Instagram</a>
        </p>
        <p>&copy; 2025 Lock & Leave. All Rights Reserved.</p>
      </footer>
    </div>
  );
}