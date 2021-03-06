
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

const Header = (props) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Electric Sheep</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link href="/add"><a>Add Dream</a></Link></Nav.Link>
          <Nav.Link><Link href="/diary">Dream Diary</Link></Nav.Link>
        </Nav>
        {/* conditionally render my acct or login */}
        <Nav.Link>{props.loggedIn ? <Link href="/account">My Account</Link> : <Link href="/login">Login</Link>}</Nav.Link>
      </Navbar.Collapse> 
      </Navbar>
  )
}

export default Header;