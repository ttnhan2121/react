import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.css"
import "./_LoginPage.scss";
import { Link } from "react-router-dom";


function LoginPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="loginpage">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              <Button className="btn-submit" variant="primary" type="submit">
                Submit
              </Button>
              <p className="py-3"><Link to={'/forgotpw'} className="underline-text">Quên mật khẩu</Link> Hoặc <Link to={'/register'} className="underline-text">Đăng ký</Link></p>
            </Form>
          </div>
        </Form>

    </div>
  );
}

export default LoginPage;
