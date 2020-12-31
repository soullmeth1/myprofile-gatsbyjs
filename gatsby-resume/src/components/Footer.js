import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  background-color: white;
  padding-top: 8rem;
  border-top: 1px solid var(--soft-gray);
  margin-top: 1rem;
  @media (max-width: 450px) {
    padding: 2rem 0;
  }
  h1 {
    margin: 0;
  }
  p {
    margin: 2rem 0;
    @media (max-width: 450px) {
      margin: 1rem 0 0;
    }
  }
  ul {
    list-style: none;
    padding: 2rem 0;
    @media (max-width: 450px) {
      padding: 1rem 0;
    }
    li {
      padding: 0.5rem;
      color: var(--sub-text);
    }
    a {
      text-decoration: none;
    }
  }
  .footerCaption {
    @media (max-width: 500px) {
      flex-wrap: wrap;
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <h2>This website is built on Gatsbyjs</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ul>
            <li>Quick Start</li>
            <li>Get My CV</li>
            <li>Get In Touch</li>
            <li>Website Portofolio</li>
            <li>Source Code</li>
          </ul>
          <ul>
            <li>Keep Learning</li>
            <li>Crash Course</li>
            <li>Docs Guide</li>
            <li>Lifelong Learner</li>
            <li>Frontend Developer</li>
          </ul>
          <ul>
            <li>Why choose me</li>
            <li>Let me know</li>
            <li>Benefits</li>
            <li>Flexibility</li>
            <li>Passionate</li>
          </ul>
        </div>
        <hr />
        <div
          style={{ display: 'flex', justifyContent: 'space-between' }}
          className="footerCaption"
        >
          <div style={{ display: 'flex', gap: '2rem' }}>
            <p>@mubaroq &copy;2020 myResume, inc</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <p>Privacy Policy</p>
            <p>Term of Use</p>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
