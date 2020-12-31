import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { BsBoxArrowRight } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import { navigate } from 'gatsby';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .imgContainer {
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }
  .imgContainer:hover .hover {
    opacity: 1;
  }
  .imgContainer:hover .gatsby-image-wrapper {
    /* transform: scale(1.1); */
  }
  .gatsby-image-wrapper {
    height: 100%;
    /* transition: transform 0.2s ease; */
  }
  button {
    margin: 8px 0;
    display: flex;
    align-items: center;
    border: none;
    background: none;
    color: var(--light-gray);
    cursor: pointer;
    transition: all 0.1s ease;
    outline: none;
    &:hover {
      color: var(--text-black);
      transform: scale(1.05);
    }
    svg {
      margin: 0 5px;
    }
    span {
      @media (max-width: 450px) {
        display: none;
      }
    }
  }
  h1 {
    font-size: 1.2rem;
    margin: 0;
    @media (max-width: 450px) {
      font-size: 1rem;
      white-space: nowrap;
    }
  }
`;

const HoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.5));
  transition: all 0.2s ease;
  opacity: 0;
  display: flex;
  pointer-events: none;
  align-items: flex-end;
  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    /* background-color: red; */
    p {
      color: white;
      font-size: 1.2rem;
    }
    div {
      /* background-color: blue; */
      display: flex;
      gap: 10px;
      svg {
        background-color: white;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        pointer-events: initial;
        color: var(--text-black);
        transition: all 0.1s ease;
        &:hover {
          color: black;
          transform: scale(1.1);
        }
      }
    }
  }
`;

function Project({ project }) {
  const docs = useRef();
  const img = useRef();
  const handleMove = (e) => {
    if (e.target.nodeName !== 'IMG') return;
    const x = e.target.clientWidth / 2;
    const y = e.target.clientHeight / 2;
    let resX = e.layerX - x;
    let resY = e.layerY - y;
    // console.log(e);
    // console.log(e.movementX, e.movementY);
    // console.log(x);
    // console.log((resX / 10) * -1);
    // console.log(resX > 1 ? resX / 10 : resX * 10 * -1);
    // console.log(img.current.imageRef.current);
    img.current.imageRef.current.style.transform = `scale(1.1) translate(${
      (resX / 10) * -1
    }px, ${(resY / 10) * -1}px)`;
  };

  useEffect(() => {
    img.current.imageRef.current.style.transition = `transform .1s ease`;
    // const docs = document.querySelectorAll('.imgContainer');
    // console.log(docs);
    docs.current.addEventListener('mousemove', handleMove);
    docs.current.addEventListener('mouseleave', function (e) {
      img.current.imageRef.current.style.transform = `scale(1) translate(0px, 0px)`;
      //   console.log(img.current);
    });
  }, [docs]);

  return (
    <ProjectContainer>
      <div className="imgContainer" ref={docs}>
        <Img
          fluid={project.image.asset.fluid}
          width="500"
          height="100%"
          ref={img}
        />
        <HoverContainer className="hover">
          <div>
            {/* <p>{project.name}</p> */}
            <div>
              <a
                aria-label="source"
                href={project.source}
                target="__blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={25} />
              </a>
              <a
                aria-label="site"
                href={project.site}
                target="__blank"
                rel="noopener noreferrer"
              >
                <FiGlobe size={25} />
              </a>
            </div>
          </div>
        </HoverContainer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>{project.name}</h1>
        <button
          onClick={() => navigate(`/projects/${project.slug.current}`)}
          aria-label={`${project.name} detail`}
        >
          <span>Details</span> <BsBoxArrowRight />
        </button>
      </div>
    </ProjectContainer>
  );
}

export default Project;
