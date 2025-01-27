import React from "react";
import Draggable from "react-draggable";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Define variants for different animations
  const profileVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div ref={ref} id="home" className="container full-screen-height">
      <div className="full-screen-height row flex-lg-row-reverse justify-content-center align-items-center text-center g-5 py-3 fade-in-down">
        <motion.div
          className="col-10 col-sm-8 col-lg-4"
          initial="hidden"
          animate={controls}
          variants={profileVariants}
          transition={{ duration: 1 }}
        >
          <Draggable>
            <img
              src="./images/profile.JPG"
              className="rounded-circle d-block mx-lg-auto img-fluid profile"
              draggable="false"
              style={{
                cursor: "grab",
              }}
              onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
              onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
              alt="profile"
              width={400}
              height={500}
              loading="lazy"
            />
          </Draggable>
        </motion.div>
        <motion.div
          className="col-lg-4"
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="head-title">Hello I'm Jm</h2>
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb- name">
            JAN MANUEL M. BAGARES
          </h1>
          <p className="lead fw-bolder">
            Front End Developer <br />
            Digital Artist
          </p>
          <div className="gap-2 d-md-block justify-content-center social">
            <div>
              <a href="https://github.com/CardoDalisay1231">
                <i className="bi bi-github h1" type="button" />
              </a>
              <a href="https://www.facebook.com/jm.bagares.14/">
                <i className="bi bi-facebook h1" type="button" />
              </a>
            </div>
            <h1 className="lead fw-bolder">
              <a
                href="/Web-PortfolioV2/JAN-MANUEL-BAGARES_CV.pdf"
                download="JAN-MANUEL-BAGARES_CV.pdf"
                className="text-decoration-none cv"
              >
                Download my CV
              </a>
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
