import { Link } from "react-router-dom";
import React from "react";
import "./styles.scss";
import { firestore } from "./../../Firebase/config.js";
import { collection, addDoc } from "firebase/firestore";


const Footer = () => {
  const subscriberRef = collection(firestore, "subscribers");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      email: e.target.email.value,
      name: e.target.name.value,
    };
    addDoc(subscriberRef, form);
    alert("Check your email to confirm signup.");
  }

  return (
    <footer className="footer">
      <div className="footerLead">
        <span className="footerKicker">End of file / open channel</span>
        <h2>Let&apos;s make the<br /><em>next system better.</em></h2>
        <a className="footerArrow" href="mailto:hello@adamsmith.dev" aria-label="Email Adam">↗</a>
      </div>
      <div className="footerGrid">
        <div className="footerBrand">
          <strong>ADAM<span>/</span>FILE</strong>
          <p>Systems &amp; Forward Deployed Work<br />Sunnyvale, CA</p>
        </div>
        <div className="footerLinks">
          <span className="footerHeading">Navigate</span>
          <a href="#past-work" onClick={(event) => { event.preventDefault(); document.getElementById("past-work")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Past work</a>
          <a href="#projects" onClick={(event) => { event.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Projects</a>
          <a href="#skills" onClick={(event) => { event.preventDefault(); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Skills</a>
        </div>
        <div className="footerLinks">
          <span className="footerHeading">Elsewhere</span>
          <a href="https://github.com/realadamsmith">GitHub</a>
          <a href="https://thesoda.io/">SODA Alumni</a>
          <a href="https://www.globalshapers.org/impact/themes/sustainable-development">Sustainability</a>
        </div>
        <form className="footerSubscribe" onSubmit={(e) => handleSubmit(e)}>
          <span className="footerHeading">Occasional notes</span>
          <label htmlFor="footer-name">Name</label>
          <input id="footer-name" placeholder="Your name" name="name" type="text" />
          <label htmlFor="footer-email">Email</label>
          <div className="subscribeRow">
            <input id="footer-email" placeholder="you@example.com" name="email" type="email" />
            <button type="submit" aria-label="Subscribe">↗</button>
          </div>
        </form>
      </div>
      <div className="footerBottom">
        <p>Copyright © 2022, UNI, LLC</p>
        <p>
          <Link to="/ConditionsOfUse"> Conditions of Use</Link> |
          <Link to="/PrivacyNotice"> Privacy Notice</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
