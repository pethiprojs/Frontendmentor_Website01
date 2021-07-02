import imagem from "./images/image-header-desktop.jpg";
import "./styles.css";

export default function App() {
  var screenSize = screen.width;
  return (
    <div className="App">
      {screenSize >= 1000 && (
        <div className="main-group desktopVersion">
          <div className="main-left">
            <h1>
              <span>
                Get{" "}
                <span style={{ color: "hsl(277, 64%, 61%)" }}>insights</span>{" "}
                that help your business grow.{" "}
              </span>
            </h1>
            <section>
              <p>
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>

              <section className="tiny-container">
                <div className="stats">
                  <h2>10k+</h2>
                  <p>companies</p>
                </div>
                <div className="stats">
                  <h2>314</h2>
                  <p>templates</p>
                </div>
                <div className="stats">
                  <h2>12m+</h2>
                  <p>queries</p>
                </div>
              </section>
            </section>
          </div>
          <div className="main-right">
            <img
              src={imagem}
              style={{ opacity: "0.60", height: "100%" }}
              alt="imagem"
            />
          </div>
        </div>
      )}
      {screenSize <= 1000 && (
        <div className="main-group mobileVersion">
          <div className="main-top">
            <img
              src={imagem}
              style={{ opacity: "0.60", height: "100%" }}
              alt="imagem"
            />
          </div>
          <div className="main-bottom">
            <h1>
              <span>
                Get{" "}
                <span style={{ color: "hsl(277, 64%, 61%)" }}>insights</span>{" "}
                that help your business grow.{" "}
              </span>
            </h1>
            <section>
              <p>
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>

              <section className="tiny-container">
                <div className="stats">
                  <h2>10k+</h2>
                  <p>companies</p>
                </div>
                <div className="stats">
                  <h2>314</h2>
                  <p>templates</p>
                </div>
                <div className="stats">
                  <h2>12m+</h2>
                  <p>queries</p>
                </div>
              </section>
            </section>
          </div>
        </div>
      )}
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="blank">
          Frontend Mentor
        </a>
        . Coded by <a href=" #">Your Name Here</a>.
      </div>
    </div>
  );
}
