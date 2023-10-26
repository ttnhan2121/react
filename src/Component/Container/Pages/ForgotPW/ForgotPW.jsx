import "./_ForgotPW.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
function ForgotPW() {
  return (
    <div className="forgotpw">
      <div className="forgotpw-box">
        <h1 className="text-forgotpw">Khôi phục mật khẩu</h1>
        <Form className="forgotpw-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="example@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu mới</Form.Label>
            <Form.Control required type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRePassword">
            <Form.Label>Nhập lại mật khẩu</Form.Label>
            <Form.Control required type="password" placeholder="Nhập lại mật khẩu" />
          </Form.Group>
          <Button className="btn-submit" variant="primary" type="submit">
            Khôi phục
          </Button>
          <Link id='backtologin' to={'/login'} >Trở về đăng nhập</Link>
        </Form>
      </div>
    </div>
  );
}
export default ForgotPW;
