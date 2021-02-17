import React from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.svg';

const HeaderContainer = styled.div`
  display: flex;
  background-color: var(--background);
  margin: 1rem auto;
  align-items: center;
  padding: 8rem 5rem;
  box-shadow: 0px 0px 10px -7px var(--light-gray);
  border-radius: 5px;
  gap: 5rem;
  font-size: 20px;
  @media (max-width: 450px) {
    position: relative;
    display: grid;
    padding: 2rem 1rem;
    div:last-child {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        45deg,
        rgba(239, 255, 250, 0.5),
        rgba(255, 223, 223, 0.2)
      );
      padding: 1rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
  div {
    flex: 1;
    p {
      max-width: 450px;
      line-height: 1.5em;
    }
    a {
      text-decoration: none;
      display: inline-block;
    }
  }
  > div:first-child {
    /* background-color: red; */
    img {
      width: 100%;
      height: auto;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer className="container">
      <div>
        <img src={hero} alt="frontend developer" width="500" height="400" />
      </div>
      <div>
        <h1>Hello, My Name is Mubaroq</h1>
        <h2>Frontend Developer</h2>
        <p>
          I am very interested in website development, as a frontend developer,
          it is an obligation to keep learning and develop myself.
        </p>
        <p>Let's get started.</p>
        <a href="#contact" className="btn btn-primary">
          Get In Touch
        </a>
      </div>
    </HeaderContainer>
  );
}

export default Header;
