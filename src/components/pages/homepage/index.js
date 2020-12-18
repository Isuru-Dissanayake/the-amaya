import React,{ Component } from 'react';
import './styles.css'
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
        <div>
        </div>
      </div>
    );
  }
}

export default HomePage;