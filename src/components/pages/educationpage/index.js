import React,{ Component } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class EducationPage extends React.Component {

  changeEducationCard = () => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.changeEducationCard);
  }

  render() {
    return(
      <Element name="Education-page-section" className="Education-page-section">
        <div className="education-page-title">
          <div className="hover-to-tomato">E</div>
          <div className="hover-to-tomato">d</div>
          <div className="hover-to-tomato">u</div>
          <div className="hover-to-tomato">c</div>
          <div className="hover-to-tomato">a</div>
          <div className="hover-to-tomato">t</div>
          <div className="hover-to-tomato">i</div>
          <div className="hover-to-tomato">o</div>
          <div className="hover-to-tomato">n</div>
        </div>
        <div className="education-page-cards-container">
          <div className="educatio-page-card">

          </div>
          <div className="educatio-page-card">

          </div>
          <div className="educatio-page-card">

          </div>
        </div>
      </Element>
    )
  }
}

export default EducationPage;