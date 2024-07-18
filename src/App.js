//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Carousel from './Carousel.js';
import Canvas from './Canvas.js';
//import ContactForm from './Contact.js';

//socials 

function Picture5() {

  const handleLinkedinClick = () => {

    window.location.href = "https://www.linkedin.com/in/daniel-steele-b06443198/"

  };

  return (
    <div>
      <img
        className="picture"
        src="linkedin.png"
        alt="picture"
        style={({ borderRadius: '75%' })}
        width={55}
        height={55}
        onClick={handleLinkedinClick}
      />
    </div>
  )
}

function Picture6() {

  const handleGithubClick = () => {

    window.location.href = "https://github.com/DanielSteele1"

  };

  return (

    <img
      className="picture"
      src="github-logo.png"
      alt="picture"
      style={({ borderRadius: '75%' })}
      width={55}
      height={55}
      onClick={handleGithubClick}

    />

  )
}

function Profile() {
  return (

    <img
      className="profile"
      src="Daniel Steele profile picture.png"
      alt="profile"

    />

  )
}

function Navigation() {

  return (

    <div class="navigation">

      {/* <div class="nav-item">
        <h1 class="nav-heading"> <img src="download-img.png" />  </h1>
      </div> */}

      <div class="nav-item">
        <h1 class="nav-heading"> <a href="#about"> About </a>  </h1>
      </div>

      <div class="nav-item">
        <h1 class="nav-heading"> <a href="#projects">  Projects  </a> </h1>
      </div>

      <div class="nav-item">
        <h1 class="nav-heading">  <a href="#contact">Contact</a> </h1>
      </div>


    </div>

  )
}

function Project_card({ src, description, heading, link }) {
  return (

    <div class="Project_card">
      <div id="heading"> {heading} </div>
      <img src={src} />
      <div id="description" class="noselect"> {description} </div>
      <div id="button" > <a href={link} target="_blank">  <button> View Project </button> </a> </div>

    </div>
  )
}


function Footer() {

  return (

    <div class="footer">

      <div class="footer-item">

        <div class="item-link1">
          <Picture6 />
        </div>

        <div class="item-link2">
          <Picture5 />
        </div>
      </div>

      <div class="footer-item">
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

      <div id="navigation-line"> </div>
      <div id="about"> </div>
      <div class="heading"> <h1> Daniel Steele - Full Stack Developer  </h1>  </div>

      <div class="profile-container">
        <Profile />

        <div class="profile_Desc">
          I'm Daniel Steele, a Full Stack Developer
          that's recently graduated with a bachelors 
          degree from the University of Plymouth, UK.
          <br></br>
          <br></br>
          I love to code, and I'm looking for
          oppurtunities in the UK to
          show off my development skills.
        </div>

        <div class="socials">
          <div class="socials1">
            <Picture6 />
          </div>
          <div class="socials2">
            <Picture5 />
          </div>
        </div>
      </div>

      <div class="heading"> <h1> Welcome to my Portfolio Website </h1> </div>

      <div class="stack">

        <div class="stack-desc-container">
          <div class="stack-desc">
            Having recently graduated from the University of Plymouth in 2024, and with a passion for creativity, I'm eager to immerse myself in the world of full stack development.
            <br></br> 
            <br></br>
            At my time at university, I've learnt to code with technologies such as Javascript, React, MongoDB & MySql. I've also created a variety of projects with different public web API's, which you can view below this page. 
            <br></br> 
            <br></br> 
            I thrive to teach myself new technologies and libraries in the field. 

            As an occasional hobby in my free time, I like to code passion projects with OpenGL (C++). I also have an interest in PC hardware.
          </div>
        </div>

        <div class="heading"> <h1> My Tech Stack: </h1> </div>

        <div class="stack-img-container">

          <div class="stack-img-row">
            <StackCard
              src="HTML.png"
              description="HTML"
            />
            <StackCard
              src="Figma.png"
              description="Figma"
            />
            <StackCard
              src="node.png"
              description="NodeJS"
            />
          </div>

          <div class="stack-img-row">
            <StackCard
              src="CSS.png"
              description="CSS"
            />
            <StackCard
              src="express.png"
              description="Express.js"
            />
            <StackCard
              src="mongoDB.png"
              description="MongoDB"
            />
          </div>

          <div class="stack-img-row">
            <StackCard
              src="JS.png"
              description="JavaScript"
            />
            <StackCard
              src="react.png"
              description="React.js"
            />
            <StackCard
              src="git.png"
              description="Git"
            />
          </div>

        </div>
      </div>

      <div id="projects"> </div>

      <div class="heading"> <h1> My recent projects: </h1> </div>
      <div class="projects">

        <div class="project1">

          <Project_card
            heading="SkyCompass"
            src="SkyCompass.png"
            description=" SkyCompass is a web based application that allows users to monitor up to date weather patterns across the globe. 
            It utilises multiple APIs to create a dashboard displaying weather maps, 
            as well a forecast page that predicts weather for up to 7 days."
            link="https://github.com/DanielSteele1/COMP3000"


          />

        </div>

        <div class="project2">
          <Project_card
            heading="EarthSim"
            src="EarthSIm.png"
            description="EarthSim is a project that I had built in C++ for my Game development class, 
            using OpenGL and various libraries to create a 3D environrment, with the goal of simulating our local system of planets,  
            exposing me to core game development principles and GLSL."
            link="https://github.com/DanielSteele1/COMP3016_2"

          />
        </div>

        <div class="project3">
          <Project_card
            heading="Ongoing Project"
            src="coming_soon.png"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

          />
        </div>

        <div class="project4" >
          <Project_card
            heading="Ongoing Project"
            src="coming_soon.png"
            description=" Ongoing Project "

          />
        </div>

        <div class="project5" >
          <Project_card
            heading="Ongoing Project"
            src="coming_soon.png"
            description="Ongoing Project"

          />
        </div>

        <div class="project6" >
          <Project_card
            heading="Ongoing Project"
            src="coming_soon.png"
            description=" Ongoing Project "

          />
        </div>
      </div>

    
      <div id="contact" class="heading"> <h1> Get In Touch </h1>  </div>

       <div class="contact-desc-container">
        <div class="contact-desc"> 
          
          Have a question or enquiry? You can contact me via email, and i'll be happy to get back to you as soon as possible. <br></br>
          If preferred, you can also message me via my LinkedIn page, where i'd be happy to connect with you. <br></br>
          <br></br>
           <a href="mailto:Dsteele1906@gmail.com"> Dsteele1906@gmail.com </a> 
         </div>
       </div>

      <Footer />

    </div>
  );
}