export default function Contact(){
    return(
        <div  className="container">
        <div  className="row">
          <div  className="col-md-6 details-left connect-info">
            <div  className="info-item">
              <strong>Phone</strong>
              <p  className="mb-0">+880 1313 924 759</p>
            </div>
  
            <div  className="info-item">
              <strong>Email</strong>
              <p  className="mb-0">haqueshamima34@gmail.com</p>
            </div>
  
            <div  className="info-item">
              <strong>Address</strong>
              <p  className="mb-0">68/8-B,Zigatola,Dhanmondi,Dhaka-1209,Bangladesh</p>
            </div>
          </div>
  
          <div  className="col-md-6">
            <form  className="contact-form">
              <input type="text" name="name" placeholder="Your name" />
              <input type="text" name="email" placeholder="Your email" />
              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
  
              <button type="submit" name="send"  className="main-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}