import './App.css';
import { Quality, Customer1, Interior, Interior2, Interior3, Shipping, Warranty } from './assets/images';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Designers</h1>
        <nav>
          <ul>
            <li><a href="App.js">Home</a></li>
            <li><a href="App.js">Features</a></li>
            <li><a href="App.js">About</a></li>
            <li><a href="App.js">Contacts</a></li>
          </ul>
        </nav>
        <div class="icons">
          <button><i class="material-icons">search</i></button>
          <button><i class="material-icons">menu</i></button>
        </div>
      </header>

      <div class="container">
        <div class="page1" id="page1">
          <section class="emptybox"></section>
          <img src={Interior} alt="interior_design" />
          <button>
            <i class="material-icons">keyboard_arrow_down</i>
          </button>
        </div>

        <div class="page2" id="page2">
          <section class="p2_head">
            <section class="horizontal_line"></section>
            <h1>
              Benefits you get when <br />
              using our services
            </h1>
          </section>
          <section class="features">
            <div class="card">
              <img src={Quality} alt="quality" />
              <h2>Best Quality</h2>
              <p>
                All of our furniture uses the best materials and choices for our
                customers.
              </p>
            </div>
            <div class="card">
              <img src={Shipping} alt="shipping" />
              <h2>Free Shipping</h2>
              <p>
                Free shipping everytime you buy furniture from us without
                exeption.
              </p>
            </div>
            <div class="card">
              <img src={Warranty} alt="warranty" />
              <h2>Warranty</h2>
              <p>
                Every time you buy our furniture products, you will get a warranty
                without exception.
              </p>
            </div>
          </section>
        </div>

        <div class="page3" id="page3">
          <img src={Interior2} alt="interior_design" />
          <div>
            <h1>
              We provide you the <br />
              best experience
            </h1>
            <p class="para">
              You don't worry about the results because all of these interiors are
              made by people who are professionals in their fields with an elegant
              and luxurious style and with premium quality materials.
            </p>
            <div class="numbers">
              <h2>17</h2>
              <p>
                Years <br />
                experience
              </p>
            </div>
            <div class="numbers">
              <h2>85</h2>
              <p>
                Awward <br />
                gained
              </p>
            </div>
            <div class="numbers">
              <h2>537</h2>
              <p>
                Furnitures <br />
                sold
              </p>
            </div>
            <button>
              <a href="App.js">Learn More</a><i class="material-icons">east</i>
            </button>
          </div>
        </div>

        <div class="page4" id="page4">
          <div>
            <h1>
              We provide the best <br />
              process experience
            </h1>
            <h3>01</h3>
            <h2>Briefing</h2>

            <p>
              <div class="vertical_line"></div>
              First thing you determine the concept and model you want, then choose
              what colors and materials you want to use in your furniture.
            </p>
            <h3>02</h3>
            <h2>Processing</h2>

            <p>
              <div class="vertical_line"></div>
              When the briefing process is complete and what the client wants has
              been achieved. Then we carry out the execution of the desired concept.
            </p>
            <h3>03</h3>
            <h2>Finishing</h2>
            <p>
              <div class="vertical_line"></div>
              After the process is complete, we will immediately carry out the
              finishing stage and we do it carefully and make sure there are no
              mistakes.
            </p>
          </div>
          <img src={Interior3} alt="interior_design" />
        </div>

        <div class="page5" id="page5">
          <section class="p5_head">
            <h1>
              What our customers <br />
              are saying
            </h1>
          </section>
          <section class="testimonial">
            <AliceCarousel responsive={{ 0: { items: 1, }, 1024: { items: 2 } }} autoPlay infinite disableDotsControls autoPlayInterval={"3000"}>
              <div class="slider">
                <i class="material-icons">format_quote</i>
                <h2>
                  The results given are very <br />
                  satisfying1
                </h2>
                <p>
                  "Being able to work with the exterior is an extraordinary thing
                  they provide excellent service and the results given are very
                  satisfying by giving elegant impression."
                </p>
                <div class="customers">
                  <img src={Customer1} alt="Customer_pic" />
                  <h4>Emma Star</h4>
                  <p>Product Manager</p>
                </div>
              </div>
              <div class="slider">
                <i class="material-icons">format_quote</i>
                <h2>
                  The results given are very <br />
                  satisfying2
                </h2>
                <p>
                  "Being able to work with the exterior is an extraordinary thing
                  they provide excellent service and the results given are very
                  satisfying by giving elegant impression."
                </p>
                <div class="customers">
                  <img src={Customer1} alt="Customer_pic" />
                  <h4>Emma Star</h4>
                  <p>Product Manager</p>
                </div>
              </div>
              <div class="slider">
                <i class="material-icons">format_quote</i>
                <h2>
                  The results given are very <br />
                  satisfying3
                </h2>
                <p>
                  "Being able to work with the exterior is an extraordinary thing
                  they provide excellent service and the results given are very
                  satisfying by giving elegant impression."
                </p>
                <div class="customers">
                  <img src={Customer1} alt="Customer_pic" />
                  <h4>Emma Star</h4>
                  <p>Product Manager</p>
                </div>
              </div>
              <div class="slider">
                <i class="material-icons">format_quote</i>
                <h2>
                  The results given are very <br />
                  satisfying4
                </h2>
                <p>
                  "Being able to work with the exterior is an extraordinary thing
                  they provide excellent service and the results given are very
                  satisfying by giving elegant impression."
                </p>
                <div class="customers">
                  <img src={Customer1} alt="Customer_pic" />
                  <h4>Emma Star</h4>
                  <p>Product Manager</p>
                </div>
              </div>
            </AliceCarousel>
          </section>
        </div>

        <div class="page6" id="page6">
          <h1>
            Subscribe to get the latest <br />
            news about us
          </h1>
          <p>
            We recommend you to subscribe to our newspaper, enter your <br />
            email below to get our daily update about us.
          </p>
          <form class="email_form" name="emailform">
            <input class="email" placeholder="Enter your email address" id="email" name="email"></input>
            <input class="button" type="submit" value="Subscribe"></input>
          </form>

        </div>
      </div>

      <footer id="footer">
        <section class="slogan">
          <h1 className="App-logo" style={{ color: "var(--clr-secondary)" }}>Designers</h1>
          <p>
            We will help you to make an elegant and luxurious interior designed by
            professional interior designers.
          </p>
        </section>
        <section class="about">
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </section>
        <section class="company">
          <h4>Company</h4>
          <ul>
            <li>Our team</li>
            <li>Partner with us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </section>
        <section class="support">
          <h4>Support</h4>
          <ul>
            <li>Account</li>
            <li>Support center</li>
            <li>Feedback</li>
            <li>Contact us</li>
            <li>Accesbility</li>
          </ul>
        </section>
        <section class="get_in_touch">
          <h4>Get in touch</h4>
          <ul>
            <li>Question or feedback</li>
            <li>We'd love to hear from you</li>
          </ul>
          <div class="social_media">
            <button><i href="www.instagram.com" class="fa fa-instagram"></i></button>
            <button><i href="www.facebook.com" class="fa fa-facebook"></i></button>
            <button><i href="www.twitter.com" class="fa fa-twitter"></i></button>
          </div>
        </section>

      </footer>
    </div>
  );
}

export default App;