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
        <h2>Let&apos;s build<br /><em>great software for great hardware.</em></h2>
        <a className="footerArrow" href="mailto:adamcraysmith@gmail.com" aria-label="Email Adam">↗</a>
      </div>
      <div className="footerGrid">
        <div className="footerBrand">
          <strong>ADAM<span>/</span>FILE</strong>
          <p>Full Stack & Hardware Systems + Forward Deployed Field Engineer<br />Sunnyvale, CA</p>
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
       
      </div>
      <div className="footerBottom">
        <p>Copyright © 2026, Adam's Dossier</p>
        <p>
          <Link to="/ConditionsOfUse"> Conditions of Use</Link> |
          <Link to="/PrivacyNotice"> Privacy Notice</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
