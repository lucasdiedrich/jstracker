import './login.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (

    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" className="btn-block" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
