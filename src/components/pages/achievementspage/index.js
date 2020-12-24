import React,{ Component } from 'react';
import './styles.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class AchievementsPage extends React.Component {
  render() {
    return(
      <Element name="Achievements-page-section" className="Achievements-page-section">
        <div className="achievements-container">
          <div className="section-title">Achievements</div>
          <div className="achievements-card">
            <div className="achievements-card-title">Highlights<div className="gradient-line gradient"></div></div>
            <div className="achievements-card-description">
              <div className="achievements-card-item">Bronze medal - International Physics Olympiad<div className="year">2017</div></div>
              <div className="achievements-card-item">All Island best performance - G.C.E. Advanced Level<div className="year">2016</div></div>
              <div className="achievements-card-item">Participation/ National Champion - Asian Physics Olympiad<div className="year">2017</div></div>
              <div className="achievements-card-item">Participation/ National Champion - International Science Olympiad<div className="year">2008</div></div>
              <div className="achievements-card-item">Baden Powell Award - World Organization of Scout Movement<div className="year">2019</div></div>
            </div>
          </div>
          <div className="achievements-card-other">
            <div className="achievements-card-title">Other</div>
            <div className="achievements-card-description">
              <div className="achievements-card-item">1st Runner Up and Best Impromptu Speaker- Speech Olympiad XII<div className="year">2018</div></div>
              <div className="achievements-card-item">First Runner Up - Unilever Business Challenge<div className="year">2018</div></div>
              <div className="achievements-card-item">9th in Sri Lanka - IEEEextreme 13<div className="year">2018</div></div>
              <div className="achievements-card-item">President Guide award<div className="year">2014</div></div>
              <div className="achievements-card-item">Music Visharad Award - Bhathkande University (Luknow- India)<div className="year">2013</div></div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

export default AchievementsPage;