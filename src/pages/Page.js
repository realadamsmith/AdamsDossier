import "./Page.scss";
import Lab1 from "../Assets/MaleyLabChristmas.jpeg";
import SODA1 from "../Assets/IMG_2960.jpg";
import Shapers from "../Assets/Apr16NorthMountain4.jpeg";
import DNASU from "../Assets/DNASUlab.jpg";
import Comb from "../Assets/CRs.jpeg";
import Curiox1 from "../Assets/20230628_172041.jpg"
import Curiox2 from "../Assets/IMG_1482.jpeg"
import DiamondFoundry1 from "../Assets/DF1.jpg";
import DiamondFoundry2 from "../Assets/DF2.JPG";
import FalconMillennium from "../Assets/FalconMillennium.jpeg";
import HeroImage from "../Assets/11111111.jpeg"
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
            <span className="heroKicker"><span className="statusDot"></span> Systems &amp; Forward Deployed Work / Sunnyvale, CA</span>
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
          <div className="sectionLabel">02 / Diamond Foundry</div>
          <div className="sectionIntro">
            <h2>Close to the<br /><span>material.</span></h2>
            <p>Hands-on precision work where process discipline, equipment awareness, and careful troubleshooting matter every day.</p>
          </div>
          <div className="workFeatureGrid">
            <article className="workFeature workFeatureLarge">
              <img src={DiamondFoundry1} alt="Working with precision equipment at Diamond Foundry" />
              <div><span>Technician culture / 01</span><h3>Guiding a positive, efficient technician team culture.</h3><p>Training and guiding wafer-process technicians in an ISO 5 clean room, translating leadership needs into clear delegation, stronger teamwork, and dependable daily execution.</p></div>
            </article>
            <article className="workFeature">
              <img src={DiamondFoundry2} alt="Diamond Foundry remote control software work" />
              <div><span>Control software / 02</span><h3>Remote PLC management.</h3><p>Performed diligence, then proposed and developed phased control software for remote PLC management with an estimated $50-150k in annual savings.</p></div>
            </article>
            <article className="workFeature">
              <img src={FalconMillennium} alt="Laboratory equipment with custom Millennium Falcon artwork" />
              <div><span>Process development / 03</span><h3>In-house chemistry development.</h3><p>Assisted development of internal CMP slurry and process improvements across wafer cleaning, DI water dispense, scheduling, and higher-volume production.</p></div>
            </article>
          </div>
        </section>

        <section className="curioxSection scrollSection" data-scroll-reveal id="curiox">
          <div className="sectionLabel">03 / Curiox Biosciences</div>
          <div className="sectionIntro">
            <h2>Complex made<br /><span>usable.</span></h2>
            <p>Bringing lab automation systems from installation to dependable, confident use in the field.</p>
          </div>
          <div className="workFeatureGrid">
            <article className="workFeature workFeatureLarge">
              <img src={Curiox1} alt="Installing and testing Curiox equipment in a laboratory" />
              <div><span>Field installation / 01</span><h3>From installation to confidence.</h3><p>Installing, testing, and bringing new lab systems into working order.</p></div>
            </article>
            <article className="workFeature">
              <img src={Curiox2} alt="Curiox laboratory installation" />
              <div><span>Customer systems / 02</span><h3>Making the complex usable.</h3><p>Turning technical equipment and processes into dependable customer experiences.</p></div>
            </article>
          </div>
        </section>

        <section className="projectsSection scrollSection" data-scroll-reveal id="projects">
          <div className="sectionLabel">04 / Projects</div>
          <div className="sectionIntro">
            <h2>Ideas that<br /><span>ship.</span></h2>
            <p>Projects are where strategy becomes tangible: a community, a workflow, a working system.</p>
          </div>
          <div className="projectGrid">
            <article className="projectCard"><div className="projectCardNumber">01</div><img src={SODA1} alt="ASU Software club team" /><div className="projectCardCopy"><span>Community / 01</span><h3>SODA Software Club</h3><p>Building a stronger technical community through shared work and shared momentum.</p></div></article>
            <article className="projectCard"><div className="projectCardNumber">02</div><img src={DNASU} alt="Running the DNASU Biomek FXp" /><div className="projectCardCopy"><span>Automation / 02</span><h3>DNASU Lab Systems</h3><p>Supporting reliable automation and repeatable laboratory operations.</p></div></article>
            <article className="projectCard"><div className="projectCardNumber">03</div><img src={Comb} alt="Inspecting reagent tubes at ASU Goldwater" /><div className="projectCardCopy"><span>Diagnostics / 03</span><h3>Instrument Troubleshooting</h3><p>Isolating the real issue when complex systems refuse to cooperate.</p></div></article>
          </div>
        </section>

        <section className="skillsSection scrollSection" data-scroll-reveal id="skills">
          <div className="sectionLabel">05 / Skills</div>
          <div className="sectionIntro">
            <h2>Useful under<br /><span>pressure.</span></h2>
            <p>A practical toolkit for moving from ambiguity to a clear next action.</p>
          </div>
          <div className="skillsGrid">
            <div className="skillList"><div><span>01</span><h3>Systems thinking</h3><p>Seeing the full workflow, not only the task in front of me.</p></div><div><span>02</span><h3>Lab operations</h3><p>Equipment, installation, troubleshooting, and process discipline.</p></div><div><span>03</span><h3>Team enablement</h3><p>Helping people grow into confident, useful contributors.</p></div><div><span>04</span><h3>Process improvement</h3><p>Finding the small change that makes the whole system move better.</p></div></div>
            <div className="skillsImageStack"><img src={Lab1} alt="Working with the Maley Lab team" /><img src={Shapers} alt="Volunteering with the Phoenix UN Shapers" /></div>
          </div>
          <div className="contactStrip"><span>Open channel</span><h3>References and connections are always available.</h3><a href="mailto:hello@adamsmith.dev" className="contactLink">Start a conversation <span>↗</span></a></div>
        </section>
      </main>
          <Footer />
    </div>
  );
};

export default Page;
