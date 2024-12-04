//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Carousel from './Carousel.js';
import ReactTypingEffect from 'react-typing-effect';

import Canvas from './Canvas.js';
import ContactForm from './Contact.js';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Picture5() {

  const handleLinkedinClick = () => {

    window.sa_event('linkedin_clicked');
    window.location.href = "https://www.linkedin.com/in/daniel-steele1/"

  };

  return (
    <div>
      <img
        className="picture"
        src="linkedin.png"
        alt="picture"
        style={({ borderRadius: '75%' })}
        width={50}
        height={50}
        onClick={handleLinkedinClick}
      />
    </div>
  )
}

function Picture6() {

  const handleGithubClick = () => {

    window.sa_event('github_clicked');
    window.location.href = "https://github.com/DanielSteele1"

  };

  return (

    <img
      className="picture"
      src="github-logo.png"
      alt="picture"
      style={({ borderRadius: '75%' })}
      width={50}
      height={50}
      onClick={handleGithubClick}

    />

  )
}

function LandingSection() {

  const handleDownloadAndView = (event) => {

    event.preventDefault()

    // log event to simple analytics
    window.sa_event('cv_downloaded');

    // download and view document
    const link = document.createElement('a');
    link.href = '/CV__updated_Nov24_.pdf';
    link.download = 'CV__updated_Nov24_.pdf';
    link.click();

  };

  return (
    <div className="landing-content-container"> 

      <Profile />

      <p1 className="landing-title"> Daniel Steele </p1>

      <div className="landing-desc">
        <ReactTypingEffect
          className="landing-desc"
          text={["< Full Stack Engineer />", "< Passionate Developer />", "< Tech Enthusiast />"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={10000}
          typingDelay={90}
        />
      </div>

      <div className="download-button-container">
        <button className="download-button">
          <a href="#" target="_blank" onClick={handleDownloadAndView} rel="noopener noreferrer">
            <h1 className="download-text">
              <FileDownloadIcon fontSize="large" sx={{ display: 'flex', color: '#c47dff', padding: '5px' }} />
              Download Resume </h1>
          </a>
        </button>
      </div>

      <div className="landing-button-container">
        <button className="landing-button"> <a href="#about">   <KeyboardDoubleArrowDownRoundedIcon sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '70px' }} /> </a> </button>
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

  return (

    <div className="navigation">

      <div className="nav-logo-heading">
        <h1> Daniel Steele - Full Stack Developer  </h1>
      </div>


      <div className="nav-item">
        <h1 className="nav-heading"> <a href="#about"> About </a>  </h1>
      </div>

      <div className="nav-item">
        <h1 className="nav-heading"> <a href="#projects">  Projects  </a> </h1>
      </div>

      <div className="nav-item">
        <h1 className="nav-heading">  <a href="#contact"> Contact </a> </h1>
      </div>

    </div>

  )
}

function Project_card({ src, children, heading, link }) {

  return (
    <div className="Project_card">

      <img id="image" src={src} />
      <div id="heading"> {heading} </div>
      <div id="project-description" > <p>{children}</p> </div>

      <div class="button-container">
        <div id="button" onClick={() => window.sa_event('project_viewed')}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button> View Project Repo </button> </a>
        </div>
      </div>
    </div>
  )
}


function Footer() {

  return (

    <div className="footer">

      <div className="footer-item">

        <div className="item-link1">
          <Picture6 />
        </div>

        <div className="item-link2">
          <Picture5 />
        </div>
      </div>

      <div className="footer-item">
        <h2> Daniel Steele ©2024 </h2>
      </div>
    </div>
  )
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

          <div className="content-desc">
            <ul style={{ padding: '10px' }}>

          <li className="content-desc-title"style={{ gap: '20px', padding: '5%', justifyContent: 'center' }}>
            I'm Daniel Steele, a <span className="highlight"> Full Stack Developer </span>
            that's recently graduated with <span className="highlight"> a bachelors
            degree from the University of Plymouth, UK. </span>
            I'm looking for
            oppurtunities in the UK to
            show off my development skills.
          </li>

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

        <div className="project3">
          <Project_card
            heading="Ongoing Project"
            src="coming_soon.png"
          >
            <div className="project-description">
              Ongoing project
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

        <div className="project5" >
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

        <div className="project6">

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
      </div>

      <ContactForm />
      <Footer />

    </div >
  );
}