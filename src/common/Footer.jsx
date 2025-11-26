import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-light text-dark pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="footerbar d-flex justify-content-between">
              <h5 className="fw-bold text-danger mb-5 navbar-brand fs-1">
                Kocina
              </h5>
              <div className="mt-3">
                <a
                  href="#"
                  className="text-dark me-3  border border-dark rounded-circle text-dark text-decoration-none p-2"
                >
                  <span
                    className="fa fa-facebook-f"
                    style={{ color: "#1877F2" }}
                  />
                </a>
                <a
                  href="#"
                  className=" me -3 border border-dark rounded-circle text-dark text-decoration-none p-2 "
                >
                  <span
                    className="fa fa-instagram"
                    style={{ color: "#E1306C" }}
                  />
                </a>
                <a
                  href="#"
                  className="text-dark ms-3 border border-dark rounded-circle text-dark text-decoration-none p-2"
                >
                  <span
                    className="fa fa-twitter"
                    style={{ color: "#1877F2" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <ul>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Presentations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Professionals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Stores
                  </a>
                </li>
              </ul>
              <p className="small mt-5">
                Made by Unbound Studio in Guatemala City
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <ul>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Local Meetups
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <ul>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Our Initiatives
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Giving Back
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Communities
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3  col-12 mb-4">
              <ul>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Contact Form
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Work With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
