import { motion } from "framer-motion";
import React from "react";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";

const DrexelMetLab: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h2 className="begin-section pt-0">Drexel ExCITe Center &nbsp;🐉</h2>
    <time>Nov 12 2015</time>
    <div className="lead begin-section">
      <p>
        Over the summer of 2015, I had the opportunity to intern at Drexel’s
        <Anchor
          content="ExCITe Center"
          href="https://drexel.edu/excite/"
          spaceBefore
          spaceAfter
        />
        in the
        <Anchor
          content="Music Entertainment Technology Lab"
          href="https://drexel.edu/excite/discovery/met-lab/"
          spaceBefore
        />
        . I was supervised by Dr. Youngmoo Kim and the other Drexel STAR
        Scholars bouncing between projects to get a holistic experience with
        various advanced technologies including robotics, computer vision, smart
        fabrics, and digital signal processing.
      </p>
      <img
        className="begin-section"
        width="100%"
        src="https://stradallc.com/wp-content/uploads/2014/03/drexel-excite-4.jpg"
        alt="Drexel ExCITe Center"
      />
      <p>
        The first project I was introduced to was called Dancing Drones. The
        basic idea was to choreograph a team of Parrot AR Drones to fly
        autonomously with each other in-sync to music. The STAR scholars working
        on the project setup cameras around the room to create a 3D environment
        to control the bots. The best part of this project was actually
        discussing with the students some of the fundamentals problems they had
        to deal with. One vivid example was dealing with the AC air flow in the
        building which would slowly drift the bot.
      </p>
      <p>
        After this, I worked with the team behind the Humanoid Robot project
        (HUBO) as a collaboration between Drexel, MIT, Penn, and KAIST. For this
        project, we used MAESTOR, a ROS-based software interface that controls
        the robot’s movement and simulation. ROS was a steep learning curve, but
        after getting more experience with the documentation, I was able to
        control basic movement. Because of my experience in 3D printing, I spent
        a lot of time working with the on-sight printer. The printer was mainly
        used for replacing parts on the robot quickly and with a highly
        customized design.
      </p>
      <p>
        Another project I got introduced to was a digital signal processing
        project with Max MSP. The goal was to intake the digital output of
        Drexel’s Magnetic Resonator Piano (MRP) and create a light show that was
        coordinated to the keys, pitch, and vibrato played. The light would
        display as a LED strip over the keyboard. MSP was also tough to learn
        and incredibly frustrating in the beginning as I already had experience
        with Ableton and found the interface familiar but daunting in terms of
        functionality. MSP really allows you to manipulate every part of the
        signal which became more and more fun as I went along the project.
      </p>
      <p>
        Overall, the entire internship was very insightful as I got to work with
        and talk to a variety of people involved in advanced projects.
      </p>
    </div>
  </motion.main>
);

export default DrexelMetLab;
