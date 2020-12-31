import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { FiGlobe } from 'react-icons/fi';
import {
  AiFillGithub,
  AiFillCaretRight,
  AiFillCaretLeft,
} from 'react-icons/ai';
import LinkMore from './LinkMore';
import useIndex from '../utils/useIndex';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  p {
    @media (max-width: 450px) {
      display: none;
    }
  }
`;

const ProjectShowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
  .imageWrapper {
    width: 90%;
  }
  div {
    /* flex: 1; */
    p {
      line-height: 1.5rem;
    }
  }
`;

const BtnContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 95%;
  margin: 0 auto;
  button {
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 1px 1px 6px -3px var(--light-gray);
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:active {
      box-shadow: 1px 1px 5px -3px var(--light-gray);
    }
  }
`;

function ProjectShow({ data }) {
  const trans = useRef();
  const { index, prev, next } = useIndex(data, trans);

  // console.log(trans.current);
  useEffect(() => {
    const time = setInterval(() => {
      next();
    }, 5000);
    return () => {
      clearInterval(time);
    };
  }, [index, next]);

  return (
    <div
      className="fullContainer"
      style={{ overflowX: 'hidden', position: 'relative' }}
    >
      <Wrapper className="container" style={{}}>
        <h1>Recently Project</h1>
        <LinkMore to="/projects" title="View More" />
        <BtnContainer>
          <button onClick={() => prev()} aria-label="Left Slide">
            <AiFillCaretLeft />
          </button>
          <button onClick={() => next()} aria-label="Right Slide">
            <AiFillCaretRight />
          </button>
        </BtnContainer>
      </Wrapper>
      <div
        ref={trans}
        style={{ display: 'flex', transition: 'transform 1s ease' }}
      >
        {data.map((val) => (
          <ProjectShowContainer key={val.id} className="container">
            <div style={{ maxWidth: '550px' }} className="imageWrapper">
              <Img
                fluid={val.image.asset.fluid}
                alt={val.name}
                width="500"
                height="400"
              />
            </div>
            <div style={{ maxWidth: '450px', padding: ' 0 2rem' }}>
              <h2>{val.name}</h2>
              <p>{val.description}</p>
              <hr />
              <div style={{ margin: '1rem 0' }}>
                <h3>Category</h3>
              </div>
              <div style={{ margin: '1rem 0' }}>
                {val.category.map((badge) => (
                  <Badge key={badge.id} title={badge.name} />
                ))}
              </div>
              <hr />
              <div
                style={{
                  margin: '1rem 0',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <a
                  className="btn btn-primary"
                  href={val.source}
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                  Source Code
                </a>
                <Link
                  className="btn btn-primary"
                  to={`/projects/${val.slug.current}`}
                  style={{ textDecoration: 'none' }}
                >
                  Details
                </Link>
                <a
                  className="btn btn-primary"
                  href={val.site}
                  style={{ textDecoration: 'none' }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FiGlobe />
                  Go to Site
                </a>
              </div>
            </div>
          </ProjectShowContainer>
        ))}
      </div>
    </div>
  );
}

export default ProjectShow;
