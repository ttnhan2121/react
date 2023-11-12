import './_Product.scss'
import "bootstrap/dist/css/bootstrap.css";
import Form from 'react-bootstrap/Form';
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState} from 'react';
import { Button } from "react-bootstrap";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { connect } from "react-redux";
import {actFetchProductsRequest,AddCart} from '../../../../action/action'
import sizeimg from '../../../../assets/img/size.jpeg'
function Product() {
    const [data, setData] = useState([]);
    const productId = localStorage.getItem('productId');

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/product/${productId}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [productId]);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (  
        <div className='product'>
            <div className="bodyreview">
                <div className="main-review">
                <div className="review-slideshow">
                    <Carousel data-bs-theme="dark">
                        {data.image?.map((image, index) => (
                            <Carousel.Item key={index}>
                            <img src={image} alt={`img-prod-${index}`} className="img-product"></img>
                            </Carousel.Item>
                        ))}
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
                <table>
                <tr>
                  <td>
                    Kích thước:
                  </td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>
                    Số lượng:
                  </td>
                  <td>
                    <Form.Control id="quality-1" type="number" min={0} defaultValue={0}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button variant="success" size="lg" onClick={() => this.props.AddCart(data)}>
                      Add to cart
                    </Button>
                  </td>
                </tr>
              </table>
            </div>
            </div>
            <div className='description'>
                <h1>Mô tả</h1>
                <div className='content'>
                    <p>
                        {data.description}
                    </p>
                </div>
                <h1>Hướng dẫn chọn Size</h1>
                <img src={sizeimg} alt='sizeimg' width={500}></img>
            </div>
        </div>
    );
}
const mapStateToProps = state =>{
  return {
       _products: state._todoProduct,
     };
}
function mapDispatchToProps(dispatch){
  return{
      actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
      AddCart:item=>dispatch(AddCart(item))
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)