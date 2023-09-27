import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css"
import "./_LoginPage.scss";
import { Link } from "react-router-dom";


function LoginPage() {

  return (
    <div className="loginpage">
      <div className="login-box">
        <h1 className="text-login">Login</h1>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check required type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="py-3"><Link to={'/forgotpw'} className="underline-text">Quên mật khẩu</Link> Hoặc <Link to={'/register'} className="underline-text">Đăng ký</Link></p>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
