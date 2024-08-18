//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Carousel from './Carousel.js';
import Canvas from './Canvas.js';
//import ContactForm from './Contact.js';

//socials 

function Picture5() {

  const handleLinkedinClick = () => {

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

  return (

    <div class="navigation">

      {/* <div class="nav-item">
        <h1 class="nav-heading"> <img src="download-img.png" />  </h1>
      </div> */}


        <div class="nav-logo-heading">
          <h1> Daniel Steele - Full Stack Developer  </h1>
        </div>

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

function Project_card({ src, children, heading, link }) {
  return (

    <div class="Project_card">
      <div id="heading"> {heading} </div>
      <img src={src} />
      <div id="description" class="noselect"> <p>{children}</p> </div>
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

      <div class="profile-container">
        <Profile />

        <div class="profile_Desc">
          <p>
          I'm Daniel Steele, a <span class="highlight"> Full Stack Developer </span>
          that's recently graduated with <span class="highlight"> a bachelors
          degree from the University of Plymouth, UK. </span>
          I love to code, and I'm looking for
          oppurtunities in the UK to
          show off my development skills.
          </p>
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
            <p>
            Having recently graduated from the <span class="highlight">  University of Plymouth in 2024,</span> and with a passion for creativity, I'm eager to immerse myself in the world of <span class="highlight">full-stack development. </span>
            
            At my time at university, I've learnt to code with web technologies such as <span class="highlight"> Javascript, React, MongoDB & MySQL. </span>I've also created a variety of <span class="highlight"> projects with different public web APIs, </span> which you can view below this page.
            <br></br> <br></br>
            I'm always looking to expand on my current knowledge and teach myself new techologies in and around web developement. <span class="highlight">Learning different approches keeps me motivated and excited to code.</span>
            <br></br> <br></br>
            As an occasional hobby in my free time, I like to mess around with<span class="highlight"> coding passion projects in OpenGL (C++). </span> I have an interest in computer hardware, and also enjoy playing video games with friends to unwind after a long day.
            <br></br> <br></br>
            If you would like to keep up with some of my work and what i'm getting up to, you should <span className="highlight">connect with me on LinkedIn and Github.</span></p>
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
            src="SkyCompass.gif"
            link="https://github.com/DanielSteele1/COMP3000"
            > 
            <span className="highlight"> Skycompass is a web based application </span>
            that allows users to monitor up to date weather patterns across the globe. 
            It utilises multiple <span className="highlight"> APIs to create a dashboard</span> displaying weather maps, 
            as well a forecast page that <span className="highlight">predicts weather for up to 7 days.</span>

            </Project_card>
        </div>

        <div class="project2">
          <Project_card
            heading="EarthSim"
            src="EarthSim.gif"
            link="https://github.com/DanielSteele1/COMP3016_2"
          >
            <span className="highlight">EarthSim </span> is a project that I had built in C++ for my Game development class, 
            <span className="highlight"> using OpenGL and various libraries </span> to create a 3D environrment, with the goal of simulating our <span className="highlight"> local system of planets, </span>  
            exposing me to core <span className="highlight">game development principles and GLSL.</span>
          </Project_card>
        </div>

        <div class="project3">
          <Project_card
            heading="Ongoing Project"
            src="coming_soon.png"
            description=" Ongoing Project "

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


      <div id="contact" class="heading"> <h1> Get in Touch </h1>  </div>

      <div class="contact-desc-container">
        <div class="contact-desc">

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