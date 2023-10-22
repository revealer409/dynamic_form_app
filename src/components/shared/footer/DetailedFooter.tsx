import React from "react";
import Footer from "./Footer";
import './Footer.css'
function DetailedFooter() {
  return (
    // <!-- Footer -->
    <footer className="text-center text-lg-start bg-dark text-light main-footer">
      {/* <!-- Section: Social media --> */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* <!-- Left --> */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <div>
        
          <a href="https://www.linkedin.com/in/muhammad-kashif-kashi-3a190014b" target="blank" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/revealer409" target="blank" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Links  --> */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Muhammad Kashif Sattar
              </h6>
              <p>
                I am a Software Engineer.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href="#!" className="text-reset">
                 .Net
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                 Azure Cloud
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                 React Js & Native
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Power Bi
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
           
            {/* <!-- Grid column -->

        <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Rawalpindi, Punjab, Pakistan
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                me_kashif@outlook.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +923068672409
              </p>
              <p>
                <i className="fab fa-whatsapp me-3"></i> +923068672409
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <Footer />
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default DetailedFooter;
