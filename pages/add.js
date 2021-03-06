import Head from 'next/head';
import { Form, Container, Button } from 'react-bootstrap';
import FormImpl from 'react-bootstrap/esm/Form';
import Header from '../components/Header';

const Add = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>Add Dream</h1>
        <Form>
          <Form.Group controlId="dreamContent">
            <Form.Label>Tell us about your dream...</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
          <Form.Group controlId="dreamTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="tags"></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Add;
