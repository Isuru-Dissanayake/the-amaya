import React,{ Component } from 'react';
import './styles.css'
import amayaPhoto from '../../../assets/images/amaya.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
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
  componentDidMount = () => {
    window.addEventListener("resize", this.changeDescriptionDiv);
    this.changeDescriptionDiv();
    Events.scrollEvent.register('begin', function(to, element) {});
    Events.scrollEvent.register('end', function(to, element) {});
    scrollSpy.update();
  }
  componentWillUnmount = () =>  {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  countGpa = () => {
    this.setState({showEduCard: true})
  }
  render() {
    return (
      <div id="home-container" className="home-container">
        <div className="nav-bar">
          <Link activeClass="active-item" to="Home-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item">
            About
          </Link>
          <Link activeClass="active-item" to="Education-page-section" spy={true} smooth={true} duration={500} offset={-110} className="nav-bar-item"  onSetActive={this.countGpa}>
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
        <Element name="Home-page-section" className="home-page-section fade-in">
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
        <FadeInSection>
        <EducationPage/>
        </FadeInSection>
        <FadeInSection>
        <ResearchPage/>
        </FadeInSection>
        <SkillsPage/>
        <AchievementsPage/>
      </div>
    );
  }
}

export default HomePage;