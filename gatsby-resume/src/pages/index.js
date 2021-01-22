import { graphql } from 'gatsby';
import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import ProjectShow from '../components/ProjectShow';
import SendEmail from '../components/SendEmail';
import SEO from '../components/SEO';
import Technologies from '../components/Technologies';

function homePage(props) {
  const { data } = props;
  // console.log(data);
  return (
    <div>
      <SEO title="Home" />
      <Header />
      <Cards />
      <ProjectShow data={data.projects.nodes} />
      <Technologies data={data.techs.nodes} />
      <SendEmail />
    </div>
  );
}

export default homePage;

export const query = graphql`
  query MyQuery {
    techs: allSanityTechnology {
      nodes {
        id
        name
        image {
          asset {
            fluid(maxWidth: 50) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    projects: allSanityProject {
      nodes {
        id
        name
        site
        source
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
            url
          }
        }
        category {
          name
          id
        }
      }
    }
  }
`;
