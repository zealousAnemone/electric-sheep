
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

const Header = () => {
  const [session, loading] = useSession();

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Electric Sheep</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {session ? <><Nav.Link><Link href="/add"><a>Add Dream</a></Link></Nav.Link>
          <Nav.Link><Link href="/diary"><a>Dream Diary</a></Link></Nav.Link></> : <Nav.Link><Link href="/about"><a>About</a></Link></Nav.Link>}
        </Nav>
        {/* conditionally render my acct or login */}
       {session ? <><Nav.Link><Link href="/account"><a>My Account</a></Link></Nav.Link><button onClick={()=> signOut()}>Sign Out</button></> : <button onClick={()=> signIn()}>Sign in</button>}
      </Navbar.Collapse> 
      </Navbar>
  )
}

export default Header;