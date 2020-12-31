import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: var(--background);
  box-shadow: 1px 1px 10px -5px var(--light-gray);
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      li {
        padding: 10px 15px;
        a {
          text-decoration: none;
          display: inline-block;
          color: var(--sub-text);
          &[aria-current='page'] {
            color: var(--btn-primary);
          }
        }
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <nav className="container">
        <h1 className="logo">myProfile</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Nav>
  );
}

export default Navbar;
