import Header from '../components/Header';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>About Electric Sheep</h1>
        <p>
          Do you love to record your dreams? Do you feel like you live a second
          life when you go to sleep at night? Do you want to share those dreams
          with others, analyze them for themes, and see how they're affected by
          things like your menstrual cycle, the seasons, or the phases of the
          moon?
        </p>
        <p>
          {' '}
          This app allows you to keep an online dream diary that can be accessed
          from anywhere. Record your dreams, read them over later, analyze them
          for themes, and share them with your friends (if you'd like) on
          Facebook, Instagram, or Twitter.
        </p>
        <p>
          How about society as a whole? Are we dreaming the same dreams? Are
          they affected by geography, current events, weather?
        </p>
      </Container>
    </>
  );
};

export default About;
