import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
    <div id="portfolio" className="container">
      <h1 className="text-center about mt-5">
        <span className="text-dark">Live</span>Projects
      </h1>

      <div className="row">

        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://imaxexcellenceawards.imax.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/imax.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Photography"
              />
              <div className="overlay">
                <div className="name1">Imax Excellence Awards</div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://greendot.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/greendot.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="School"
              />
              <div className="overlay">
                <div className="name1">Greendot School</div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://anklerenjoy.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/ankler.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Hair Salon"
              />
              <div className="overlay">
                <div className="name1">Ankler Enjoy</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://www.focusfeatures.com/the-phoenician-scheme"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/focusfeatures.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Hair Salon"
              />
              <div className="overlay">
                <div className="name1">Focus Features</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://stage.charter.flyhouse.us/flyhousemobile/ccharterlogin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/flyhouse.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Hair Salon"
              />
              <div className="overlay">
                <div className="name1">Fly House</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://www.warnerbros.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/warnerbros.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Hair Salon"
              />
              <div className="overlay">
                <div className="name1">Warner Bros</div>
              </div>
            </a>
          </div>
        </div>
        

      </div>

      

    </div>


    <div id="portfolio" className="container">
      <h1 className="text-center about mt-5">
        <span className="text-dark">Staging</span>Projects
      </h1>

      <div className="row">
        
        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://movie-explorer-ten-sage.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/movie-explorer.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Hair Salon"
              />
              <div className="overlay">
                <div className="name1">Movie Explorer</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://shopping-cart-project-rose.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/shopping-cart.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Hair Salon"
              />
              <div className="overlay">
                <div className="name1">Shopping Cart</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card1 mt-5">
            <a
              href="https://expense-tracker-project-blond-mu.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Images/expense-tracker.png"
                className="img-fluid image"
                style={{ height: "29vh" }}
                alt="Hair Salon"
              />
              <div className="overlay">
                <div className="name1">Txpense Tracker</div>
              </div>
            </a>
          </div>
        </div>
        

      </div>

      {/* CONTACT BUTTON */}
      <div id="wrap2" className="mt-5 text-center pb-5">
        <Link to="/contact" className="btn-slide">
          <span className="circle">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="title">Contact Us</span>
          <span className="title-hover">Click here</span>
        </Link>
      </div>

    </div>
    </>
  );
}

export default Portfolio;
