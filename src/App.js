//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Carousel from './Carousel.js';
import Canvas from './Canvas.js';
//import ContactForm from './Contact.js';
import DownloadIcon from '@mui/icons-material/Download';
import { DownloadOutlined } from '@mui/icons-material';
//socials 

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

function Profile() {
  return (

    <img
      className="profile"
      // src="Daniel Steele profile picture.png"
      src="Sunglasses.jpg"
      alt="profile"

    />

  )
}

function Navigation() {

  const handleDownloadAndView = (event) => {

    event.preventDefault()

    // log event to simple analytics
    window.sa_event('cv_downloaded');

    // download and view document
    const link = document.createElement('a');
    link.href = '/CV (updated Nov24).pdf'; 
    link.download = 'CV (updated Nov24).pdf';
    link.click();

  };

  return (

    <div className="navigation">

      <div className="nav-logo-heading">
        <h1> Daniel Steele - Full Stack Developer  </h1>
      </div>

      <div class="nav-item">
        
          <div class="nav-heading" id="download">
            <a href="#" target="_blank" onClick={handleDownloadAndView} rel="noopener noreferrer">
            <DownloadOutlined fontSize="large" />
            </a>

          </div>
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

function StackCard({ src, description }) {

  return (
    <div className="stack-card">

      <img src={src} />
      <div id="description"> {description} </div>

    </div>
  )
}

export default function MyApp() {

  return (
    <div>

      <Canvas />
      <Navigation />

      <div id="about"> </div>

      <div className="profile-container">
        <Profile />

        <div className="profile_Desc">
          <p>
            I'm Daniel Steele, a <span className="highlight"> Full Stack Developer </span>
            that's recently graduated with <span className="highlight"> a bachelors
              degree from the University of Plymouth, UK. </span>
            I love to code, and I'm looking for
            oppurtunities in the UK to
            show off my development skills.
          </p>
        </div>

        <div className="socials">
          <div className="socials1">
            <Picture6 />
          </div>
          <div className="socials2">
            <Picture5 />
          </div>
        </div>
      </div>

      <div className="heading"> <h1> Welcome to my Portfolio Website </h1> </div>

      <div className="stack">

        <div className="stack-desc-container">
          <div className="stack-desc">
            <p>
              Having recently graduated from the <span className="highlight">  University of Plymouth in 2024, </span> and with a passion for creativity, I'm eager to immerse myself in the world of <span className="highlight">full-stack development. </span>

              At my time at university, I've learnt to code with web technologies such as <span className="highlight"> JavaScript, React, MongoDB & MySQL. </span>I've also created a variety of <span className="highlight"> projects with different public web APIs, </span> which you can view below this page.
              <br></br> <br></br>
              I'm always looking to expand on my current knowledge and teach myself new techologies in and around web development. <span className="highlight"> Learning different approaches keeps me motivated and excited to code.</span>
              <br></br> <br></br>
              As an occasional hobby in my free time, I like to experiment with <span className="highlight"> coding passion projects in OpenGL (C++), </span> and have a keen interest in computer hardware. To unwind, I like to play video games with friends.
              <br></br> <br></br>
              If you would like to keep up with some of my work and what I'm getting up to, you should <span className="highlight">connect with me on <a className="link" href="https://www.linkedin.com/in/daniel-steele-b06443198/"> LinkedIn</a> and on <a className="link" href="https://github.com/DanielSteele1"> Github.</a></span></p>
          </div>
        </div>

        <div className="heading"> <h1> My Tech Stack </h1> </div>

        <div className="stack-img-container">

          <div className="stack-img-row">
            <StackCard
              src="HTML.png"
              description="HTML"
            />

            <StackCard
              src="CSS.png"
              description="CSS"
            />

            <StackCard
              src="JS.png"
              description="JavaScript"
            />

          </div>

          <div className="stack-img-row">

            <div id="react-logo">
              <StackCard
                src="react.png"
                description="React.js"
              />
            </div>

            <StackCard
              src="express.png"
              description="Express.js"
            />

            <StackCard
              src="node.png"
              description="NodeJS"
            />

            <StackCard
              src="mongoDB.png"
              description="MongoDB"
            />

          </div>

          <div className="stack-img-row">
            <StackCard
              src="Figma.png"
              description="Figma"
            />

            <StackCard
              src="git.png"
              description="Git"
            />

            <StackCard
              src="MaterialUI.png"
              description="MaterialUI"
            />

          </div>

          <div className="stack-img-row">


          </div>



        </div>
      </div>

      <div id="projects"> </div>

      <div className="heading"> <h1> My recent projects </h1> </div>
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
              <span className="highlight">EarthSim </span> is a project that I built in C++ for my Game development class,
              <span className="highlight"> using OpenGL and various libraries </span> to create a 3D environment, with the goal of simulating our
              <span className="highlight"> local system of planets, </span>
              exposing me to core <span className="highlight">game development principles and GLSL.</span>
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

              <span className="highlight">  DoodlePalette </span> is a somewhat simpler project than the rest, purely intended to reinforce
              <span className="highlight"> my core Javascript skills. </span> It's a drawing app that consists of most features you would expect, such as a
              <span className="highlight"> line width tool, or an undo/redo feature.</span> Users can also
              <span className="highlight"> draw shapes, or save the image as a png. </span>

            </div>

          </Project_card>
        </div>
      </div>

      <div id="contact" className="heading"> <h1> Get in Touch </h1>  </div>

      <div className="contact-desc-container">
        <div className="contact-desc">

          Have a question or enquiry? You can contact me via email, and i'll be happy to get back to you as soon as possible.
          <br></br>
          Also, feel free to connect and chat with me on linkedin.
          <br></br>
          <a href="mailto:Dsteele1906@gmail.com"> Dsteele1906@gmail.com </a>
          <br></br>

        </div>
      </div>

      <Footer />

    </div>
  );
}