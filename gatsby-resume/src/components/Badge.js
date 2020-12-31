import React from 'react';
import styled from 'styled-components';

const BadgeStyle = styled.div`
  background-color: var(--secondary);
  display: inline-block;
  padding: 0.25rem 1rem;
  color: white;
  margin: 5px;
`;

function Badge({ title }) {
  return <BadgeStyle>{title}</BadgeStyle>;
}

export default Badge;
