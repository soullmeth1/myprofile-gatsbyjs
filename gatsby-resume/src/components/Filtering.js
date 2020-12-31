import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const FilterContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 10px;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin: 2rem 0;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  li {
    a {
      padding: 10px;
      /* background-color: red; */
      border-radius: 5px;
      text-decoration: none;
      color: var(--light-gray);
      &[aria-current='page'] {
        background: var(--soft-gray);
        color: var(--text-black);
      }
    }
  }
`;

const Btn = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 5px;
  margin: 0 5px;
  &:hover svg {
    color: black;
  }
  &:disabled {
    display: none;
  }
  svg {
    color: var(--light-gray);
  }
`;

function Filtering({ data }) {
  //   console.log(data);

  const [btn, setBtn] = useState(0);
  const ul = useRef();
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    // window.onresize = handleScroll;
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  function handleScroll() {
    if (ul.current.clientWidth < ul.current.scrollWidth) {
      //   console.log('nah');
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  const handleClick = (event) => {
    // console.dir(ul.current);
    if (event === 'left') {
      // ull.scroll(0, 0);
      ul.current.scroll(ul.current.scrollLeft - ul.current.clientWidth, 0);
    } else {
      ul.current.scroll(ul.current.clientWidth + ul.current.scrollLeft, 0);
    }
    setBtn(ul.current.clientWidth + ul.current.scrollLeft);
    console.log(btn);
    // setScroll((val) => true);
  };

  return (
    <>
      {scroll ? (
        <Btn
          aria-label="Slide Left"
          style={{ marginLeft: '-20px' }}
          disabled={ul.current?.scrollLeft > 0 ? false : true}
          onClick={() => handleClick('left')}
        >
          <BiLeftArrow />
        </Btn>
      ) : (
        ''
      )}
      <FilterContainer ref={ul}>
        <li>
          <Link to="/projects">All</Link>
        </li>
        {data.map((tech) => (
          <li key={tech.id}>
            <Link to={`/projects/${tech.name}`}>{tech.name}</Link>
          </li>
        ))}
      </FilterContainer>
      {scroll ? (
        <Btn
          aria-label="Slide Right"
          style={{ marginRight: '-20px' }}
          //   disabled={btn >= ul.current.scrollWidth ? true : false}
          disabled={
            ul.current?.scrollWidth ===
            ul.current?.clientWidth + ul.current?.scrollLeft
              ? true
              : false
          }
          onClick={() => handleClick('right')}
        >
          <BiRightArrow />
        </Btn>
      ) : (
        ''
      )}
    </>
  );
}

export default Filtering;
