import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';

import './register.module.scss';

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter complete name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <div className="d-grid gap-2">
            <Button variant="success" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
