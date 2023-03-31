import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
 
   <>  <Navbar bg="dark" variant="dark">
   <Container>
     <Navbar.Brand href="/movies" className='me-5'>
      <Image className='rounded-circle me-3' width="50" height="50" src="/image.jpeg" alt='image'/>
      Movies</Navbar.Brand>
 
     <ul className='navbar-nav'>
     <li className='nav-item'>
      <Link className='nav-link' href="/">Home</Link>
      </li>
      <li  className='nav-item'>
       <Link className='nav-link' href="/signup">signup</Link></li>
       <li className='nav-item'>
      <Link className='nav-link' href="/contactus">contact us</Link></li>
      <li className='nav-item'>
       <Link className='nav-link' href="/aboutus">about us</Link></li>
     </ul>

   </Container>
 </Navbar>
 
 </>
 

  );
}

export default Header;