import React,{ Component } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class SkillsPage extends React.Component {
  render() {
    return(
      <Element name="Skills-page-section" className="Skills-page-section"></Element>
    )
  }
}

export default SkillsPage;