import { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import Header from '../components/Header';

const addDream = async (dream, tags, userId) => {
  try {
    const body = { dream, tags, userId };
    await fetch(`../api/entries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(error);
  }
};

const Add = ({ session }) => {
  const [dream_content, setDreamContent] = useState('');
  const [tags, setTags] = useState('');
  let userId;
  session ? (userId = session.user.user_id) : (userId = 1);
  return (
    <div>
      <Header />
      <Container>
        <h1>Add Dream</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addDream(dream_content, tags, userId);
          }}
        >
          <Form.Group controlId="dreamContent">
            <Form.Label>Tell us about your dream...</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              value={dream_content}
              onChange={(e) => setDreamContent(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dreamTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="tags"
              value={tags}
              onChange={(e) => {
                setTags(e.target.value);
              }}
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

export default Add;
