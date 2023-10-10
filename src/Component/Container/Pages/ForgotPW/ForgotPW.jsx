import "./_ForgotPW.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css"
function ForgotPW() {
  return (
    <div className="forgotpw">
      <div className="forgotpw-box">
        <h1 className="text-forgotpw">Restore Password</h1>
        <Form className="forgotpw-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRePassword">
            <Form.Label>Re-Password</Form.Label>
            <Form.Control required type="password" placeholder="Re-Password" />
          </Form.Group>
          <Button className="btn-submit" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default ForgotPW;
