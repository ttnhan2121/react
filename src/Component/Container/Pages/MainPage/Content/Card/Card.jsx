import "./_Card.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import imgdetails1 from "../../../../../../assets/img/515Kem-F.jpg";
import imgdetails2 from "../../../../../../assets/img/515Kem-B.jpg";
import imgdetails3 from "../../../../../../assets/img/4U3A0858.jpg";
import imgdetails4 from "../../../../../../assets/img/4U3A0876.jpg";

function Card({ data }) {
  console.log("data: ", data);
  const ref = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="card card-prop"
      onMouseEnter={() => {
        ref.current.src = data.image[1];
      }}
      onMouseLeave={() => {
        ref.current.src = data.image[0];
      }}
    > 
      <img
        ref={ref}
        className="card-img-top img-product"
        src={data.image[0]}
        alt="Cardimagecap"
        width={200}
        height={200}
      />
      <button className="btn-quickview" onClick={handleShow}>
        Xem nhanh
      </button>
      <div className="card-body">
        <h5 className="card-title">Name Product</h5>
        <p className="card-text">{}</p>
        <p className="price">
          <span className="price-left">{data.price}$</span>
          <span className="price-right">200.000 vnd</span>
        </p>
      </div>
      <Modal centered="true" size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="bodyreview">
            <div className="main-review">
              <div className="review-slideshow">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={imgdetails1}
                      alt="img-prod"
                      className="img-123"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imgdetails2}
                      alt="img-prod"
                      className="img-123"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imgdetails3}
                      alt="img-prod"
                      className="img-123"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imgdetails4}
                      alt="img-prod"
                      className="img-123"
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="pick-reivew">
                <div className="pvBody">
                  <img width={50} src={imgdetails1} alt=""></img>
                  <img width={50} src={imgdetails2} alt=""></img>
                </div>
              </div>
            </div>
            <div className="details-prod">
              <div className="name-prod">
                <h1>Name Prod</h1>
              </div>
              <div className="price-prod">
                <span className="price-left">199.000 vnd</span>
                <span className="price-right">320.000 vnd</span>
              </div>
              <div className="size-prod">
                <label>Kích thước: </label>
                <div className="size-details">
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={1}
                  >
                    <ToggleButton
                      variant="light"
                      size="lg"
                      id="sizeM"
                      value={1}
                    >
                      M
                    </ToggleButton>
                    <ToggleButton
                      variant="light"
                      size="lg"
                      id="sizeL"
                      value={2}
                    >
                      L
                    </ToggleButton>
                    <ToggleButton
                      variant="light"
                      size="lg"
                      id="sizeXL"
                      value={3}
                    >
                      XL
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </div>
              <Button variant="success" size="lg">
                Add to cart
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Card;
