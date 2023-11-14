import "./_RegisterPage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import validator from 'validator';
import Toast from 'react-bootstrap/Toast';


function RegisterPage() {
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleShowToast = () =>{
    setShow(false);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const firstnameInput = document.getElementById("formFirstName");
    const lastnameInput = document.getElementById("formLastName");
    const emailInput = document.getElementById("formBasicEmail");
    const passwordInput = document.getElementById("formBasicPassword");
    const confirmPWInput = document.getElementById("formBasicPasswordConfirmation");

    if (form.checkValidity() === false || !validator.isEmail(emailInput.value) || passwordInput.value !== confirmPWInput.value) {
      event.stopPropagation();
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstnameInput.value,
          lastname: lastnameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
        }),
      });

      if (response.ok) {
        setMessage("Tạo tài khoản thành công!");
        firstnameInput.value = "";
        lastnameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        confirmPWInput.value = "";
        emailInput.focus(); 
        setShow(true);
        setValidated(false);
      } else {
        setMessage("Tạo tài khoản thất bại");
        setShow(true);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

    setValidated(true);
  };
  return (
    <div className="register">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="register-box">
                <h1 className="text-register">Đăng ký</h1>
                <Form className="register-form">
                    <div className="d-flex justify-content-between">
                        <Form.Group className="mb-3 nameuser pe-3" as={Col} controlId="formFirstName">
                            <Form.Label>Họ</Form.Label>
                            <Form.Control required type="text" placeholder="Họ"/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 " as={Col} controlId="formLastName">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control required type="text" placeholder="Tên"/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="example@example.com" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control required type="password" placeholder="Mật khẩu" minLength={8}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                        <Form.Label>Nhập lại mật khẩu</Form.Label>
                        <Form.Control required type="password" placeholder="Nhập lại mật khẩu" minLength={8} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="btn-submit-signup" variant="primary" type="submit" onClick={handleSubmit}>
                        Đăng ký
                    </Button>
                    <Link id='backtologin' to={'/login'} >Quay về đăng nhập</Link>
                </Form>
            </div>
        </Form>
        <div className="toastbox">
            <Toast show={show} onClose={handleShowToast} delay={5000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Hệ thống</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    </div>
  );
}

export default RegisterPage;
