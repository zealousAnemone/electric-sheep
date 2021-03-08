
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { useContext } from 'react';
import UserContext from './UserContext';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Electric Sheep</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {user ? <><Nav.Link><Link href="/add"><a>Add Dream</a></Link></Nav.Link>
          <Nav.Link><Link href="/diary"><a>Dream Diary</a></Link></Nav.Link></> : <><Nav.Link><Link href="/about"><a>About</a></Link></Nav.Link><Nav.Link><Link href="/signup"><a>Sign up</a></Link></Nav.Link>  </>}
        </Nav>
        {/* conditionally render my acct or login */}
        <Nav.Link>{user ? <Link href="/account"><a>My Account</a></Link> : <Link href="/login"><a>Login</a></Link>}</Nav.Link>
      </Navbar.Collapse> 
      </Navbar>
  )
}

export default Header;