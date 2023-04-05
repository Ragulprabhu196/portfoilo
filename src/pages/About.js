import React from "react";
import {  useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            I can  build and maintain both the front-end and the back-end of a website.
            </p>
            <p>
            I can design and create websites and applications for various platforms. 
           
           Develop and maintain web services and interfaces
           Contribute to front-end and back-end development processes
            Build new product features or APIs
           Perform tests, troubleshoot software, and fix bugs
            Collaborate with other departments on projects 
            </p>
            <h2>MY SKILLS</h2>
            <p>
             JavaScript ,HTML ,CSS ,MySQL, Node.js, React.js, MangoDB


            </p>
            
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;