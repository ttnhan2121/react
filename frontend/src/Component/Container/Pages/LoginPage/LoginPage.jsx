import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./_LoginPage.scss";
import { Link } from "react-router-dom";
import validator from "validator";
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    const email = document.getElementById("formBasicEmail");
    const password = document.getElementById("formBasicPassword")
    
    if (form.checkValidity() === false || 
        !validator.isEmail(email.value) ||
        password.value.length < 8) {
      event.preventDefault();
      event.stopPropagation();
      return;
    } 
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      if (response.ok) {
        email.value = "";
        password.value = "";
        email.focus(); 
        localStorage.setItem("isLoggedIn", true);
        navigate('/');
      } else {
        alert("đăng nhập thất bại")
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

    setValidated(true);
  };
  return (
    <div className="loginpage">
      <Form noValidate validated={validated}>
        <div className="login-box">
          <h1 className="text-login">Login</h1>
          <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Nhập email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control required type="password" placeholder="Nhập mật khẩu" minLength={8} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ghi nhớ tài khoản" />
            </Form.Group>
            <Button className="btn-submit" variant="primary" type="submit" onClick={handleSubmit}>
              Đăng nhập
            </Button>
            <p className="py-3"><Link to={'/forgotpw'} className="underline-text">Quên mật khẩu</Link> Hoặc <Link to={'/register'} className="underline-text">Đăng ký</Link></p>
          </Form>
        </div>
      </Form>
    </div>
  );
}

export default LoginPage;
