import './_Product.scss'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect    } from 'react';
import { Button } from "react-bootstrap";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import sizeimg from '../../../../assets/img/size.jpeg'
import imgdetails1 from "../../../../assets/img/515Kem-F.jpg";
import imgdetails2 from "../../../../assets/img/515Kem-B.jpg";
import imgdetails3 from "../../../../assets/img/4U3A0858.jpg";
import imgdetails4 from "../../../../assets/img/4U3A0876.jpg";
function Product() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (  
        <div className='product'>
            <div className="bodyreview">
                <div className="main-review">
                <div className="review-slideshow">
                    <Carousel>
                    <Carousel.Item>
                        <img src={imgdetails1} alt="img-prod" className="img-product"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imgdetails2} alt="img-prod" className="img-product"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imgdetails3} alt="img-prod" className="img-product"></img>
                    </Carousel.Item>
                    <Carousel.Item> 
                        <img src={imgdetails4} alt="img-prod" className="img-product"></img>
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
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton variant="light" size="lg" id="sizeM" value={1}>
                        M
                        </ToggleButton>
                        <ToggleButton variant="light" size="lg" id="sizeL" value={2}>
                        L
                        </ToggleButton>
                        <ToggleButton variant="light" size="lg" id="sizeXL"value={3}>
                        XL
                        </ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                </div>
                <div className='quality'>
                        <label for="quanlity">Số lượng</label>
                        <input id='quality' type="number" min={0}/>
                </div>
                <Button variant="success" size="lg">
                    Add to cart
                </Button>
                </div>
            </div>
            <div className='description'>
                <h1>description</h1>
                
                <img src={sizeimg} alt='sizeimg' width={500}></img>
            </div>
        </div>
    );
}

export default Product;