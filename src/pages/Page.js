import "./Page.scss";
import Curiox1 from "../Assets/20230628_172041.jpg"
import Curiox2 from "../Assets/IMG_1482.jpeg"
import CurioxField from "../Assets/CURIOX1.jpeg";
import DiamondFoundry1 from "../Assets/DF1.jpg";
import DiamondFoundry2 from "../Assets/DF2.JPG";
import FalconMillennium from "../Assets/FalconMillennium.jpeg";
import HeroImage from "../Assets/11111111.jpeg"
import KICAD1 from "../Assets/KICAD1.png";
import KICAD3 from "../Assets/KICAD3.jpeg";
import Fusion360 from "../Assets/FUSION360.png";
import PitchVideo from "../Assets/73022PitchVid3Final.mp4";
import PLC1 from "../Assets/PLC1.jpeg";
import ChemVideo from "../Assets/Chem.mp4";
import Footer from './../components/Footer';
import { useEffect } from 'react';

const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Page = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="siteShell">
      <header className="siteHeader">
        <a className="wordmark" href="#top">DOSSIER<span>/</span>ADAM S.</a>
        <nav aria-label="Primary navigation">
          <a href="#past-work" onClick={(event) => scrollToSection(event, 'past-work')}>Past work</a>
          <a href="#projects" onClick={(event) => scrollToSection(event, 'projects')}>Projects</a>
          <a href="#skills" onClick={(event) => scrollToSection(event, 'skills')}>Skills</a>
        </nav>
        <span className="headerIndex">01 — 05</span>
      </header>

      <main id="top">
        <section className="heroPanel">
          <div className="heroTopline">
            <span className="heroKicker"><span className="statusDot"></span> Full Stack & Hardware Systems &amp; Forward Deployed Field Engineer - Sunnyvale, CA</span>
          </div>
          <div className="heroComposition">
            <div className="heroLockup">
              <div className="heroTitleMeta">
                <span className="heroEyebrow">Adam&apos;s</span>
                <span className="heroFileNumber">File / 001</span>
              </div>
              <h1>Dossier<span className="heroTitleIndex" aria-hidden="true">01</span></h1>
              <div className="heroBrief">
                <div className="heroBriefLine">
                  <span className="heroBriefMark" aria-hidden="true"></span>
                  <p>Doing my part.</p>
                </div>
                <div className="heroBriefLine">
                  <span className="heroBriefMark" aria-hidden="true"></span>
                  <p>My experience and projects are below.</p>
                </div>
              </div>
            </div>
            <div className="heroImageFrame">
              <a className="heroResume" href="https://docs.google.com/document/d/16a__ptdkFEIYPoUXgRdW2WwLMFIhIJpWm-6zPXxUaLk/edit?usp=sharing">Resume <span aria-hidden="true">↗</span></a>
              <div className="heroImageRule"></div>
              <img src={HeroImage} alt="Adam working in a laboratory" />
               <blockquote className="heroQuote">
                 <span className="quoteLabel">Mission note</span>
                 <p>I'm just an average worker on my own, but my strength is working and learning with trusted teams and guiding strong teamwork.</p>
               </blockquote>
              <span className="heroImageLabel"></span>
            </div>
          </div>
          <div className="heroFooter">
            <span>Strategy · Operations · Systems</span>
            <a href="#past-work" className="scrollCue">Scroll to explore <span>↓</span></a>
          </div>
        </section>

        <section className="pastWorkSection scrollSection" data-scroll-reveal id="past-work">
          <div className="sectionLabel">02 / Diamond Foundry · Lead Wafer Technician 2024-05 - 2025-07</div>
          <div className="sectionIntro">
            <h2>Software Driven.<br /><span>Hardware Optimized.</span></h2>
            <blockquote className="sectionQuote"><span>Field note</span><p>Hands-on precision work where process discipline, equipment awareness, and careful troubleshooting matter every day.</p></blockquote>
          </div>
          <div className="workFeatureGrid">
            <article className="workFeature workFeatureLarge">
              <img src={DiamondFoundry1} alt="Working with precision equipment at Diamond Foundry" />
              <div><span>Technician culture / 01</span><h3>Guiding a positive, efficient technician team culture.</h3><p>Training and guiding wafer-process technicians in an ISO 5 clean room, translating leadership needs into clear delegation, stronger teamwork, and dependable daily execution.</p></div>
            </article>
            <article className="workFeature">
              <img src={PLC1} alt="Diamond Foundry remote control software work" />
              <div><span>Control software / 02</span><h3>Remote PLC management.</h3><p>Performed diligence, then proposed and developed phased control software for remote PLC management with an estimated $50-150k in annual savings.</p></div>
            </article>
            <article className="workFeature">
              <img src={FalconMillennium} alt="Laboratory equipment with custom Millennium Falcon artwork" />
              <div><span>Process development / 03</span><h3>In-house chemistry development.</h3><p>Assisted development of internal CMP slurry and process improvements across wafer cleaning, DI water dispense, scheduling, and higher-volume production.</p></div>
            </article>
          </div>
        </section>

        <section className="curioxSection scrollSection" data-scroll-reveal id="curiox">
          <div className="sectionLabel">03 / Curiox Biosciences · Field Service Engineer 2022-10 - 2023-10</div>
          <div className="sectionIntro">
            <h2>Complex made<br /><span>usable.</span></h2>
            <blockquote className="sectionQuote"><span>Field note</span><p>Bringing lab automation systems from installation to dependable, confident use in the field.</p></blockquote>
          </div>
          <div className="workFeatureGrid">
            <article className="workFeature workFeatureLarge curioxFieldCard">
              <img src={CurioxField} alt="Forward-deployed engineering work at Curiox customer sites" />
              <div>
                <span>Forward deployed/Field engineering / 01</span>
                <h3>Execution from install to support.</h3>
                <p>Owned the front line of West Coast deployment and customer readiness: installation, IQ/OQ/PQ, training, and troubleshooting.</p>
              </div>
            </article>
            <article className="workFeature">
              <img src={Curiox2} alt="Curiox laboratory installation" />
              <div><span>Customer systems / 02</span><h3>Making the complex usable.</h3><p>Turning Curiox's technical equipment and processes into dependable customer experiences.</p></div>
            </article>
            <article className="workFeature">
              <img src={Curiox1} alt="Installing and testing Curiox equipment in a laboratory" />
              <div><span>Field installation / 03</span><h3>From installation to confidence.</h3><p>Installing, testing, and bringing new lab systems into working order.</p></div>
            </article>
          </div>
        </section>

        <section className="projectsSection scrollSection" data-scroll-reveal id="projects">
          <div className="sectionLabel">04 / Projects</div>
          <div className="sectionIntro">
            <h2>Ideas that<br /><span>ship.</span></h2>
            <blockquote className="sectionQuote"><span>Build note</span><p>Small projects become tangible systems: KiCad hardware, PyQt tools, embedded software for Nordic and NXP platforms, and iOS and Android mobile apps.</p></blockquote>
          </div>
          <div className="projectCase">
            <div className="projectCaseHeader"><span>Project 01 / Integrated hardware system</span><span>KiCad + Fusion 360</span></div>
            <div className="projectCaseGrid">
              <article className="projectPhase projectPhaseLead"><div className="projectCardNumber">01 / INTERNAL ELECTRONICS</div><img src={KICAD1} alt="KiCad board design and schematic layout" /><div className="projectCardCopy"><span>Architecture</span><h3>Internal electronics architecture.</h3><p>Designed the electrical system from the ground up with clear signal paths and maintainable layout choices.</p></div></article>
              <article className="projectPhase"><div className="projectCardNumber">02 / MANUFACTURABILITY</div><img src={KICAD3} alt="PCB verification and prototype build" /><div className="projectCardCopy"><span>Design for production</span><h3>Bringing design to manufacturability.</h3><p>Validated the prototype through debug fixtures and refined the layout for repeatable, practical production.</p></div></article>
              <article className="projectPhase fusionProjectCard"><div className="projectCardNumber">03 / MECHANICAL DESIGNS, MILLIMETER PRECISION</div><img src={Fusion360} alt="Fusion 360 mechanical design project" /><div className="projectCardCopy"><span>Mechanical design</span><h3>Form follows function.</h3><p>Moved from rough concepts to precise 3D models, assemblies, and build-ready details.</p></div></article>
            </div>
          </div>
          <div className="projectCase projectCaseVideo">
            <div className="projectCaseHeader"><span>Project 02 / Pre-COVID Full-stack B2B2C commerce platform</span><span>Web + Mobile + Partner Integrations</span></div>
            <div className="projectVideoLayout">
              <div className="projectVideoFrame">
                <video autoPlay controls muted loop playsInline preload="auto">
                  <source src={PitchVideo} type="video/mp4" />
                  Your browser does not support the project video.
                </video>
              </div>
              <div className="projectVideoCopy">
                <span>Product infrastructure / 01</span>
                <h3>Commerce built for both sides.</h3>
                <p>Built a failed full-stack ecommerce iOS & Android app and Web infrastructure Lagruni for sellers and buyers, with video ratings and per-account points. Integrated Stripe payments and ShipBob shipping so the product could move from transaction to fulfillment. Overtaken by Tiktok Shop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skillsSection scrollSection" data-scroll-reveal id="skills">
          <div className="sectionLabel">05 / Skills</div>
          <div className="sectionIntro">
            <h2>Useful under<br /><span>pressure.</span></h2>
            <blockquote className="sectionQuote"><span>Capability note</span><p>I have a practical toolkit spanning validation, cleanroom operations, embedded systems, software, data, and cloud tooling.</p></blockquote>
          </div>
          <div className="skillsGrid">
            <div className="skillsCatalog">
              <div className="skillGroup"><span>01 / Software &amp; data</span><p><b>PyQt</b> <b>PLCs</b> <b>Fusion 360/KiCAD</b> <b>C++</b> <b>Python</b> <b>Rust</b> <b>NodeJS</b> <b>Bash</b> <b>SQL</b> <b>NoSQL</b> <b>JMP</b> <b>Grafana</b> <b>Tableau</b> <b>HubSpot</b> <b>Git</b> <b>GitHub</b> <b>PlatformIO IDE</b></p></div>
              <div className="skillGroup"><span>02 / Process &amp; lab systems</span><p><b>PLCs</b> <b>Hamilton Automation</b> <b>Biomek FxP</b> <b>MES</b> <b>CMP</b> <b>Wet Etch</b> <b>WLI</b> <b>RIE</b> <b>ICP-OES</b> <b>Soldering</b></p></div>
              <div className="skillGroup"><span>03 / Quality &amp; validation</span><p><b>IQ OQ PQ</b> <b>cGMP</b> <b>Statistical Process Control</b> <b>Metrology + QA</b> <b>SPC</b> <b>Phase Gating</b> <b>SOP Development</b> <b>Failure Analysis</b> <b>Cleanroom</b> <b>Stanford NanoFab Certification</b></p></div>
              <div className="skillGroup"><span>04 / Cloud &amp; delivery</span><p><a className="skillLink" href="https://www.cloudskillsboost.google/public_profiles/9d7c29a6-1004-43d9-be6a-50abb6d2b106"><b>Google Cloud</b></a> <a className="skillLink" href="https://learn.microsoft.com/en-us/users/sadaviryamato-0670/transcript/v02y4fm3x29ly22"><b>Azure</b></a> <b>AWS CLI</b> <b>Docker</b> <b>GitHub Actions</b> <b>Postgres</b></p></div>
            </div>
            <div className="skillsImageStack">
              <img src={DiamondFoundry2} alt="PLC control panel wiring and hardware" />
              <video className="skillsVideo" autoPlay muted loop playsInline preload="auto">
                <source src={ChemVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="contactStrip"><span>Open channel</span><h3>References and connections are always available.</h3><a href="mailto:adamcraysmith@gmail.com" className="contactLink">Start a conversation <span>↗</span></a>
          </div>
          
        </section>
      </main>
          <Footer />
    </div>
  );
};

export default Page;
