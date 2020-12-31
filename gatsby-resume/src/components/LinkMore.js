import { Link } from 'gatsby';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

const LinkMoreContainer = styled.div`
  a {
    text-decoration: none;
    color: var(--btn-primary);
    display: flex;
    align-items: center;
    p {
      color: var(--btn-primary);
    }
    svg {
      margin-left: 5px;
      font-size: 1.5rem;
    }
  }
`;

function LinkMore({ title, to }) {
  return (
    <LinkMoreContainer>
      <Link to={to} aria-label="View More">
        <p>{title}</p> <BsArrowRight />
      </Link>
    </LinkMoreContainer>
  );
}

export default LinkMore;
