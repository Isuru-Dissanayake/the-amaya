import React,{ Component } from 'react';
import './styles.css'
import amayaPhoto from '../../../assets/images/amaya.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class EducationPage extends React.Component {
  render() {
    return(
      <Element name="Education-page-section" className="Education-page-section"></Element>
    )
  }
}

export default EducationPage;