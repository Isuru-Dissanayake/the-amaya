import React,{ Component } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { faGraduationCap, faSchool, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
class EducationPage extends React.Component {
  countGpa = () => {
    console.log('hhkk')
  }
  changeEducationCard = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1000){
      document.getElementById('education-page-cards-container').style.flexDirection = 'column';
      document.getElementById('Education-page-section').style.height = '1700px';
    } else {
      document.getElementById('education-page-cards-container').style.flexDirection = 'row';
      document.getElementById('Education-page-section').style.height = '800px';
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.changeEducationCard);
  }
  
  render() {
    return(
      
      <Element id="Education-page-section" name="Education-page-section" className="Education-page-section fade-in">
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
        <div id="education-page-cards-container" className="education-page-cards-container">
          <div className="educatio-page-card card">
            <FontAwesomeIcon icon={faSchool} className="education-page-card-icon"/>
            <div className="education-page-card-title">Maliyadeva Girls’ College</div>
            <div className="education-page-card-title">G.C.E. Advanced Level</div>
            <div className="education-page-card-subtitle">(Physical Science)</div>
            <div className="education-page-card-number-title">Rank</div>
            <div className="education-page-card-number">01</div>
            <div className="education-page-card-subtitle">January 2003 – August 2016</div>
          </div>
          <div className="educatio-page-card card">
            <FontAwesomeIcon icon={faGraduationCap} className="education-page-card-icon"/>
            <div className="education-page-card-title">University of Moratuwa, Sri Lanka</div>
            <div className="education-page-card-title">B.Sc. Engineering</div>
            <div className="education-page-card-subtitle">(Electronics and Telecommunications)</div>
            <div className="education-page-card-number-title">GPA</div>
            <div className="education-page-card-number">4.14</div>
            <div className="education-page-card-subtitle">September 2017 – Present</div>
            
          </div>
          <div className="educatio-page-card card">
            <FontAwesomeIcon icon={faBriefcase} className="education-page-card-icon"/>
            <div className="education-page-card-title">University of Sydney</div>
            <div className="education-page-card-title">Visiting Student Researcher</div>
            <div className="education-page-card-subtitle">(Internship)</div>
            <div className="education-page-card-number-title">Months</div>
            <div className="education-page-card-number">06</div>
            <div className="education-page-card-subtitle">October 2020 – Present</div>
          </div>
        </div>
      </Element>
      
    )
  }
}

export default EducationPage;