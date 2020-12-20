import React,{ Component } from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faMedium, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ResearchPage extends React.Component {
  render() {
    return(
      <Element name="Research-page-section" className="Research-page-section">
        <div className="research-container">
          <div className="section-title">Research<div className="gradient-line gradient"></div></div>
          <div className="research-card">
            <div className="research-card-title">Content Aware 360 Degree Video Optimization in Mobile Systems</div>
            <div className="research-card-description">Development of an end to end system to efficiently stream 360 Degree videos. Visual content analysis including
              image saliency, object composition, and optical flow is incorporated to design a tiling scheme to encode the 360
              degree videos for efficient bandwidth utilization and improved Quality of Experience. My current contribution
              includes mathematical modeling of user behaviour (requested field of view) using the existing datasets.
            </div>
          </div>
          <div className="research-card">
            <div className="research-card-title">Combining object detectors for stereo images</div>
            <div className="research-card-description">A geometric approach to combine object detections on corresponding images of two stereo cameras on autonomous
              driving vehicles, to increase precision and recall. A fasterRCNN-resnet101 detection model was used on KITTI
              can Cityscapes autonomous driving datasets for the experiment. LIDAR and stereo image depth calculations were
              done. Used Tensorflow, keras and openCV was used.
            </div>
          </div>
          <div className="research-card">
            <div className="research-card-title">Generalization ability of object detection/ segmentation models</div>
            <div className="research-card-description">Observed and evaluated the performance of object detection and object segmentation models across various
              autonomous driving datasets of different scenes and cities. Objective is to explore the correlation between model
              architectures and scene properties on generalization ability. Experiments are being carried out with KITTI,
              Cityscapes, berkeley and Apollo scape
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

export default ResearchPage;