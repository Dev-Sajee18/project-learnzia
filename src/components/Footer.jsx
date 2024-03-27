import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 footer-item">
            <h4>Finance Business</h4>
            <p>Vivamus tellus mi. Nulla ne cursus elit,vulputate. Sed ne cursus augue hasellus lacinia sapien vitae.</p>
            <ul class="social-icons">
              <li><a rel="nofollow" to="fb" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li><a to="instagram"><i class="fa fa-twitter"></i></a></li>
              <li><a to="instagram"><i class="fa fa-linkedin"></i></a></li>
              <li><a to="instagram"><i class="fa fa-behance"></i></a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-item">
            <h4>Useful Links</h4>
            <ul class="menu-list">
              <li><a to="instagram">Vivamus ut tellus mi</a></li>
              <li><a to="instagram">Nulla nec cursus elit</a></li>
              <li><a to="instagram">Vulputate sed nec</a></li>
              <li><a to="instagram">Cursus augue hasellus</a></li>
              <li><a to="instagram">Lacinia ac sapien</a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-item">
            <h4>Additional Pages</h4>
            <ul class="menu-list">
              <li><a to="instagram">About Us</a></li>
              <li><a to="instagram">How We Work</a></li>
              <li><a to="instagram">Quick Support</a></li>
              <li><a to="instagram">Contact Us</a></li>
              <li><a to="instagram">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-item">
            <h4>feel free to know more</h4>
            <ul class="menu-list">
              <li><a to="instagram">Contact - 0771234567</a></li>
              <li><a to="instagram">e-Mail - sajsajee19@gmail.com</a></li>
              <li><a to="instagram">Instagram - Learnzia</a></li>
              <li><a to="instagram">Facebook - Learnzia</a></li>
              <li><a to="instagram">twitter - Learnzia </a></li>
            </ul>
          </div>
          {/* <div class="col-md-3 footer-item last-item">
            <h4>Contact Us</h4>
            <div class="contact-form">
              <form id="contact footer-contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="filled-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
    
    <div class="sub-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p>Copyright &copy; 2024-Learnzia
            
            <a rel="nofollow noopener" to="fb" target="_blank"></a></p>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Footer;