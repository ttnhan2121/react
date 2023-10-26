import "./_RegisterPage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegisterPage() {
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
    <div className="register">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="register-box">
                <h1 className="text-register">Đăng ký</h1>
                <Form className="register-form">
                    <div className="d-flex justify-content-between">
                        <Form.Group className="mb-3 nameuser pe-3" as={Col} controlId="validationCustom01">
                            <Form.Label>Họ</Form.Label>
                            <Form.Control required type="text" placeholder="Họ" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 " as={Col} controlId="validationCustom01">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" />
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nhập lại mật khẩu</Form.Label>
                        <Form.Control required type="password" placeholder="Nhập lại mật khẩu" minLength={8} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="btn-submit-signup" variant="primary" type="submit" onClick={handleSubmit}>
                        Đăng ký
                    </Button>
                    <Link id='backtologin' to={'/login'} >Trở về đăng nhập</Link>
                </Form>
            </div>
        </Form>
    </div>
  );
}

export default RegisterPage;
