import React,{ Component } from 'react';
import './styles.css'
import amayaPhoto from '../../../assets/images/amaya.png'
class HomePage extends React.Component {
  constructor(props) {
    super(props);
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
  onclickNavigationItem = (item) => {
    console.log('onclickNavigationItem', item)
    this.setNavBarItem(item);
  }
  componentDidMount = () => {
    this.onclickNavigationItem('About')
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
          </div>
          <div className="home-page-photo-div"><img src={amayaPhoto} className="home-page-photo"/></div>
        </div>
        <div className="Education-page-section"></div>
      </div>
    );
  }
}

export default HomePage;