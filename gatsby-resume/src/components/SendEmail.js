import React from 'react';
import styled from 'styled-components';
import send from '../assets/send.png';
import Form from './Form';

const SendEmailContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
  @media (max-width: 450px) {
    display: grid;
    gap: 1rem;
    justify-content: unset;
    div:first-child {
      justify-self: center;
    }
  }
  div {
    flex: 1;
    img {
      width: 100%;
      max-width: 500px;
      @media (max-width: 450px) {
        max-width: 200px;
      }
    }
  }
`;

function SendEmail() {
  return (
    <div className="fullContainer" id="contact">
      <div className="container">
        <h1>Get CV and Send an email</h1>
      </div>
      <SendEmailContainer className="container">
        <div>
          <img src={send} alt="Send me an email" width="500" height="auto" />
        </div>
        <div style={{ maxWidth: '500px' }}>
          <Form />
        </div>
      </SendEmailContainer>
    </div>
  );
}

export default SendEmail;
