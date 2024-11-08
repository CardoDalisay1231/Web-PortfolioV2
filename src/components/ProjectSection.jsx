import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const adjustModalPadding = () => {
  document.body.style.paddingRight =
    window.innerWidth > document.documentElement.clientWidth ? "15px" : "0";
};

const resetModalPadding = () => {
  document.body.style.paddingRight = "0";
};

const ProjectSection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    imgSrc: "",
    info: "",
    title: "",
    technologies: [],
  });

  const sliderData = [
    {
      imgSrc: "images/slider2_1.png",
      info: "This project is still ongoing but is an Enrollment System for my School CvSU - Bacoor.",
      title: "CvSU Enrollment System",
      technologies: ["React/JS", "Node.js (backend)", "Bootstrap(frontend)"],
    },
    {
      imgSrc: "images/slider2_2.png",
      info: "Minekaniko is an simple Inventory System that can be used by any business to manage their inventory.",
      title: "Inventory System",
      technologies: ["html/css", "php", "mySql"],
    },
    {
      imgSrc: "images/slider2_3.png",
      info: "WEBIT. is a psuedo website for a company that sells web development services.",
      title: "WEBIT.",
      technologies: ["CSS/HTML", "BOOTSTRAP"],
    },
    {
      imgSrc: "images/slider2_4.png",
      info: "I created this Artwork  using Adobe Photoshop in March 9, 2018 this is a Vector Art",
      title: "JoJi",
      technologies: ["Adobe Photoshop"],
    },
    {
      imgSrc: "images/slider2_5.png",
      info: "Description of Project 3.",
      title: "Alisson Shore",
      technologies: ["Adobe Photoshop"],
    },
    {
      imgSrc: "images/slider2_6.png",
      info: "I created this artwork to commemorate PewDiePie's  100 million subscribers in August 2019",
      title: "PewDiePie (Felix Arvid Ulf Kjellberg)",
      technologies: ["Adobe Photoshop"],
    },
    {
      imgSrc: "images/slider2_7.png",
      info: "I Designed a Hoodie for my section  in our school UPHSD - Laspinas City 12 ICT 2 Although we didn't  get the chance to produce it i still had fun designing it ",
      title: "Hoodie Project",
      technologies: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      imgSrc: "images/slider2_8.png",
      info: "Also one of my favorite rapper in the philippines i created this Artwork in  Adobe Photoshop  in 2020",
      title: "YZZK",
      technologies: ["Adobe Photoshop"],
    },
    {
      imgSrc: "images/slider2_9.png",
      info: "This Website is just a simple HTML/CSS website when we were in our 2nd year in college",
      title: "CVSU WEBSITE",
      technologies: ["HTML/CSS"],
    },
  ];

  const openModal = (imgSrc, info, title, technologies) => {
    setModalContent({ imgSrc, info, title, technologies });
    setModalShow(true);
    adjustModalPadding();
  };

  return (
    <div id="projects" className="container px-4 py-5 full-screen-height">
      <h6 className="text-center top">See My Projects in Detail</h6>
      <h2 className="tittle display-2">PROJECTS</h2>
      <main>
        {/* First slider without modal */}
        <div className="slider-container left">
          <div
            className="slider"
            style={{
              "--quantity": 10,
              "--width": "clamp(60px, 7vw, 120px)",
              "--height": "clamp(60px, 7vw, 120px)",
            }}
          >
            <div className="list">
              {[...Array(10)].map((_, i) => (
                <div className="item" style={{ "--position": i + 1 }} key={i}>
                  <img
                    src={`images/slider1_${i + 1}.png`}
                    alt={`Slide ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second slider with modal functionality */}
        <div className="slider-container">
          <div
            className="slider"
            reverse="true"
            style={{
              "--width": "clamp(90px, 20vw, 160px)",
              "--height": "clamp(90px, 20vw, 160px)",
              "--quantity": 9,
            }}
          >
            <div className="list">
              {sliderData.map((slider, i) => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(
                      slider.imgSrc,
                      slider.info,
                      slider.title,
                      slider.technologies
                    );
                  }}
                  key={i}
                >
                  <div className="item" style={{ "--position": i + 1 }}>
                    <img src={slider.imgSrc} alt={`Slide ${i + 1}`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* React-Bootstrap Modal */}
      <Modal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          resetModalPadding();
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalContent.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={modalContent.imgSrc}
            alt="Project"
            className="img-fluid mb-3"
          />
          <p>
            <strong>Information:</strong> {modalContent.info}
          </p>
          <p>
            <strong>Technologies Used:</strong>
          </p>
          <ul>
            {modalContent.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectSection;
