//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Carousel from './Carousel.js';
import { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Canvas from './Canvas.js';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import Tooltip from '@mui/material/Tooltip';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import TerminalSharpIcon from '@mui/icons-material/TerminalSharp';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Typography from '@mui/material/Typography';

import ConstructionIcon from '@mui/icons-material/Construction';


import { SiJavascript, SiVite } from "react-icons/si";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";

import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaBook } from "react-icons/fa";

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

    if (typeof window.sa_event === 'function') {

      window.sa_event('cv_downloaded');
    }
    else {

      console.error("Simple Analytics isn't loaded")
    }

    // download and view document
    const link = document.createElement('a');
    link.href = '/CV_Daniel_Steele_march_25.pdf';
    link.download = '/CV_Daniel_Steele_march_25.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  return (
    <div className="landing-content-container">
      <div className="landing-greeting-emoji-container">
        <span className="landing-greeting">Hey, I'm</span>
      </div>
      <p1 className="landing-title"> Daniel Steele  </p1>

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

      <span className="landing-para"> I'm currently looking for full-time opportunities in the UK. If you'd like to get in touch,
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
              <FileDownloadIcon fontSize="large" sx={{ display: 'flex', padding: '5px', paddingTop: '10px', verticalAlign: 'middle' }} />
              Download Resume </h1>
          </a>
        </button>

      </div>

      <div className="landing-button-container">
        <button className="landing-button"> <a href="#about">   <KeyboardDoubleArrowDownRoundedIcon sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '70px', color: '#FF4C98' }} /> </a> </button>
      </div>
    </div >
  )

}

function Profile() {
  return (

    <img
      className="profile"
      src="Daniel_Steele.jpg"
      alt="profile"
      loading="lazy"
    />

  )
}

function Navigation() {
  useEffect(() => {
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    function toggleMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }

    hamburger.addEventListener("click", toggleMenu);

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return (

    <div className="navigation">

      <div className="nav-logo-heading">
        <span className="nav-title">  <div className="logo">D<span className="logo-backtick">/</span>S</div> </span>
      </div>
      <div className="nav-logo-heading">
        <span className="nav-update"> 🔥Currently working on <a href="https://github.com/DanielSteele1/FocusDev" className="update-link"> <div classname="highlight">FocusDev</div> </a> & redeveloping <a href="https://github.com/DanielSteele1/Portfolio-V2" className="update-link"> <div classname="highlight"> this portfolio site </div> </a> with vite. </span>
      </div>

      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="nav-menu">
        <div className="nav-item">
          <span className="nav-heading nav-link"> <a href="#about"> About </a> </span>
        </div>
        <div className="nav-item">
          <span className="nav-heading nav-link"> <a href="#projects"> Projects </a> </span>
        </div>
        <div className="nav-item">
          <span className="nav-heading nav-link"> <a href="#contact"> Contact </a> </span>
        </div>
      </div>
    </div>

  )
}

function Project_card({ src, children, heading, link }) {
  return (
    <div className="Project_card">
      <div className="Project_card-image">
        {typeof src === 'string' ? (
          <img src={src} alt={heading} loading="lazy" />
        ) : (
          src
        )}
      </div>
      <div className="Project_card-content">
        <div className="Project_card-heading">{heading}</div>
        <div className="Project_card-description">{children}</div>
        <div className="Project_card-button-container">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="Project_card-button" onClick={() => window.sa_event('Project_viewed', { project: heading })}>View Project </button>
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

  const currentYear = new Date().getFullYear();

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
              <GithubIcon sx={{ fontSize: '35px', padding: '5px', color: '#FF4C98' }} onClick={handleGithubClick} />
            </a>

            <a onClick={handleLinkedinClick} href="https://www.linkedin.com/in/daniel-steele1/" target="_blank">
              <LinkedInIcon sx={{ fontSize: '35px', padding: '5px', color: '#FF4C98' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="footer-strip">
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
          <span className="footer-connect">Daniel Steele ©{currentYear}. All rights reserved.</span>
        </div>

      </div>
    </div>
  );
}


function BackToTop() {
  return (
    <Tooltip title="Back to top" placement="top">
      <div className="backToTop" >
        <div> <span> <a href="#top"> <KeyboardArrowUpRoundedIcon sx={{ display: 'flex,', fontSize: '70px', color: '#FF4C98' }} /> </a> </span> </div>
      </div>
    </Tooltip>
  );
}

function StackCard({ description, title, spinLogo, iconComponent: IconComponent, iconComponent2: IconComponent2 }) {
  return (
    <div className="stack-card">
      <div id="stack-heading">
        <div>
          {IconComponent && (
            <IconComponent className={spinLogo ? "react-logo-spin" : ""} style={{ fontSize: '40px', margin: '10px', color: '#FF4C98' }} />
          )}

          {IconComponent2 && (
            <IconComponent2 style={{ fontSize: '40px', margin: '10px', color: '#FF4C98' }} />
          )}
        </div>
        <h1>{title}</h1>
      </div>
      <div id="description"> <span> {description} </span> </div>
    </div>
  );
}

function MyTimeline() {

  return (
    <Timeline position="alternate" className="timeline">
      <TimelineItem>
        <TimelineOppositeContent >
          <span className="highlight"> 2011 - 2017 </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#D53D7C' }}> <ImportContactsTwoToneIcon sx={{ verticalAlign: 'middle', color: 'white', fontSizesize: '10px' }} /> </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#D53D7C' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            <span className="highlight">  Secondary Education </span>
          </Typography>
          <Typography> <span className="highlight"> ✨ Where my passion for technology began </span> </Typography>
          <li> First explored how websites were made and experimented with Developer Tools and modifying content.</li>
          <li> Developed a curiosity for how exactly websites are structured, which awakened a deep interest in coding and tech as a whole. </li>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          <span className="highlight"> 2018 - 2021 </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#D53D7C' }}> <SchoolRoundedIcon sx={{ verticalAlign: 'middle', color: 'white' }} /> </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#D53D7C' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            <span className="highlight"> Btec Extended Diploma in Computing </span>

          </Typography>
          <Typography> <span className="highlight"> South Devon College, Devon, United Kingdom 📍 </span> </Typography>

          <li> Gained a strong foundation in software development principles, learning programming and scripting languages,
            such as C# and C++, HTML/CSS, JavaScript and MySQL.  </li>
          <li> Completed coursework in programming, covering C++ development,
            front-end web development with JavaScript, networking principles, SQL/database management, and UI/UX fundamentals.</li>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <span className="highlight"> 2021 - 2024 </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#D53D7C' }}> <CodeRoundedIcon sx={{ verticalAlign: 'middle', color: 'white' }} /> </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#D53D7C' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            <span className="highlight"> BSc (Hons) in Computer Science </span>
          </Typography>
          <Typography> <span className="highlight"> 📍 University of Plymouth, Plymouth - Devon, UK </span></Typography>
          <li> Specialised in Full-Stack Development, learnt to use ReactJS, NodeJS and other modern web technologies. </li>
          <li> Developed a Full-Stack web application for my final year project, which included working with REST APIs and database managment. </li>
          <li> Launched my Portfolio Website in June 2024, my first professional project demonstrating my ability to develop real world applications. </li>
          <li> Started looking into libraries such as MaterialUI and Mantime to level up my front end & UI skills.</li>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem >
        <TimelineOppositeContent>
          <span className="highlight">  2024 - Present </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="filled" sx={{ bgcolor: '#D53D7C' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            <span className="highlight">  Personal Projects <ConstructionIcon />  </span>
          </Typography>
          <Typography> <span className="highlight"> Building Cool Stuff for the Web ✨ </span> </Typography>
          <li> Since graduating, I’ve been building full-stack applications to deepen my experience with the MERN stack. </li>
          <li> While I'm competent at full-stack development, I'm always striving to learn and experiment with new libraries and languages.
            I'm currently learning to use TypeScript, GraphQL and Framer Motion in some of my latest projects. </li>

        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}


function CallToAction() {

  return (
    <div className="Cta">
      <div className="Cta-title"> Congrats! You hit the end. You can click the arrow to go back to the top. </div>
      <span className="Cta-description"> I'm always developing something in my free time, so be sure to check back later in case i launch a project 👀 </span>

    </div>
  );
}


export default function MyApp() {

  return (
    <div>

      <Canvas />
      <div id="top"> </div>
      <Navigation />

      <div className="landing-section-container">

        <LandingSection />

      </div>
      <div id="about"> </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="heading"> About Daniel Steele </div>

      <div className="main-content">

        <div className="content-desc-container">

          <div className="content-profile">

            <Profile> </Profile>

            <ul style={{ padding: '10px' }}>

              <li className="content-title" style={{ gap: '10px', justifyContent: 'center', padding: '10px' }}>
                I'm Daniel Steele, a <span className="highlight"> Full Stack Developer </span>
                that's recently graduated with <span className="highlight"> a bachelors
                  degree from the University of Plymouth, UK. </span>
                I'm looking for oppurtunities in the UK to show off my development skills.
              </li>
            </ul>

          </div>

          <div className="content-desc">
            <ul>

              <CodeRoundedIcon style={{ display: 'flex', fontSize: '40px', paddingLeft: '10px', marginBottom: '5px', color: '#FF4C98' }}> </CodeRoundedIcon>
              <li style={{ gap: '10px' }}>
                Having recently graduated from the <span className="highlight">  University of Plymouth in 2024, </span> and with a passion for creativity, I'm eager to immerse myself in the world of <span className="highlight">full-stack development. </span>
              </li>
              <br></br>

              <SchoolRoundedIcon style={{ display: 'flex', color: '#FF4C98', fontSize: '40px', paddingLeft: '10px', marginBottom: '5px' }}> </SchoolRoundedIcon>
              <li style={{ padding: '10px' }}>
                At my time at university, I've learnt to code with web technologies such as <span className="highlight"> JavaScript, ReactJS, MongoDB & MySQL. </span>I've also created a variety of <span className="highlight"> projects using REST APIs, </span> which you can view below this page.
              </li>
              <br></br>
              <TerminalSharpIcon style={{ display: 'flex', color: '#FF4C98', fontSize: '40px', paddingLeft: '10px', marginBottom: '5px' }}> </TerminalSharpIcon>
              <li style={{ gap: '10px' }}>
                I'm always looking to expand on my current knowledge and teach myself new technologies in and around web development. <span className="highlight"> Learning different approaches keeps me motivated and excited to code.</span>
              </li>
              <br></br>
              <SportsEsportsRoundedIcon style={{ display: 'flex', color: '#FF4C98', fontSize: '40px', paddingLeft: '10px', marginBottom: '5px' }}> </SportsEsportsRoundedIcon>
              <li style={{ gap: '10px' }}>
                As an occasional hobby in my free time, I like to experiment with <span className="highlight"> coding passion projects in OpenGL (C++), </span> and have a keen interest in computer hardware. To unwind, I like to play video games with friends.
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div className="github-commit-chart">

        <div className="heading"> My Github Contributions </div>
        <div className="heading-desc"><span> Github Contributions in the last year</span></div>

        <div className="commit-chart">
          <iframe src="https://www.gitch.art/api/og/danielsteele1?color=FF4C98" width="1200" height="200" frameborder="0" scrolling="no"></iframe>
        </div>

      </div>

      <div className="heading">  My Skills and Experience </div>

      <div className="stack-card-container">

        <StackCard

          title="HTML & CSS"
          iconComponent={FaHtml5}
          description="Full understanding and experience in the best practices of HTML5, Alongside a mastering of core CSS principles to quickly create beautiful UI."
        />

        <StackCard
          title="JavaScript"
          iconComponent={SiJavascript}
          src="JS.png"
          description="Proficient in client-side JavaScript (ES6+, DOM, REST API) and server-side JavaScript, crafting efficient and scalable solutions across the full stack."
        />

        <div id="react-logo">
          <StackCard
            title="ReactJS + Vite"
            iconComponent={FaReact}
            iconComponent2={TbBrandVite}
            src2="vite-logo.png"
            description="Expertise with using react, leveraging React Hooks alongside React Router. Also exploring the use of Vite with React for optimized, fast development."
            spinLogo={true}
          />
        </div>

        <StackCard
          title="NodeJS"
          iconComponent={FaNodeJs}
          description="Knowledge in leveraging NodeJS in order to build server-side applications."
        />

        <StackCard
          title="MongoDB"
          iconComponent={BiLogoMongodb}
          description="Knowledge of creating and querying NoSQL databases with MongoDB to store application data."
        />

        <StackCard
          title="Git"
          iconComponent={FaGitAlt}
          description="Proficient in making use of version control systems like git and github with all of my projects."
        />

        <StackCard
          iconComponent={FaFigma}
          title="Figma"
          description="Extensive knowledge of using Figma to design and prototype ideas and wireframes for my projects."
        />

        <StackCard
          title="MaterialUI"
          iconComponent={SiMui}
          description="Experience in leveraging Material-UI to create modern & clean looking UI components."
        />

        <StackCard
          title="C++"
          iconComponent={BiLogoCPlusPlus}
          description="One of my hobbies is coding with C# and C++. I like to create scenes and games with OpenGL. "
        />

        <StackCard
          title="TypeScript & GraphQL"
          iconComponent={FaBook}
          description="Currently, I'm also in the process of experimenting with TypeScript & playing around with GraphQL in order to level up my skills."
        />
      </div>

      <div id="projects"> </div>

      <div className="heading"> My Featured Projects  </div>
      <div className="heading-desc"><span> A list of my Personal Projects </span></div>

      <div className="projects">

        <div className="project1">
          <Project_card
            heading="FocusDev - Developer Workload Dashboard"
            src="FocusDev.gif"
            //{<TrendingUpRoundedIcon sx={{ fontSize: '200px', marginRight: '350px', color: '#1DB954' } } />}
            loading="lazy"
            link="https://github.com/DanielSteele1/UtilitiesApp"
          >
            <div className="project-description">
              <span className="project-highlight"> Ongoing Project </span>
              <span className="react-highlight"> ReactJS </span>
              <span className="javascript-highlight"> JavaScript </span>
              <span className="mongo-highlight"> MongoDB </span>
              <span className="project-highlight"> REST API </span>
            </div>

            <br></br>
            <div className="project-description">
              FocusDev is primarily developed for developers to organise thier workload into one location. The project consists of a dashboard that includes all sorts of useful features for daily work.
              For example, if a developer has to handle a ticket, keep track of meetings or needs to copy paste code snippets over and over, they can add it here and keep on top of things.
              <br></br>
              <br></br>
              Developers can also connect thier github to the app in order to see different statistics, <span className="highlight">such as contributions, forks and the last project they worked on. </span>
              Features include <span className="highlight"> a Notes app, Reusable code snippet feature, Calender, Github commit graph w/ stats </span> to name a few.
            </div>

          </Project_card>
        </div>

        <div className="project2">
          <Project_card
            heading="Developer Portfolio v2"
            src="Portfolio-v2.png"
            loading="lazy"
            link="https://github.com/DanielSteele1/Portfolio-V2"
          >

            <div className="project-description">
              <span className="project-highlight"> Ongoing Project </span>
              <span className="react-highlight"> ReactJS </span>
              <span className="react-highlight"> TypeScript </span>
              <span className="highlight"> Vite </span>

            </div>
            <br></br>

            <div className="project-description">

              I'm currently in the process of rebuilding this website as i've outgrown this site.
              <span className="highlight"> The new website uses TypeScript & Vite as opposed to CRA, </span>
              and it's code structure will be much more cleaner & modular,
              in order to properly showcase how far my skills have come in the last 6 months. It's currently in development, but
              you can view the project's code below.
              <span className="highlight"> I hope to launch it soon on this domain, so stay tuned. </span>

            </div>

          </Project_card>

        </div>

        <div className="project3">

          <Project_card
            heading="SkyCompass - Global Weather Tracker"
            src="SkyCompass.gif"
            loading="lazy"
            link="https://github.com/DanielSteele1/COMP3000"
          >
            <div className="project-description">
              <span className="react-highlight"> ReactJS </span>
              <span className="javascript-highlight"> JavaScript </span>
              <span className="mongo-highlight"> MongoDB </span>
              <span className="project-highlight"> REST API </span>

            </div>
            <br></br>

            <div className="project-description">
              <span className="highlight"> Skycompass is a web-based application </span>
              that allows users to monitor up-to-date weather patterns across the globe.
              It utilises multiple <span className="highlight"> APIs to create a dashboard</span> displaying weather maps,
              as well a forecast page that <span className="highlight">predicts weather for up to 7 days.</span> Using <span className="highlight">MongoDB & Bcrypt </span> hashing for security,
              users can favourite locations for a more personalised experience.
            </div>

          </Project_card>
        </div>

        <div className="project4">
          <Project_card
            heading="EarthSim"
            src="EarthSim.gif"
            loading="lazy"
            link="https://github.com/DanielSteele1/COMP3016_2"
          >

            <div className="project-description">
              <span className="cplusplus-highlight"> C++ </span>
              <span className="opengl-highlight"> OpenGL </span>

            </div>
            <br></br>

            <div className="project-description">
              <span className="highlight">EarthSim </span> is a project that I built in C++,
              <span className="highlight"> using OpenGL and various libraries </span> to create a 3D environment, with the goal of simulating our
              <span className="highlight"> local system of planets, </span> exposing me to core <span className="highlight">game development principles and GLSL.</span>
            </div>
          </Project_card>
        </div>

        <div className="project5">

          <Project_card
            heading="DoodlePalette"
            src="drawing-app.gif"
            loading="lazy"
            link="https://github.com/DanielSteele1/Drawing-App"
          >

            <div className="project-description">
              <span className="react-highlight"> ReactJs </span>
              <span className="javascript-highlight"> JavaScript </span>

            </div>

            <div className="project-description">

              <span className="highlight"> DoodlePalette </span> is a somewhat simpler project than the rest, purely intended to reinforce
              <span className="highlight"> my core Javascript skills. </span> It's a drawing app that consists of most features you would expect, such as a
              <span className="highlight"> line width tool, or an undo/redo feature.</span> Users can also
              <span className="highlight"> draw shapes, or save the image as a png. </span>

            </div>

          </Project_card>
        </div>

        <div className="project6" >
          <Project_card
            heading="TravelTracker.io"
            src="coming_soon.png"
            loading="lazy"
            link="https://github.com/DanielSteele1/TravelTracker.io"
          >
            <div className="project-description">
              <span className="project-highlight"> Ongoing Project </span>
              <span className="react-highlight"> ReactJS </span>
              <span className="javascript-highlight"> JavaScript </span>
              <span className="mongo-highlight"> MongoDB </span>
              <span className="project-highlight"> REST API </span>

            </div>
            <br></br>

            <div className="project-description">
              <span className="highlight"> TravelTracker.io is a project that I'm currently working on. </span>
              It's a full-stack application that will allow for users to track where they've been on holiday around the globe.
              They will be able to add photos and descriptions of each trip, view a photo book tied to their account, view potential next holiday destinations,
              and even share their trips with family & friends. <span className="highlight"> Built using ReactJS, NodeJS, Express and MongoDB. </span>
            </div>

          </Project_card>
        </div>

        <div className="timeline-container">
          <div className="heading"> My Developer Journey </div>

          <MyTimeline />

        </div>

        <div className="call-to-action">

          <CallToAction />

        </div>

      </div>

      <BackToTop />

      {/* <ContactForm /> */}
      <div id="contact" className="heading">  </div> {/* temporary div to ensure nav link isnt broken */}

      <Footer />

    </div >
  );
}