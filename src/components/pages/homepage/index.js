import React,{ Component } from 'react';
import './styles.css'
import amayaPhoto from '../../../assets/images/amaya.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactGA from 'react-ga';
import HorizontalScroll from 'react-scroll-horizontal'

import { EducationPage, ResearchPage, SkillsPage, AchievementsPage } from '../index'

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={isVisible? "fade-in" : ""}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEduCard: false,
      changeDescription : false,
      changeNavBar: false,
      title : "Amaya Dharmasiri"
    }
    this.navItems = ['About','Education', 'Research', 'Skills', 'Achievements']
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
      case 'CV' :
        var url = "https://github.com/Isuru-Dissanayake/the-amaya/raw/master/src/assets/docs/Amaya_Dharmasiri.pdf"
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
  changeNavBarDiv = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 700){
      this.setState({changeNavBar: true});
    } else {
      this.setState({changeNavBar: false});
    }
  }
  componentDidMount = () => {
    ReactGA.initialize('UA-145048078-1');
    window.addEventListener("resize", this.changeDescriptionDiv);
    window.addEventListener("resize", this.changeNavBarDiv);
    this.changeDescriptionDiv();
    this.changeNavBarDiv();
    Events.scrollEvent.register('begin', function(to, element) {});
    Events.scrollEvent.register('end', function(to, element) {});
    scrollSpy.update();
  }
  componentWillUnmount = () =>  {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div id="home-container" className="home-container">
        {!this.state.changeNavBar? (
          <div className="nav-bar">
            <Link activeClass="active-item" to="Home-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              About
            </Link>
            <Link activeClass="active-item" to="Education-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              Education
            </Link>
            <Link activeClass="active-item" to="Research-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              Research
            </Link>
            <Link activeClass="active-item" to="Skills-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              Skills
            </Link>
            <Link activeClass="active-item" to="Achievements-page-section" spy={true} smooth={true} duration={500} offset={-90} className="nav-bar-item">
              Achievements
            </Link>
          </div>
        ):(
          <div className="nav-bar-small">
            <HorizontalScroll>
            <Link activeClass="active-item" to="Home-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              About
            </Link>
            <Link activeClass="active-item" to="Education-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              Education
            </Link>
            <Link activeClass="active-item" to="Research-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              Research
            </Link>
            <Link activeClass="active-item" to="Skills-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
              Skills
            </Link>
            <Link activeClass="active-item" to="Achievements-page-section" spy={true} smooth={true} duration={500} offset={-90} className="nav-bar-item">
              Achievements
            </Link>
            </HorizontalScroll>
          </div>
        )}
        <Element name="Home-page-section" className="home-page-section fade-in">
          <div className="home-page-welcome">
            <div className="home-page-fname">Amaya</div>
            <div className="home-page-lname">Dharmasiri</div>
            <div className="home-page-icons">
              <FontAwesomeIcon icon={faLinkedin} className="home-social-icons" onClick={() => {this.onClickSocialIcon('LinkedIn')}}/>
              <FontAwesomeIcon icon={faGithubSquare} className="home-social-icons" onClick={() => {this.onClickSocialIcon('Github')}}/>
              <FontAwesomeIcon icon={faMedium} className="home-social-icons" onClick={() => {this.onClickSocialIcon('Medium')}}/>
              <FontAwesomeIcon icon={faYoutubeSquare} className="home-social-icons" onClick={() => {this.onClickSocialIcon('Youtube')}}/>
              <div id="download-button" className="download-cv" onClick={() => {this.onClickSocialIcon('CV')}}>Download CV</div>
            </div>
            {this.state.changeDescription? (
              <div className="home-page-description-small">
              <p>
              Enthusiastic, fast learning and self driven team player with good
              potential to meet deadlines.
              </p>
            </div>
            ): <div></div>}
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
            ): <div></div>}
        </Element>      
        <EducationPage/>
        <FadeInSection>
        <ResearchPage/>
        </FadeInSection>
        <FadeInSection>
        <SkillsPage/>
        </FadeInSection>
        <FadeInSection>
        <AchievementsPage/>
        </FadeInSection>
      </div>
    );
  }
}

export default HomePage;