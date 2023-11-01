import React from "react";
import "./_MainPage.scss";
import Content from "./Content/Content";
import Carousel from 'react-bootstrap/Carousel';
import bg1  from '../../../../assets/img/background.png';
import bg2 from '../../../../assets/img/backround2.jpg';
import bg3 from '../../../../assets/img/background3.jpg';
function MainPage() {
  return (
    <div className="mainpage">
      <Carousel>
        <Carousel.Item>
          <img src={bg1} alt="123"></img>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg2} alt="4"></img>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg3} alt="5"></img>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Content></Content>
    </div>
  );
}

export default MainPage;
