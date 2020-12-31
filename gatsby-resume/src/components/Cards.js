import React from 'react';
import styled from 'styled-components';
import { FaRocket } from 'react-icons/fa';
import { BsBrightnessHighFill } from 'react-icons/bs';
import { AiFillBook, AiOutlineBulb } from 'react-icons/ai';

const CardContainer = styled.div`
  display: flex;
  /* gap: 2rem; */
  padding: 10rem 0;
  justify-content: space-evenly;
  @media (max-width: 450px) {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const CardStyle = styled.div`
  background-color: var(--background);
  padding: 1rem;
  /* border: 1px solid lightgray; */
  box-shadow: 0px 0px 5px -2px var(--light-gray);
  max-width: 150px;
  div {
    /* background-color: var(--soft-gray); */
    border: 1px solid var(--soft-gray);
    border-radius: 5px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 1rem 0 0.5rem;
    font-size: 1.2rem;
  }
  p {
    margin: 0;
  }
  svg {
    font-size: 5rem;
    color: var(--secondary);
  }
`;

function Cards() {
  return (
    <div>
      <CardContainer className="container">
        <Card
          title="Experience"
          desc="3+ Years experience in web development, learning by doing is the greatest."
        />
        <Card
          title="Passionate"
          desc="Coding is my passion, and I am going to code in the rest of my life."
        />
        <Card
          title="CS Background"
          desc="Computer Science makes me think about anything in the world."
        />
        <Card
          title="Optimize"
          desc="Nothing is impossible, you'll get you want, then just do it."
        />
      </CardContainer>
    </div>
  );
}

export default Cards;

function Card(props) {
  // console.log(props);
  const { title, desc } = props;
  return (
    <CardStyle>
      <div>
        {/* <img src="" alt="" width="150" height="100" /> */}
        {title === 'Experience' ? (
          <FaRocket />
        ) : title === 'Passionate' ? (
          <BsBrightnessHighFill />
        ) : title === 'CS Background' ? (
          <AiFillBook />
        ) : (
          <AiOutlineBulb />
        )}
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </CardStyle>
  );
}
