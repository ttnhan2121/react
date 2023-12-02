import { Button } from "react-bootstrap";
import "./_Dashboard.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Modal } from "react-bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Dasshboard() {
  const [customer, setcustomer] = useState([]);
  const [product, setproduct] = useState([]);
  const [invoice, setinvoice] = useState([]);
  const [invoice_details, setinvoice_details] = useState([]);
  const [editorContent, setEditorContent] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const handle = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("userId", null);
    navigate("/");
  };
  useEffect(() => {
    fetch(`http://localhost:8000/customer`)
      .then((res) => res.json())
      .then((result) => {
        setcustomer(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:8000/product`)
      .then((res) => res.json())
      .then((result) => {
        setproduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:8000/invoice`)
      .then((res) => res.json())
      .then((result) => {
        setinvoice(result);
        handleRowClick(result[0].invoice_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRowClick = (key) => {
    fetch(`http://localhost:8000/invoice_details/${key}`)
      .then((response) => response.json())
      .then((data) => {
        setinvoice_details(data);
      })
      .catch((error) => console.error("Error:", error));
  };
  const handleEditorBlur = (event, editor) => {
    const content = editor.getData();
    setEditorContent(content);
  };
  const handleShowEdit = (item) => {
    setSelectedItem(item);
    setShowEdit(true);
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  const handleSaveButtonClick = async () => {
    const id = selectedItem.id;
    const product_name = document.getElementById("product_name").value;
    const price = parseInt(document.getElementById("price").value);
    const image = selectedItem.image;
    const m = parseInt(document.getElementById("m").value);
    const l = parseInt(document.getElementById("l").value);
    const xl = parseInt(document.getElementById("xl").value);
    const size = {
      l: l,
      m: m,
      xl: xl,
    };
    console.log(typeof size);
    const description = editorContent || selectedItem.description;
    const data = {
      id: id,
      product_name: product_name,
      price: price,
      image: image,
      size: size,
      description: description,
    };
    console.log("data: ", data);
    try {
      const response = await fetch("http://localhost:8000/updateproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Server response:", responseData);
      } else {
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      console.error("Error update product:", error);
    }
  };
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();

      formData.append("files", file);

      const response = await fetch("http://localhost:8000/uploadfile", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
      } else {
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };
  return (
    <div className="dashboard">
      <Modal show={showEdit} onHide={handleCloseEdit} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Sửa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: "100%" }}>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Mã sản phẩm:</td>
                <td>
                  <input id="id" value={selectedItem.id} disabled></input>
                </td>
              </tr>
              <tr>
                <td>Tên sản phẩm:</td>
                <td>
                  <input
                    id="product_name"
                    value={selectedItem.product_name}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Giá:</td>
                <td>
                  <input id="price" value={selectedItem.price}></input>
                </td>
              </tr>
              <tr>
                <td>Hình ảnh:</td>
                <table>
                  <tr>
                    <td>
                      {selectedItem?.image?.map((img, index) => {
                        if (typeof img === "string") {
                          return (
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src={img}
                                alt={img}
                                width={150}
                                height={150}
                                style={{ marginRight: "2px" }}
                              ></img>
                              <button
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  right: 2,
                                }}
                                id={index}
                                onClick={(e) => {
                                  const index = e.target.id;
                                  let updatedImageList = [
                                    ...selectedItem.image,
                                  ];
                                  updatedImageList = updatedImageList.filter(
                                    (img, idx) => idx !== Number(index)
                                  );
                                  setSelectedItem({
                                    ...selectedItem,
                                    image: updatedImageList,
                                  });
                                }}
                              >
                                x
                              </button>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src={URL.createObjectURL(img.path)}
                                alt={img}
                                width={150}
                                height={150}
                                style={{ marginRight: "2px" }}
                              ></img>
                              <button
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  right: 2,
                                }}
                                id={index}
                                onClick={(e) => {
                                  const index = e.target.id;
                                  let updatedImageList = [
                                    ...selectedItem.image,
                                  ];
                                  updatedImageList = updatedImageList.filter(
                                    (img, idx) => idx !== Number(index)
                                  );
                                  setSelectedItem({
                                    ...selectedItem,
                                    image: updatedImageList,
                                  });
                                }}
                              >
                                x
                              </button>
                            </div>
                          );
                        }
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="file"
                        id="image"
                        multiple
                        onChange={(e) => {
                          const file = e.target.files[0];
                          const path = "http://localhost:8000/" + file.name;
                          handleFileUpload(file);
                          setSelectedItem({
                            ...selectedItem,
                            image: [...selectedItem.image, path],
                          });
                        }}
                      ></input>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td>Kích thước:</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        M: <input id="m" value={selectedItem?.size?.m}></input>
                      </td>
                      <td>
                        L: <input id="l" value={selectedItem?.size?.l}></input>
                      </td>
                      <td>
                        XL:
                        <input id="xl" value={selectedItem?.size?.xl}></input>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>Mô tả:</td>
                <td>
                  <div
                    style={{
                      display: "block",
                      overflow: "auto",
                      maxWidth: "100%",
                      maxHeight: "300px",
                    }}
                  >
                    <CKEditor
                      editor={ClassicEditor}
                      data={selectedItem.description}
                      onBlur={handleEditorBlur}
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="info" onClick={handleSaveButtonClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="header-dashboard">
        <span className="title-header">Trang quản lý</span>
        <Button variant="danger" className="btnExit" onClick={handle}>
          Thoát
        </Button>
      </div>
      <div className="body-dashboard">
        <div className="product-box box">
          <div className="header-product">
            <h2>Sản phẩm</h2>
          </div>
          <div className="body-product">
            <table>
              <thead>
                <tr>
                  <td>Sản phẩm</td>
                  <td>Giá</td>
                  <td>Hình ảnh</td>
                  <td>Kích thước</td>
                  <td>Mô tả</td>
                  <td>Hành động</td>
                </tr>
              </thead>
              <tbody>
                {product.map((item, key) => (
                  <tr id={item.id}>
                    <td>{item.product_name}</td>
                    <td>
                      {Number(item.price).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                    <td>
                      <img
                        src={item.image[0]}
                        alt={key}
                        width={100}
                        height={100}
                      ></img>
                    </td>
                    <td>
                      M: {item.size.m}, L: {item.size.l}, XL: {item.size.xl}
                    </td>
                    <td width={500} id="description">
                      <div
                        style={{
                          display: "block",
                          overflow: " auto",
                          maxHeight: "150px",
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Button
                          variant="info"
                          onClick={() => handleShowEdit(item)}
                        >
                          Sửa
                        </Button>
                        <Button variant="danger">Xóa</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="customer-box box">
          <div className="header-customer">
            <h2>Khách hàng</h2>
          </div>
          <div className="body-customer">
            <table>
              <tr>
                <td>ID</td>
                <td>Họ</td>
                <td>Tên</td>
                <td>Email</td>
                <td>Địa chỉ</td>
                <td>SĐT</td>
              </tr>
              {customer.slice(1).map((item, key) => (
                <tr id={key}>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="invoice-box box">
          <div className="header-invoice"></div>
          <div className="body-invoice">
            <div className="invoice">
              <h2>Hóa đơn</h2>
              <table>
                <tr>
                  <td>Mã hóa đơn</td>
                  <td>Thời gian đặt hàng</td>
                  <td>Tổng hóa đơn</td>
                </tr>
                {invoice.map((item) => (
                  <tr
                    id={item.invoice_id}
                    onClick={() => {
                      handleRowClick(item.invoice_id);
                    }}
                  >
                    <td>{item.invoice_id}</td>
                    <td>{new Date(item.purchase_date).toLocaleDateString()}</td>
                    <td>
                      {Number(item.total_amount).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="invoice-details">
              <h2>Chi tiết hóa đơn</h2>
              <table>
                <tr>
                  <td>Mã hóa đơn</td>
                  <td>Sản phẩm</td>
                  <td>Số lượng</td>
                  <td>Kích thước</td>
                </tr>
                {invoice_details.map((item, key) => (
                  <tr key={key}>
                    <td>{item.invoice_id}</td>
                    <td>{item.product_id}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {item.size === "0" ? "M" : item.size === "1" ? "L" : "XL"}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dasshboard;
