//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Carousel from './Carousel.js';
import { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Canvas from './Canvas.js';
import ContactForm from './Contact.js';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

function Picture5() {

  return (
    <div>
      <LinkedInIcon sx={{ display: 'flex', fontSize: '35px', verticalAlign: 'middle' }}> </LinkedInIcon>
    </div>
  )
}

function Picture6() {

  return (

    <GithubIcon sx={{ display: 'flex', fontSize: '35px', verticalAlign: 'middle' }}> </GithubIcon>

  )
}

function LandingSection() {

  const handleLinkedinClick = () => {

    window.sa_event('linkedin_clicked');

  };

  const handleGithubClick = () => {

    window.sa_event('github_clicked');

  };

  const handleDownloadAndView = (event) => {

    event.preventDefault()

    // log event to simple analytics
    window.sa_event('cv_downloaded');

    // download and view document
    const link = document.createElement('a');
    link.href = '/CV__Daniel_Steele__updated_Dec24_.pdf';
    link.download = '/CV__Daniel_Steele__updated_Dec24_.pdf';
    link.click();

  };

  return (
    <div className="landing-content-container">


      <span className="landing-greeting">Hi, my name is </span>
      <p1 className="landing-title">Daniel Steele</p1>

      <div className="landing-desc">
        <ReactTypingEffect
          className="landing-desc"
          text={["< Full Stack Engineer />", "< Passionate Developer & Designer />", "< Tech Enthusiast />"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={10000}
          typingDelay={90}
        />
      </div>

      <span className="landing-para"> If you’d like to collaborate on a project or have any questions,
        feel free to reach out. I’d be happy to connect with you! </span>

      <div className="download-button-container">

        <button className="Github-button">
          <a href="https://github.com/DanielSteele1" target="_blank" onClick={handleGithubClick} rel="noopener noreferrer">
            <h1 className="download-text">
              <Picture6 />
              Github </h1>
          </a>
        </button>

        <button className="Linkedin-button">
          <a href="https://www.linkedin.com/in/daniel-steele1/" target="_blank" onClick={handleLinkedinClick} rel="noopener noreferrer">
            <h1 className="download-text">
              <Picture5 />
              LinkedIn </h1>
          </a>
        </button>

        <button className="download-button">
          <a href="#" target="_blank" onClick={handleDownloadAndView} rel="noopener noreferrer">
            <h1 className="download-text">
              <FileDownloadIcon fontSize="large" sx={{ display: 'flex', color: '#c47dff', padding: '5px', paddingTop: '10px', verticalAlign: 'middle' }} />
              Download Resume </h1>
          </a>
        </button>

      </div>

      <div className="landing-button-container">
        <button className="landing-button"> <a href="#about">   <KeyboardDoubleArrowDownRoundedIcon sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '70px', color: '#c47dff' }} /> </a> </button>
      </div>
    </div >
  )

}

function Profile() {
  return (

    <img
      className="profile"
      src="Sunglasses.jpg"
      alt="profile"
    />

  )
}

function Navigation() {

  // useEffect(() => {
  //   const navMenu = document.querySelector(".nav-menu");
  //   const hamburger = document.querySelector(".hamburger");

  //   hamburger.addEventListener("click", toggleMenu);

  //   document.querySelectorAll(".nav-link").forEach((link) => {
  //     link.addEventListener("click", closeMenu);
  //   });

  //   function toggleMenu() {
  //     hamburger.classList.toggle("active");
  //     navMenu.classList.toggle("active");
  //   }

  //   function closeMenu() {
  //     hamburger.classList.remove("active");
  //     navMenu.classList.remove("active");
  //   }

  //   return () => {
  //     hamburger.removeEventListener("click", toggleMenu);
  //     document.querySelectorAll(".nav-link").forEach((link) => {
  //       link.removeEventListener("click", closeMenu);
  //     });
  //   };
  // }, []);

  return (

    <div className="navigation">

      <div className="nav-logo-heading">
        <div id="nav-profile"> <img src="Sunglasses_mini.png" /> </div>
        <span> Daniel Steele - Full Stack Engineer  </span>
      </div>

      <div className="nav-item">
        <span className="nav-heading"> <a href="#about"> About </a>  </span>
      </div>

      <div className="nav-item">
        <span className="nav-heading"> <a href="#projects">  Projects  </a> </span>
      </div>

      <div className="nav-item">
        <span className="nav-heading">  <a href="#contact"> Contact </a> </span>
      </div>

    </div>

  )
}

function Project_card({ src, children, heading, link }) {
  return (
    <div className="Project_card">
      <div className="Project_card-image">
        <img src={src} alt={heading} />
      </div>
      <div className="Project_card-content">
        <div className="Project_card-heading">{heading}</div>
        <div className="Project_card-description">{children}</div>
        <div className="Project_card-button-container">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="Project_card-button" onClick={() => window.sa_event('project_viewed')}>View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {

  const handleLinkedinClick = () => {

    window.sa_event('linkedin_clicked');

  };

  const handleGithubClick = () => {

    window.sa_event('github_clicked');

  };

  return (
    <div className="footer">
      {/* Contact Details */}
      <div className="footer-strip">
        <div className="footer-item">
          <span className="footer-title">Contact</span>
          <div className="footer-link">
            <span>
              <a href="mailto:Dsteele1906@gmail.com"> Dsteele1906@gmail.com (click here)</a>
              <br></br>
              Location: Plymouth, United Kingdom
              <br></br>
              Timezone: UTC/UTC + 01:00
            </span>
          </div>
        </div>
      </div>

      {/* Connect Links */}
      <div className="footer-strip">
        <div className="footer-item">
          <span className="footer-title">Connect</span>
          <div className="footer-connect">
            <a href="https://github.com/DanielSteele1" target="_blank" onClick={handleGithubClick} rel="noopener noreferrer">
              <GithubIcon sx={{ fontSize: '35px', padding: '5px', color: '#c47dff' }} onClick={handleGithubClick} />
            </a>

            <a onClick={handleLinkedinClick} href="https://www.linkedin.com/in/daniel-steele1/" target="_blank">
              <LinkedInIcon sx={{ fontSize: '35px', padding: '5px', color: '#c47dff' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="footer-strip">
        <span className="footer-title">Daniel Steele ©2024</span>
        <div className="footer-badge">

          <a
            href="https://dashboard.simpleanalytics.com/?utm_source=danielsteele.dev&utm_content=badge"
            referrerPolicy="origin"
            target="_blank"
          >
            <picture>
              <source src="https://simpleanalyticsbadges.com/danielsteele.dev?logo=orangered&text=rgba(255,69,0,.8)&background=transparent&radius=10" />
              <img
                src="https://simpleanalyticsbadges.com/danielsteele.dev?logo=orangered&text=rgba(255,69,0,.8)&background=transparent&radius=10"
                loading="lazy"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
}

function StackCard({ src, description, title }) {
  return (
    <div className="stack-card">
      <div id="stack-heading">
        {/* Check if src is a string or JSX element */}
        <div>
          {typeof src === 'string' ? (
            <img src={src} alt={title} />
          ) : (
            src
          )}
        </div>
        <h1>{title}</h1>
      </div>
      <div id="description">{description}</div>
    </div>
  );
}

export default function MyApp() {

  return (
    <div>

      <Canvas />
      <Navigation />

      <div className="landing-section-container">

        <LandingSection />

      </div>
      <div id="about"> </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="heading"> <h1> Welcome to my Portfolio Website </h1> </div>

      <div className="main-content">

        <div className="content-desc-container">

          <div className="content-profile">

            <Profile> </Profile>

            <ul style={{ padding: '10px' }}>

              <li className="content-title" style={{ gap: '10px', justifyContent: 'center' }}>
                I'm Daniel Steele, a <span className="highlight"> Full Stack Developer </span>
                that's recently graduated with <span className="highlight"> a bachelors
                  degree from the University of Plymouth, UK. </span>
                I'm looking for oppurtunities in the UK to show off my development skills.
              </li>
            </ul>

          </div>

          <div className="content-desc">
            <ul style={{ padding: '10px' }}>

              <li style={{ gap: '10px' }}>
                <KeyboardArrowRightRoundedIcon style={{ color: '#c47dff' }}> </KeyboardArrowRightRoundedIcon>
                Having recently graduated from the <span className="highlight">  University of Plymouth in 2024, </span> and with a passion for creativity, I'm eager to immerse myself in the world of <span className="highlight">full-stack development. </span>
              </li>
              <br></br>

              <li style={{ gap: '10px' }}>
                <KeyboardArrowRightRoundedIcon style={{ color: '#c47dff' }}> </KeyboardArrowRightRoundedIcon>
                At my time at university, I've learnt to code with web technologies such as <span className="highlight"> JavaScript, React, MongoDB & MySQL. </span>I've also created a variety of <span className="highlight"> projects with different public web APIs, </span> which you can view below this page.
              </li>
              <br></br>
              <li style={{ gap: '10px' }}>
                <KeyboardArrowRightRoundedIcon style={{ color: '#c47dff' }}> </KeyboardArrowRightRoundedIcon>
                I'm always looking to expand on my current knowledge and teach myself new technologies in and around web development. <span className="highlight"> Learning different approaches keeps me motivated and excited to code.</span>
              </li>
              <br></br>
              <li style={{ gap: '10px' }}>
                <KeyboardArrowRightRoundedIcon style={{ color: '#c47dff' }}> </KeyboardArrowRightRoundedIcon>
                As an occasional hobby in my free time, I like to experiment with <span className="highlight"> coding passion projects in OpenGL (C++), </span> and have a keen interest in computer hardware. To unwind, I like to play video games with friends.
              </li>
            </ul>
          </div>
        </div>
      </div >


      <div className="heading"> <h1> My Skills and Experience </h1> </div>

      <div className="stack-card-container">
        <StackCard

          title="HTML5"
          src="HTML.png"
          description="Full understanding and experience in the best practices of HTML."

        />

        <StackCard

          title="CSS"
          src="CSS.png"
          description="Mastered the basics of CSS in order to create beautiful UI elements."

        />
        <StackCard
          title="JavaScript"
          src="JS.png"
          description="Experience using JavaScript in both frontend & backend to create interactive web applications."

        />
        <div id="react-logo">
          <StackCard
            title="React"
            src="react.png"
            description="Expertise with using react with JSX to create resuable components."

          />
        </div>
        <StackCard
          title="Node"
          src="node.png"
          description="Knowledge in leveraging NodeJS in order to build server-side applications."

        />
        <StackCard
          title="MongoDB"
          src="mongoDB.png"
          description="Knowledge of creating and querying NoSQL databases with MongoDB to store application data."

        />

        <StackCard
          title="Git"
          src="git.png"
          description="Proficient in making use of version control systems like git and github with all of my projects."

        />

        <StackCard
          src="Figma.png"
          title="Figma"
          description="Extensive knowledge of using Figma to design and prototype ideas and wireframes for my projects."

        />

        <StackCard
          title="MaterialUI"
          src="MaterialUI.png"
          description="Experience in leveraging Material-UI to create modern & clean looking UI components."

        />

        <StackCard
          title="C++"
          src="c++.png"
          description="One of my hobbies is coding with C# and C++. I like to create scenes and games with OpenGL. "

        />

        <StackCard
          title="TypeScript & TailwindCSS"
          src={<ImportContactsTwoToneIcon id="BookIcon" fontSize="large" />}
          description="Currently, I'm also in the process of experimenting with TypeScript and TailwindCSS to level up my dev skills."

        />


      </div>


      <div id="projects"> </div>

      <div className="heading"> <h1> Some of my recent projects </h1> </div>
      <div className="projects">

        <div className="project1">

          <Project_card
            heading="SkyCompass"
            src="SkyCompass.gif"
            link="https://github.com/DanielSteele1/COMP3000"
          >
            <div className="project-description">
              <span className="highlight"> Skycompass is a web-based application </span>
              that allows users to monitor up-to-date weather patterns across the globe.
              It utilises multiple <span className="highlight"> APIs to create a dashboard</span> displaying weather maps,
              as well a forecast page that <span className="highlight">predicts weather for up to 7 days.</span> Using <span className="highlight">MongoDB & Bcrypt </span> hashing for security,
              users can favourite locations for a more personalised experience.
            </div>

          </Project_card>
        </div>

        <div className="project2">
          <Project_card
            heading="EarthSim"
            src="EarthSim.gif"
            link="https://github.com/DanielSteele1/COMP3016_2"
          >
            <div className="project-description">
              <span className="highlight">EarthSim </span> is a project that I built in C++,
              <span className="highlight"> using OpenGL and various libraries </span> to create a 3D environment, with the goal of simulating our
              <span className="highlight"> local system of planets, </span> exposing me to core <span className="highlight">game development principles and GLSL.</span>
            </div>
          </Project_card>
        </div>

        <div className="project3" >
          <Project_card
            heading="Developer Portfolio"
            src="Portfolio.gif"
            link="https://github.com/DanielSteele1/DanielSteele1.github.io"
          >
            <div className="project-description">
              <span className="highlight"> My developer portfolio, </span> and current website. Built by me using
              <span className="highlight"> React.js, HTML, CSS and some Javascript,
              </span> I use it to showcase some of the work I'm most proud of creating.
              <span className="highlight"> Click below to view the source code. </span>
            </div>

          </Project_card>

        </div>

        <div className="project4" >
          <Project_card
            heading="TravelTracker.io (ongoing)"
            src="coming_soon.png"

            link="https://github.com/DanielSteele1/TravelTracker.io"
          >
            <div className="project-description">
              <span className="highlight"> TravelTracker.io is a project that I'm currently working on. </span>
              It's a full-stack application that will allow for users to track where they've been on holiday around the globe.
              They will be able to add photos and descriptions of each trip, view a photo book tied to their account, view potential next holiday destinations,
              and even share their trips with family & friends. <span className="highlight"> Built using React, Node, Express and MongoDB. </span>
            </div>

          </Project_card>
        </div>

        <div className="project5">

          <Project_card
            heading="DoodlePalette"
            src="drawing-app.gif"
            link="https://github.com/DanielSteele1/Drawing-App"
          >

            <div className="project-description">

              <span className="highlight"> DoodlePalette </span> is a somewhat simpler project than the rest, purely intended to reinforce
              <span className="highlight"> my core Javascript skills. </span> It's a drawing app that consists of most features you would expect, such as a
              <span className="highlight"> line width tool, or an undo/redo feature.</span> Users can also
              <span className="highlight"> draw shapes, or save the image as a png. </span>

            </div>

          </Project_card>
        </div>

        <div className="project6">
          <Project_card
            heading="Ongoing Project"
            src="coming_soon.png"
          >
            <div className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </Project_card>
        </div>

      </div>

      {/* <ContactForm /> */}
      <div id="contact" className="heading">  </div> {/* temporary div to ensure nav link isnt broken */}

      <Footer />

    </div >
  );
}