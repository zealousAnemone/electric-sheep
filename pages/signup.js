import Head from 'next/head';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Signup = () => {
  const [newUser, setNewUser] = useState({
    name: null,
    email: null,
    password: null,
    birthday: null,
    zipcode: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `hi ${newUser.name}, ${newUser.email}, ${newUser.password}, ${newUser.birthday}, ${newUser.zipcode}`
    );
  };
  return (
    <div>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="date"
              value={newUser.birthday}
              onChange={(e) =>
                setNewUser({ ...newUser, birthday: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="text"
              value={newUser.zipcode}
              onChange={(e) =>
                setNewUser({ ...newUser, zipcode: e.target.value })
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
