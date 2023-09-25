import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./_LoginPage.scss";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="loginpage">
      <div className="login-box">
        <h1>Login</h1>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p><Link to={'/forgotpw'} className="underline-text">Quên mật khẩu</Link>Hoặc<Link to={'/register'} className="underline-text">Đăng ký</Link></p>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
