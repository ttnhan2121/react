import React from "react";
import "./_MainPage.scss";
import Content from "./Content/Content";
import Carousel from 'react-bootstrap/Carousel';
import bg1  from '../../../../assets/img/background.png';
import bg2 from '../../../../assets/img/background2.png';
import bg3 from '../../../../assets/img/background3.png';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function MainPage() {
  return (
    <div className="mainpage">
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={bg1} alt="123"></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg2} alt="4"></img>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={bg3} alt="5"></img>
          
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Content></Content>
    </div>
  );
}

export default MainPage;
