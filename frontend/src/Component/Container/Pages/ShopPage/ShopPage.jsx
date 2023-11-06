import "./_ShopPage.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faRotate, faHandHoldingDollar, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import Card from "../MainPage/Content/Card/Card";
import Pagination from 'react-bootstrap/Pagination';
const apiURL = "https://fakestoreapi.com/products";
const apiURL1 = "http://localhost:8000/testdb";


function ShopPage() {
  const [selectedItem, setSelectedItem] = useState("Sản phẩm nổi bật");
  const handleSelect = (eventKey, event) => {
    const selectedValue = event.target.textContent;
    setSelectedItem(selectedValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => { 
    fetch(apiURL1) 
      .then((res) => res.json()) 
      .then((result) => setData(result)) 
      .catch((error) => {console.log(error); }); }, []);
  return (
    <div className="shoppage">
      <div className="permissions">
        <div className="container-permissions">
          <FontAwesomeIcon className="icon-permissions" icon={faTruck} color="var(--color_main)" size="lg"/>
          <h3 className="title-permissions">
            GIAO HÀNG TOÀN QUỐC
          </h3>
          <p className="content-permissions">
          Thời gian giao hàng linh động từ 3 - 5 ngày tùy khu vực, đôi khi sẽ nhanh hơn hoặc chậm hơn. Mong Quý Khách hàng thông cảm và cố gắng đợi hàng giúp shop.
          </p>
        </div>
        <div className="container-permissions">
          <FontAwesomeIcon className="icon-permissions" icon={faRotate} color="var(--color_main)" size="lg"/>
          <h3 className="title-permissions">
            CHÍNH SÁCH ĐỔI TRẢ
          </h3>
          <p className="content-permissions">
            Sản phẩm được phép đổi hàng trong vòng 36h nếu phát sinh lỗi từ nhà sản xuất (Yêu cầu: hình ảnh phần bị lỗi rõ nét, chi tiết và đầy đủ).
          </p>
        </div>
        <div className="container-permissions">
          <FontAwesomeIcon className="icon-permissions" icon={faHandHoldingDollar} color="var(--color_main)" size="lg"/>
          <h3 className="title-permissions">
            GIAO HÀNG NHẬN TIỀN VÀ KIỂM KÊ ĐƠN HÀNG

          </h3>
          <p className="content-permissions">
          Được phép kiểm hàng trước khi thanh toán. Lưu ý: Trường hợp Quý Khách hàng đã nhận hàng về nhà, vui lòng quay video unbox đơn hàng trong tình trạng nguyên vẹn để có căn cứ xác thực đơn hàng gặp phải vấn đề, trường hợp không có video shop không thể hỗ trợ.

          </p>
        </div>
        <div className="container-permissions">
          <FontAwesomeIcon className="icon-permissions" icon={faPhoneVolume} color="var(--color_main)" size="lg"/> 
          <h3 className="title-permissions">
            ĐẶT HÀNG ONLINE VÀ KIỂM TRA ĐƠN HÀNG VUI LÒNG LIÊN HỆ
          </h3>
          <p className="content-permissions">
            Hotline: 096 653 81 77
          </p>
        </div>
      </div>
      <div className="header-shop">
        <div className="tittle">Tất cả sản phẩm</div>
        <div className="sort">
          Sắp xếp
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedItem}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Giá: Tăng dần</Dropdown.Item>
              <Dropdown.Item>Giá: Giảm dần</Dropdown.Item>
              <Dropdown.Item>Tên: A-Z</Dropdown.Item>
              <Dropdown.Item>Tên: Z-A</Dropdown.Item>
              <Dropdown.Item>Cũ nhất</Dropdown.Item>
              <Dropdown.Item>Mới nhất</Dropdown.Item>
              <Dropdown.Item>Bán chạy nhất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="list-product">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-xxl-3 py-3 card-hover">
                <Card
                  // data={{
                  //   ...item,
                  //   image: [item.image, data.reverse()[index].image],
                  // }}
                  data = {item}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagnination">
        <Pagination size="lg">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}

export default ShopPage;
