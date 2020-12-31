import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

// const images = [
//   { title: 'React', uri: require('../assets/ra.png') },
//   { title: 'Heroku', uri: require('../assets/hr.png') },
//   { title: 'Webpack Module Bundler', uri: require('../assets/wp.png') },
//   { title: 'Rest API', uri: require('../assets/rs.png') },
//   { title: 'Nodejs', uri: require('../assets/nd.png') },
//   { title: 'Database MongoDb', uri: require('../assets/mdb.png') },
//   { title: 'Git Vcs', uri: require('../assets/gt.png') },
//   { title: 'Graphql', uri: require('../assets/gra.png') },
//   { title: 'Firebase', uri: require('../assets/fbs.png') },
//   { title: 'Github', uri: require('../assets/gth.png') },
//   { title: 'Gatsby', uri: require('../assets/gts.png') },
//   { title: 'Basic Frontend', uri: require('../assets/jhc.png') },
//   { title: 'Database Mysql', uri: require('../assets/ms.png') },
//   { title: 'Netlify', uri: require('../assets/net.png') },
//   { title: 'Node Packge Manager', uri: require('../assets/np.png') },
//   { title: 'Sanity CMS', uri: require('../assets/san.png') },
//   { title: 'Sass CSS Preprocessor', uri: require('../assets/ss.png') },
// ];

const Wrapper = styled.div`
  padding: 8rem 0;
  @media (max-width: 450px) {
    padding: 2rem 0;
    h1 {
      margin-top: 0;
    }
  }
`;

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 2rem;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px white, 1px 1px 5px -1px #80808063;
  @media (max-width: 450px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: unset;
    gap: 2rem;
  }
  > div {
    width: 100px;
    max-height: 150px;
    @media (max-width: 450px) {
      min-width: 50px;
    }
  }
`;

function Technologies(props) {
  const { data } = props;
  // console.log(props);
  return (
    // <div className="fullContainer">
    <Wrapper className="container">
      {/* <div className="container "> */}
      <div>
        <h1>Powered by</h1>
      </div>
      <TechContainer>
        {data.map((val) => (
          // <img src={val.image.asset.url} key={val.id} />
          // <div>
          <Img
            fluid={val.image.asset.fluid}
            key={val.id}
            alt={val.name}
            width="100"
            height="100"
          />
          // </div>
        ))}
      </TechContainer>
    </Wrapper>
    // </div>
  );
}

export default Technologies;
