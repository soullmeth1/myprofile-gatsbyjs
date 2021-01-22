import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { BsArrowRight, BsThreeDots } from 'react-icons/bs';

const Content = styled.div`
  flex: 3;
  h1 {
    color: var(--title);
  }
  h2 {
    color: var(--title);
    margin: 2rem auto 1rem;
  }
  p {
    line-height: 2rem;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
  }
`;

const Side = styled.div`
  flex: 1;
  max-height: 100vh;
  overflow-y: auto;
  position: sticky;
  top: 0;
  @media (max-width: 650px) {
    display: none;
  }
  > ul + ul {
    margin-top: 1rem;
  }
  ul {
    list-style: none;
    h3 {
      margin: 2rem 0 1rem;
      color: var(--title);
    }
    li {
      margin: 1rem 0;
      a {
        color: var(--sub-text);
        text-decoration: none;
      }
    }
  }
`;

const CardLearn = styled.div`
  padding: 1rem 1.5rem;
  background-color: white;
  border: 1px solid var(--soft-gray);
  margin: 1rem auto;
  border-radius: 3px;
  h3 {
    padding: 5px;
    border-bottom: 2px solid var(--title);
  }

  h3,
  h4 {
    color: var(--title);
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const BtnMore = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
`;

const BtnStart = styled.a`
  border-radius: 2px;
  text-decoration: none;
  color: white;
  background-color: var(--title);
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  svg {
    margin-left: 10px;
  }
`;

function about() {
  return (
    <div
      className="container"
      style={{
        gap: '5rem',
        margin: '2rem auto',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <SEO title={'About Me'} />
      <Content>
        <h1>My Biography</h1>
        <h2 id="whoiam">Who I am</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          distinctio ullam ex blanditiis provident natus magnam quod autem
          obcaecati voluptates voluptas ipsa cupiditate unde laborum possimus
          maxime iusto quaerat saepe necessitatibus, officiis, in eos. Animi cum
          sequi, distinctio maiores rerum excepturi, cupiditate rem, possimus
          nobis repellat obcaecati perferendis eaque aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          distinctio ullam ex blanditiis provident natus magnam quod autem
          obcaecati voluptates voluptas ipsa cupiditate unde laborum possimus
          maxime iusto quaerat saepe necessitatibus, officiis, in eos. Animi cum
          sequi, distinctio maiores rerum excepturi, cupiditate rem, possimus
          nobis repellat obcaecati perferendis eaque aut?
        </p>
        <h2 id="whychooseme">Why choose me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          distinctio ullam ex blanditiis provident natus magnam quod autem
          obcaecati voluptates voluptas ipsa cupiditate unde laborum possimus
          maxime iusto quaerat saepe necessitatibus, officiis, in eos. Animi cum
          sequi, distinctio maiores rerum excepturi, cupiditate rem, possimus
          nobis repellat obcaecati perferendis eaque aut?
        </p>
        <div style={{ marginTop: '4rem' }}>
          <h1>Learning Path</h1>
          {Array.from({ length: 3 }).map((_, i) => (
            <CardLearn key={i}>
              <div>
                <h3>React Fundamental</h3>
                <BtnMore>
                  <BsThreeDots size={20} />
                </BtnMore>
              </div>
              <p>
                Whether you want to uncover the secrets of the universe, or you
                want to pursue a career in the 21st century, then basic computer
                programming is an essential skill to learn.
              </p>
              <div>
                <h4>reactjs</h4>
                <BtnStart href="">
                  Start
                  <BsArrowRight />
                </BtnStart>
              </div>
            </CardLearn>
          ))}
        </div>
      </Content>
      <Side>
        <ul>
          <h3>My Biography</h3>
          <li>
            <a href="#whoiam">Who I am</a>
          </li>
          <li>
            <a href="#whychooseme">Why choose me</a>
          </li>
        </ul>
        <ul>
          <h3>Learning Path</h3>
          <li>GraphQL Express</li>
          <li>GraphQL Subscription</li>
          <li>GraphQL API</li>
          <li>Static Site Generator</li>
          <li>React Fundamental</li>
        </ul>
      </Side>
    </div>
  );
}

export default about;
