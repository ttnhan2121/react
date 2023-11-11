import "./_Card.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
function Card({ data }) {
  const ref = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLinkClick = () => {
    localStorage.setItem('productId', data.id);
  };
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
      <Link to={`/product/${data.id}`} onClick={handleLinkClick}>
        <img
          ref={ref}
          className="card-img-top img-product"
          src={data.image[0]}
          alt="Cardimagecap"
          width={200}
          height={200}
        />
      </Link>
      <button className="btn-quickview" onClick={handleShow}>
        Xem nhanh
      </button>
      <Link to={`/product/${data.id}`} className="linkproduct" onClick={handleLinkClick}>
        <div className="card-body">
          <h5 className="card-title">{data.product_name}</h5>
          <p className="card-text">{}</p>
          <p className="price">
            <span className="price-left">{data.price} VNĐ</span>
            <span className="price-right">320.000 VNĐ</span>
          </p>
        </div>
      </Link>
      <Modal centered="true" size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="bodyreview">
            <div className="main-review">
              <div className="review-slideshow">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={data.image[0]}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={data.image[1]}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={data.image[2]}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={data.image[3]}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="details-prod">
              <div className="name-prod">
                <h1>{data.product_name}</h1>
              </div>
              <div className="price-prod">
                <span className="price-left">{data.price} VNĐ</span>
                <span className="price-right">320.000 vnd</span>
              </div>
              <div className="size-prod">
                <label>Kích thước: </label>
                <div className="size-details">
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={0}
                  >
                    <ToggleButton
                      variant="light"
                      size="lg"
                      id="sizeS"
                      value={0}
                    >
                      S
                    </ToggleButton>
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
              <div className='quality'>
                <label htmlFor="quanlity-1">Số lượng</label>
                <input id='quality-1' type="number" min={0} defaultValue={0}/>
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
