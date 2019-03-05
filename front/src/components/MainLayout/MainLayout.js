import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, BrowserRouter } from 'react-router-dom';

function MainLayout(props) {
  const { children } = props;
  return (
    <BrowserRouter>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Test App</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/users">Users Class Component</Link>
          </Nav>
        </Navbar>
        <section className="main-container">
          { children }
        </section>
      </>
    </BrowserRouter>
  );
}

export default MainLayout;
