export default function AboutMe(){
    return(
        <div className="container about">
      <div className="row">
        <div className="col-md-4 about-img">
          <img src="assets/images/profile.jpeg" alt="profile" className="img-fluid" />
        </div>

        <div className="col-md-8 about-content">
          <ul className="nav nav-pills about-tab" id="pills-tab" role="tablist">
            <li className="nav-item about-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Profile
              </a>
            </li>
            <li className="nav-item about-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Skills
              </a>
            </li>
            <li className="nav-item about-item">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
          
            <div
              className="tab-pane fade show active tab-detail"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <h1 className="pt-25">Shamima Haque</h1>
              <p>
                I am working as a web developer with more than 3years of
                experience of Local and International online marketplace leading
                website design projects, for the customers. This year, I have
                joined an IT firm named Novus Interactive. Besides, I am training
                some students under my sector for 2 months. I am focused on
                creating clean, robust code with exceptional security and also
                able to achieve compatibility targets.
              </p>

              <a href="images/resume.pdf" target="_blank">
                <button type="button" className="main-button">My Resume</button>
              </a>

            
              <button
                type="button"
                className="another-button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Hire Me
              </button>
             

             
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Hire Me
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div className="modal-body">
                      <form>
                        <div className="modal-body">
                          <div className="form-group">
                            <label htmlFor="name">Your name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Your email</label>
                            <input
                              type="text"
                              name="email"
                              placeholder="Enter your email"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="budget">What is your budget?</label>
                            <select name="budget" className="form-control">
                              <option value="">Select your budget</option>
                              <option value="500">$100 to $500</option>
                              <option value="1000">$500 to $1000</option>
                              <option value="5000">$1000 to $5000</option>
                              <option value="5000">$5000+</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="message">Your message</label>
                            <textarea
                              name="message"
                              rows="4"
                              placeholder="Enter your message"
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="main-button"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" className="another-button">
                            Send Offer
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            

           
            <div
              className="tab-pane fade tab-detail"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="skill pt-25">
                <h6>Front-End</h6>
                <div className="skill-content">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Bootstrap</span>
                  <span>SASS</span>
                  <span>JavaScript</span>
                  <span>jQuery</span>
                </div>
              </div>

              <div className="skill">
                <h6>Server</h6>
                <div className="skill-content">
                  <span>Cpanel</span>
                  <span>SSL</span>
                  <span>Domain &amp; Hosting Configuration</span>
                </div>
              </div>

              <div className="skill">
                <h6>Others</h6>
                <div className="skill-content">
                  <span>WordPress</span>
                  <span>Github</span>
                  <span>WEB Image Optimization</span>
                  <span>Adobe Photoshop</span>
                  <span>Project Planning</span>
                  <span>Client Handling</span>
                </div>
              </div>
            </div>
            

            
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="pt-25">
                <div className="tab-connect">
                  <div className="tab-connect-info">
                    <strong>Phone</strong>
                    <p>+880 1313 924 759</p>
                  </div>

                  <div className="tab-connect-info">
                    <strong>Email</strong>
                    <p>haqueshamima34@gmail.com</p>
                  </div>

                  <div className="tab-connect-info">
                    <strong>Address</strong>
                    <p>68/8-B,Zigatola,Dhanmondi,Dhaka-1209,Bangladesh</p>
                  </div>

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
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div> 
    )
}