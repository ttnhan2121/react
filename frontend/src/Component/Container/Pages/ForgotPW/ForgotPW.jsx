import "./_ForgotPW.scss";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Toast } from "react-bootstrap";
function ForgotPW() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleShowToast = () =>{
    setShow(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newPassword !== rePassword) {
      setErrorMessage('Mật khẩu không khớp!');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8000/forgotpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword, rePassword }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        
        setMessage(errorData.error);
        setShow(true);
        return;
      }
  
      setEmail('');
      setNewPassword('');
      setRePassword('');
      const messageData = await response.json();
      setMessage(messageData.message);
      setShow(true); 
      


    } catch (error) {
      console.error(error);
      setErrorMessage('An unexpected error occurred');
    }
  };
  
  return (
    <div className="forgotpw">
      <div className="forgotpw-box">
        <h1 className="text-forgotpw">Khôi phục mật khẩu</h1>
        <Form className="forgotpw-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu mới</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Nhập mật khẩu"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRePassword">
            <Form.Label>Nhập lại mật khẩu</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </Form.Group>
          {errorMessage && <div className="error-message" style={{color:'red'}}>{errorMessage}</div>}
          <Button className="btn-submit" variant="primary" type="submit" onClick={handleSubmit}>
            Khôi phục
          </Button>
          <Link id="backtologin" to={'/login'}>
            Đăng nhập
          </Link>
        </Form>
      </div>
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

export default ForgotPW;

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css"
// function ForgotPW() {
//   return (
//     <div className="forgotpw">
//       <div className="forgotpw-box">
//         <h1 className="text-forgotpw">Khôi phục mật khẩu</h1>
//         <Form className="forgotpw-form">
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control required type="email" placeholder="example@example.com" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Mật khẩu mới</Form.Label>
//             <Form.Control required type="password" placeholder="Nhập mật khẩu" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicRePassword">
//             <Form.Label>Nhập lại mật khẩu</Form.Label>
//             <Form.Control required type="password" placeholder="Nhập lại mật khẩu" />
//           </Form.Group>
//           <Button className="btn-submit" variant="primary" type="submit">
//             Khôi phục
//           </Button>
//           <Link id='backtologin' to={'/login'} >Đăng nhập</Link>
//         </Form>
//       </div>
//     </div>
//   );
// }
// export default ForgotPW;