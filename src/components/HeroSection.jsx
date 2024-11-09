
import React from "react";

export default function HeroSection() {
  return (
    <div id="home" className="container full-screen-height">

      <div className="full-screen-height row flex-lg-row-reverse justify-content-center align-items-center text-center g-5 py-3 fade-in-down">
        <div className="col-10 col-sm-8 col-lg-4">
          <img
            src="./images/profile.JPG"
            className="rounded-circle d-block mx-lg-auto img-fluid profile"
            alt="profile"
            width={400}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-4">
          <h2 className="head-tittle ">Hello i'm Je-em</h2>
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 name">
            JAN MANUEL M. BAGARES
          </h1>
          <p className="lead fw-bolder">
            Front End Developer <br />
            Digital Artist
          </p>
          <div className="gap-2 d-md-block justify-content-center social">
            
            <div>
              <a href="https://github.com/CardoDalisay1231">
                {" "}
                <i className="bi bi-github h1" type="button" />
              </a>
              <a href="https://www.facebook.com/jm.bagares.14/">
                <i
                  className="bi bi-facebook h1"
                  type="button"
                  href="https://www.facebook.com/jm.bagares.14/"
                />
              </a>
            </div>
            <h1 className="lead fw-bolder">
  <a href="/Web-PortfolioV2/JAN-MANUEL-BAGARES_CV.pdf" download="JAN-MANUEL-BAGARES_CV.pdf" className="text-decoration-none cv">
    Download my CV
  </a>
</h1>

          </div>
        </div>
      </div>
    </div>
  );
}
