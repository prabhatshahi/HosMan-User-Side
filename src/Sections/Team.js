import "../index.css";
import { BsGithub, BsLinkedin, BsLink45Deg } from "react-icons/bs";

import prabhat from "../Assets/prabhat.jpg";
import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the creators</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  <img src={prabhat} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Prabhat Ranjan Shahi</h4>
                    <span className="text-secondary">Full Stack Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="https://github.com/prabhatshahi" target="_blank">
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/prabhatranjan06"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/prabhatshahi" target="_blank">
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
