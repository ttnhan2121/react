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
import { Link } from "react-router-dom";

function Card({ data }) {
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
      <Link to={'/product'}>
        {/* <img
          ref={ref}
          className="card-img-top img-product"
          src={data.image[0]}
          alt="Cardimagecap"
          width={200}
          height={200}
        /> */}
        <img className="card-img-top img-product" src={data.image}></img>
      </Link>
      <button className="btn-quickview" onClick={handleShow}>
        Xem nhanh
      </button>
      <Link to={'/product'} className="linkproduct">
        <div className="card-body">
          <h5 className="card-title">{data.product_name}</h5>
          <p className="card-text">{}</p>
          <p className="price">
            <span className="price-left">{data.price}$</span>
            <span className="price-right">200.000 vnd</span>
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
                      src={imgdetails1}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imgdetails2}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imgdetails3}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imgdetails4}
                      alt="img-prod"
                      className="img-show"
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="pick-reivew">
                <div className="pvBody">
                  <img width={50} src={imgdetails1} alt=""
                  onClick={(event) => {
                    if (event.target.tagName === 'IMG') {
                      console.log(event.target.src);
                    }
                  }}/>  
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
              <div className='quality'>
                <label for="quanlity-1">Số lượng</label>
                <input id='quality-1' type="number" min={0}/>
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
