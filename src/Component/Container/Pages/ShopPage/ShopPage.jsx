import './_ShopPage.scss'
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from '../MainPage/Content/Card/Card';
function ShopPage() {
    const [selectedItem, setSelectedItem] = useState('Sản phẩm nổi bật');
    const handleSelect = (eventKey, event) => {
        const selectedValue = event.target.textContent;
        setSelectedItem(selectedValue); 
      };
    return (  
        <div className='shoppage'>
            <div className='panel'></div>
            <div className='header-shop'>
                <div className='tittle'>
                    Tất cả sản phẩm
                </div>
                <div className='sort'>
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
            <div className='list-product'>
                <div className='row'>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopPage;