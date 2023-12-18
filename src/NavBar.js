import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Brand bg="black" variant="dark" href ="/" >
          <babel>PROJECT</babel>
        </Navbar.Brand>
        <Nav className="me-auto">
   
        <NavDropdown title="Root of Equation" id="nav-dropdown">
        <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
        <NavDropdown.Item href="/Falseposition">Falseposition</NavDropdown.Item>
        <NavDropdown.Item href="/Onepoint">One-point</NavDropdown.Item>
        <NavDropdown.Item href="/NewtonRaphson">Newton-Raphson</NavDropdown.Item>
        <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Linear Algebra" id="nav-dropdown">
        <NavDropdown.Item href="/Cramer">Cramer's rule</NavDropdown.Item>
        <NavDropdown.Item href="/GaussEliminate">Gauss Elimination</NavDropdown.Item>
        <NavDropdown.Item href="/Onepoint">Gauss Jordan</NavDropdown.Item>
        <NavDropdown.Item href="/Newton">Matrix Inversion</NavDropdown.Item>
        <NavDropdown.Item href="/Secant">LU Decomposition</NavDropdown.Item>
        <NavDropdown.Item href="/Secant">Cholesky Decomposition</NavDropdown.Item>
        <NavDropdown.Item href="/Secant">Jacobi Iteration</NavDropdown.Item>
        <NavDropdown.Item href="/Secant">Gauss-Seidel</NavDropdown.Item>
        <NavDropdown.Item href="/Secant">Conjugate Gradient</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Interpolation and Extrapolation" id="nav-dropdown">
        <NavDropdown.Item href="/NewtonD">Newton's Divided</NavDropdown.Item>
        <NavDropdown.Item href="/Lagrance">Lagrance Polynomial</NavDropdown.Item>
        <NavDropdown.Item href="/Spline">Spline</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown title="Regression" id="nav-dropdpwn">
        <NavDropdown.Item href="/Linear">Linear</NavDropdown.Item>
        <NavDropdown.Item href="/Polynomial">Polynomial</NavDropdown.Item>
        <NavDropdown.Item href="/Multiple">Multiple</NavDropdown.Item>
        </NavDropdown>
      
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;