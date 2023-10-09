import "./_Card.scss";
import "bootstrap/dist/css/bootstrap.css";
import img1 from '../../../../../../assets/img/515Kem-F.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import imgdetails1 from '../../../../../../assets/img/515Kem-F.jpg';
import imgdetails2 from '../../../../../../assets/img/515Kem-B.jpg';
import imgdetails3 from '../../../../../../assets/img/4U3A0858.jpg';
import imgdetails4 from '../../../../../../assets/img/4U3A0876.jpg';
function Card() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card card-prop">
      <img className="card-img-top img-product" src={img1} alt="Cardimagecap" />
      <button className="btn-quickview" onClick={handleShow}>Xem nhanh</button>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="price">
            <span className="price-left">100.000 vnd</span>
            <span className="price-right">200.000 vnd</span>
        </p>
      </div>
      <Modal centered='true' size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="main-review">
            <div className="review-slideshow">
                <Carousel>
                  <Carousel.Item>
                    <img src={imgdetails1} alt="img-prod" className="img-123"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={imgdetails2} alt="img-prod" className="img-123"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={imgdetails3} alt="img-prod" className="img-123"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={imgdetails4} alt="img-prod" className="img-123"></img>
                  </Carousel.Item>
                </Carousel>
            </div>
            <div className="pick-reivew">áđâsd</div>
          </div>
          <div className="details-prod"></div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Card;
