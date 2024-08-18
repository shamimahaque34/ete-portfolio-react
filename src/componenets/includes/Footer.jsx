import { Link, NavLink } from "react-router-dom";
export default function Footer(){
    return(
        <footer>
        <div className="container">
          <div className="row footer">
            <div className="col-md-6 footer-content">
              <h3>About Me</h3>
              <p>
                I am a Web Developer, based in Dhaka, Bangladesh. I did my bachelor
                in Computer Science and Engineering. I also underwent several
                trainings in Web Development at various renowned training
                institutions. I am expert in HTML/HTML5, CSS/CSS3, Bootstrap 4, Tailwind CSS,
                Wordpress Theme Customization, Wordpress Theme Development, JavaScript, Php, Laravel, Vue Js and more.
              </p>
            </div>
  
            <div className="col-md-3 footer-content">
              <h3>Quick Links</h3>
              <div className="links">
                <ul>
                  <li><NavLink to="/about">About Me</NavLink></li>
                  <li><NavLink to="/services">Services</NavLink></li>
                  <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                  <li><NavLink to="/contact">Contact Me</NavLink></li>
                </ul>
              </div>
            </div>
  
            <div className="col-md-3 footer-content">
              <h3>Get in Touch</h3>
              <div className="links">
                <ul>
              <li><a href="#">+880 1313 924 759</a></li>
                  <li><a href="#">haqueshamima34@gmail.com</a></li>
                  <li>
                    <a href="#">
                      68/8-B,Zigatola,Dhanmondi,Dhaka-1209,Bangladesh
                    </a>
                  </li>
                  <li>
                    <div className="footer-connect">
                      <div className="tab-connect-info">
                      <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/shamima.haque.92560"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
  
                          <li>
                            <a
                              href="https://www.linkedin.com/in/shamima-haque-dev"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
  
                          <li>
                            <a
                              href="https://github.com/shamimahaque34"
                              target="_blank"
                            >
                              <i className="fab fa-github"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  </ul>
                  </div>
              </div>
            </div>
          </div>

      <div className="copy-right">
        
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <p className="mb-0">
                    All Rights Reserved &copy; 2024 by
                    <Link to="/about">Shamima Haque</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}