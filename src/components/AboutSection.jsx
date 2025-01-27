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
            className="col d-flex flex-column align-items-start gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <div
              className="card shadow p-4 about-card"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <div className="row">
                <div className="col-md-6 d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-suitcase-lg fs-4 me-2" />
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Skills</h4>
                  </div>
                  <p className="fw-bold mb-0">
                    React, JavaScript <br />
                    HTML/CSS, Bootstrap <br />
                    Photoshop, Illustrator
                  </p>
                </div>
                <div className="col-md-6 d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-backpack2 fs-4 me-2" />
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Education</h4>
                  </div>
                  <p className="fw-bold mb-0">
                    CVSU Bacoor - BSc Computer Science <br />
                    UPHSD Las Piñas - ICT (Senior High)
                  </p>
                </div>
              </div>

              <hr className="my-4" />

              <p className="myself fw-bold mb-0 text-center">
                I'm Jan Manuel Bagares from T.S Cruz, Las Piñas City. I'm a 3rd
                year Computer Science student at CVSU Bacoor. I'm a self-taught
                developer and designer, passionate about creating innovative
                solutions. Although I'm still a newbie, I'm eager to learn more
                and improve my skills. I'm a team player and a quick learner.
                I'm excited to collaborate and create something amazing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
