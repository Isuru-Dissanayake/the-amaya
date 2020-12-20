import React,{ Component } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class SkillsPage extends React.Component {
  render() {
    return(
      <Element name="Skills-page-section" className="Skills-page-section">
        <div className="skiils-container">
          <div className="skill-container-row">
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="90, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">Python</div>
            </div>
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="80, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">MATLAB</div>
            </div>
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="40, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">C/C++</div>
            </div>
          </div>
          <div className="skill-container-row">
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="80, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">Tensorflow</div>
            </div>
            <div className="skill-element-center-element">Skils</div>
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="60, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">Solidworks</div>
            </div>
          </div>
          <div className="skill-container-row">
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="60, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">ROS</div>
            </div>
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="70, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">Altium</div>
            </div>
            <div className="skill-element">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"  
                    stroke-dasharray="80, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="skill-name">Git</div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

export default SkillsPage;