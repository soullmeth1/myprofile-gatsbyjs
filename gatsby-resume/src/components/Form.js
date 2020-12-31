import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormStyle = styled.form`
  div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    label {
      font-size: 0.8em;
      color: var(--text-black);
      font-weight: 600;
    }
    input {
      padding: 5px;
      border: none;
      border-bottom: 1px solid lightgray;
      &::placeholder {
        color: var(--soft-gray);
      }
    }
    textarea {
      margin-top: 5px;
      padding: 5px;
      border-color: lightgray;
      height: 150px;
      &::placeholder {
        color: var(--soft-gray);
      }
    }
    button {
    }
  }
`;

function fetchingData(uri, data) {
  return fetch(`${uri}/sendmail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((err) => {
    console.log(new Error(err.message));
    // return err;
  });
}

function Form() {
  const [input, setInput] = useState({ name: '', email: '', message: '' });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetchingData(process.env.GATSBY_SERVERLESS_BASE, input);

    console.log(res);
    const result = await res?.json();
    console.log(result);

    if (res?.status === 200) {
      setInput({ name: '', email: '', message: '' });
    }
  };

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            id="name"
            required
            value={input.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            id="email"
            required
            value={input.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            placeholder="Enter Your Message"
            name="message"
            id="message"
            value={input.message}
            onChange={handleInput}
            required
          />
        </div>
        <div style={{ alignItems: 'flex-start' }}>
          <Button title="Send Message" primary type="submit" />
        </div>
      </FormStyle>
    </div>
  );
}

export default Form;
