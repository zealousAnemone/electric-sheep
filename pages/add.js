import { getSession } from 'next-auth/client';
import { useState } from 'react';
// import { getSession } from 'next-auth';
import { Form, Container, Button } from 'react-bootstrap';
import Header from '../components/Header';

const addDream = async (dream, tags) => {
  try {
    const session = await getSession();
    const body = { dream, tags, userId: session.user.user_id };
    await fetch(`../api/entries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(error);
  }
};

const Add = () => {
  const [dream_content, setDreamContent] = useState('');
  const [tags, setTags] = useState('');
  let userId = 1;
  return (
    <div>
      <Header />
      <Container>
        <h1>Add Dream</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addDream(dream_content, tags);
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
