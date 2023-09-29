import "./_Card.scss";
import "bootstrap/dist/css/bootstrap.css";
import img1 from '../../../../../../assets/img/vn-11134207-7qukw-lk5h8qk0q32aa7.jpg'
function Card() {
  return (
    <div className="card card-prop">
      <img className="card-img-top img-product" src={img1} alt="Cardimagecap" />
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
    </div>
  );
}

export default Card;
