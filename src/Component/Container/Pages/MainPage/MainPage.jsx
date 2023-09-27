import React from "react";
import "./_MainPage.scss";
import Content from "./Content/Content";
function MainPage() {
  return (
    <div className="mainpage">
      <div className="slideshow"></div>
      <Content></Content>
    </div>
  );
}

export default MainPage;
