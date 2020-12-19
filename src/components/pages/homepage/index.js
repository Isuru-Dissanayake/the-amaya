import React,{ Component } from 'react';
import './styles.css'
import amayaPhoto from '../../../assets/images/amaya.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeDescription : false
    }
    this.navItems = ['About','Education', 'Research', 'Skills', 'Achievements']
  }
  
  setNavBarItem = (item) => {
    this.navItems.forEach((id) => {
      if (id === item) {
        document.getElementById('nav-item-'+id).style.color = 'white';
      } else {
        document.getElementById('nav-item-'+id).style.color = '#556b2f';
      }
    });
  }
  onClickSocialIcon = (item) => {
    switch (item) {
      case 'LinkedIn' :
        var url = "https://www.linkedin.com/in/amaya-dharmasiri-05558a153/"
        break
      case 'Github' :
        var url = "https://github.com/theamaya"
        break
      case 'Medium' :
        var url = "https://medium.com/@minikiraniamayadharmasiri"
        break
      case 'Youtube' :
        var url = "https://www.youtube.com/channel/UC84JMPB7UetbB2mtMW0vdLQ/"
        break
    }
    window.open(url);
  }
  changeDescriptionDiv = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1370){
      this.setState({changeDescription: true});
    } else {
      this.setState({changeDescription: false});
    }
  }
  onclickNavigationItem = (item) => {
    console.log('onclickNavigationItem', item)
    this.setNavBarItem(item);
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.changeDescriptionDiv);
    this.onclickNavigationItem('About')
    this.changeDescriptionDiv();
  }

  render() {
    return (
      <div id="home-container" className="home-container">
        <div className="nav-bar">
          <div id="nav-item-About" className="nav-bar-item" onClick={() => {this.onclickNavigationItem('About')}}>About</div>
          <div id="nav-item-Education" className="nav-bar-item" onClick={() => {this.onclickNavigationItem('Education')}}>Education</div>
          <div id="nav-item-Research" className="nav-bar-item" onClick={() => {this.onclickNavigationItem('Research')}}>Research</div>
          <div id="nav-item-Skills" className="nav-bar-item" onClick={() => {this.onclickNavigationItem('Skills')}}>Skills</div>
          <div id="nav-item-Achievements" className="nav-bar-item" onClick={() => {this.onclickNavigationItem('Achievements')}}>Achievements</div>
        </div>
        <div className="home-page-section">
          <div className="home-page-welcome">
            <div className="home-page-fname">Amaya</div>
            <div className="home-page-lname">Dharmasiri</div>
            <div className="home-page-icons">
              <FontAwesomeIcon icon={faLinkedin} className="home-social-icons" onClick={() => {this.onClickSocialIcon('LinkedIn')}}/>
              <FontAwesomeIcon icon={faGithubSquare} className="home-social-icons" onClick={() => {this.onClickSocialIcon('Github')}}/>
              <FontAwesomeIcon icon={faMedium} className="home-social-icons" onClick={() => {this.onClickSocialIcon('Medium')}}/>
              <FontAwesomeIcon icon={faYoutubeSquare} className="home-social-icons" onClick={() => {this.onClickSocialIcon('Youtube')}}/>
            </div>
            {this.state.changeDescription? (
              <div className="home-page-description-small">
              <p>
              Enthusiastic, fast learning and self driven team player with good
              potential to meet deadlines.
              </p>
            </div>
            ): null}
          </div>
          <div className="home-page-photo-div"><img src={amayaPhoto} className="home-page-photo"/></div>
          <div></div>
          {!this.state.changeDescription? (
              <div className="home-page-description">
              <p>
              Enthusiastic, fast learning and self driven team player with good
              potential to meet deadlines.
              </p>
            </div>
            ): null}
        </div>
        <div className="Education-page-section"></div>
      </div>
    );
  }
}

export default HomePage;