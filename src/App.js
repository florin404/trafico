import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./logo.png";
import Mobel from "./images/mobel.png";
import Illustration from "./images/Illustration.png";
import Tech from "./images/tech.png";
import { BsArrowRight } from "react-icons/bs";
import Question from "./images/Question.png";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import questions from "./Questions";
import Footer from "./images/BG.png";
import Mask from "./images/Mask Group.png";
import SecondVan from "./images/Second-van.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link as Scroll } from "react-scroll";

function App() {
  const [show, handleShow] = useState(false);
  const [show2, handleShow2] = useState(false);
  const [show3, handleShow3] = useState(false);
  const [show4, handleShow4] = useState(false);
  const [display, setDisplay] = useState(false);
  const someQuestions = questions.slice(0, 10);
  const [data, setData] = useState(someQuestions);

  const showQuestions = () => {
    setDisplay(!display);
    if (!display) {
      setData(questions);
    } else if (display) {
      setData(someQuestions);
    }
  };

  console.log(display);
  const transitionMobel = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    }
    if (window.scrollY > 400) {
      handleShow2(true);
    }
    if (window.scrollY > 1200) {
      handleShow3(true);
    }
    if (window.scrollY > 3500) {
      handleShow4(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionMobel);
    return () => window.removeEventListener("scroll", transitionMobel);
  }, []);
  return (
    <div className="app">
      <div className="image">
        <nav className="navbar">
          <img src={Logo} className="logo" alt="" />

          <div className="navbar-links">
            <ul>
              <li>
                <a>
                  <Scroll
                    activeClass="activeClass"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                  >
                    ABOUT
                  </Scroll>
                </a>
              </li>
              <li>
                <a>
                  <Scroll
                    activeClass="activeClass"
                    to="apply"
                    spy={true}
                    smooth={true}
                  >
                    HOW TO
                  </Scroll>
                </a>
              </li>
              <li>
                <a>
                  <Scroll
                    activeClass="activeClass"
                    to="question"
                    spy={true}
                    smooth={true}
                  >
                    FAQS
                  </Scroll>
                </a>
              </li>
              <li>
                <a>
                  <button
                    onClick={() => alert("Work in progress")}
                    className="contact"
                  >
                    CONTACT US
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <h1>Your awesome traffic permit consultant.</h1>
        <button onClick={() => alert("Work in progress")}>
          <span className="started">GET STARTED</span>{" "}
          <BsArrowRight
            style={{
              fontSize: "3.2vw",
              marginLeft: "1vw",
              marginTop: "0.5vw",
              marginBottom: "0.5vh",
            }}
          />
        </button>
        <img src={Mobel} className={`mobel ${show && "mobel-slide"} `} alt="" />
      </div>

      {/* ABOUT US */}

      <div className="about">
        <h1>ABOUT US</h1>
        <p>
          The occupational traffic permit is one of the most important things in
          the company when carrying out freigh transport. In fact, it is a
          prerequisite for doing business traffic at all.
        </p>
        <div className="about-container">
          <p>
            How do you do when you need to obtain a commercial traffic permit
            for freight transport to your business?
          </p>
        </div>
      </div>
      <img
        src={Illustration}
        className={`illustration ${show2 && "illustration-slide"} `}
        alt=""
      />

      {/* HOW TO APPLY */}

      <div className="apply-section">
        <div className="apply">
          <h1>HOW TO APPLY</h1>
          <p>
            When applying for a traffic permit, there are certain requirements
            that you must meet that are included in the examination:
            requirements for professional knowledge, solid establishment, good
            reputation and financial resources. Important to remember is to
            confirm your application for a traffic permit by the company's
            company signer or CEO.
          </p>
        </div>
        <img src={Tech} className={`tech ${show3 && "tech-slide"}`} alt="" />

        <div className="faq">
          <div className="question-background"></div>
          <img src={Question} className="question" alt="" />
          <div className="faq-title">
            <h1>FAQ</h1>
            <h2>Questions and Answers on Professional Traffic Permits:</h2>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="accordion">
              {data.map((item) => {
                const { question, answer, id } = item;
                return (
                  <div className="accordion-item" id={`question${id}`}>
                    <a className="accordion-link" href={`#question${id}`}>
                      <p>{question}</p>
                      <BsPlus className="plus" />
                      <AiOutlineMinus className="minus" />
                    </a>
                    <div className="answer">
                      <p>{answer}</p>
                    </div>
                  </div>
                );
              })}
              <div className="accordion-item" id="loadmorez">
                <a
                  onClick={() => showQuestions()}
                  href="#loadmore"
                  className="accordion-link more"
                >
                  <p className="load-more">
                    {!display ? "LOAD MORE" : "SHOW LESS"}
                  </p>
                  {!display ? (
                    <BsPlus className="plus" />
                  ) : (
                    <AiOutlineMinus className="minus-display" />
                  )}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-background">
          <div className="footer-container">
            <p>
              We provide traffic management consultants so you get started
              quickly, contact us for a quote today!
            </p>
          </div>
          <img
            src={SecondVan}
            className={`secondVan ${show4 && "secondVan-slide"}`}
            alt=""
          />
          <img src={Mask} className="mask" alt="" />

          <div className="get-started-section">
            <form action="#">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email address"
              />
              <button type="button" onClick={() => alert("Work in progress")}>
                <span className="started-footer">GET STARTED</span>
                <BsArrowRight
                  style={{
                    fontSize: "2.5vw",
                    marginLeft: "1vw",
                    marginTop: "0.5vw",
                    marginBottom: "0.5vh",
                  }}
                />
              </button>
            </form>
          </div>
          <nav className="navbar-footer">
            <img src={Logo} className="logo2" alt="" />

            <div className="navbar-links-footer">
              <ul>
                <li>
                  <a>
                    <Scroll
                      activeClass="activeClass"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-50}
                    >
                      ABOUT
                    </Scroll>
                  </a>
                </li>
                <li>
                  <a>
                    <Scroll
                      activeClass="activeClass"
                      to="apply"
                      spy={true}
                      smooth={true}
                    >
                      HOW TO
                    </Scroll>
                  </a>
                </li>
                <li>
                  <a>
                    <Scroll
                      activeClass="activeClass"
                      to="question"
                      spy={true}
                      smooth={true}
                    >
                      FAQS
                    </Scroll>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="footer-bottom">
            <p>Copyright @ 2019</p>
            <div className="footer-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="icon" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter className="icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
