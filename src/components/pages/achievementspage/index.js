import React,{ Component } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class AchievementsPage extends React.Component {
  render() {
    return(
      <Element name="Achievements-page-section" className="Achievements-page-section"></Element>
    )
  }
}

export default AchievementsPage;