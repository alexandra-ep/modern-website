import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Developed by{" "}<a href="https://frontalex.vercel.app/">Alexandra Pettersen</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>3088 Brookside Drive</p>
          <p>205-258-6889</p>
          <p>info@gpt3.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT3. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
