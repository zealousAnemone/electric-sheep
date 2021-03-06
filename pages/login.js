import Head from 'next/head';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import UserContext from '../components/UserContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Header />
      <Container>
        <h1>Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => setUser('test')}
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
