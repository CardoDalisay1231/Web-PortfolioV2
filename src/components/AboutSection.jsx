import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <>
      <div ref={ref} id="about" className="container px-4 py-5">
        <motion.h6
          className="text-center top"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Learn More About Me
        </motion.h6>
        <motion.h2
          className="tittle display-2"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          ABOUT
        </motion.h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center justify-content-center align-items-center g-5 py-5">
          <motion.div
            className="col-10 col-sm-8 col-lg-6 justify-content-center"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img
              src="./images/IMG_2743.JPG"
              className="rounded-5 d-block mx-lg-auto img-fluid profile align-items-center"
              alt="profile"
              width={500}
              height={400}
            />
          </motion.div>
          <motion.div
            className="col d-flex flex-column align-items-start gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <div className="col">
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="col d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-start fs-4 ">
                    <i className="bi bi-suitcase-lg" />
                  </div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis skills ">
                    Skills
                  </h4>
                  <p className="skills fw-bold">
                    React, JavaScript <br />
                    HTML/CSS, Bootstrap <br />
                    Photoshop, Illustrator <br />
                  </p>
                </div>
                <div className="col d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-start fs-4 ">
                    <i className="bi bi-backpack2" />
                  </div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis educ">
                    Education
                  </h4>
                  <p className=" educ fw-bold">
                    CVSU Bacoor- Bachelor of Science in Computer Science
                    <br />
                    Grade 11 & 12 UPHSD Laspiñas - Information and Communication
                    Technology
                  </p>
                </div>
              </div>
            </div>
            <p className="myself fw-bold">
              I'm Jan Manuel Bagares from T.S Cruz, LasPiñas City. I'm a 3rd
              year student at CVSU Bacoor i'm a computer science student. I'm a
              self-taught developer and a designer. I'm passionate about
              creating something new and innovative. Although I'm still a
              newbie, I'm eager to learn more and improve my skills. I'm a team
              player and a quick learner. I'm excited to collaborate with you
              and create something amazing.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
