import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import LinkMore from '../components/LinkMore';
import SEO from '../components/SEO';

const DetailProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
  }
  > div + div {
    margin: 1rem 0;
  }
  .gatsby-image-wrapper {
    max-height: 650px;
    img {
      /* object-fit: cover !important;
      object-position: top !important; */
    }
  }
`;

function ProjectDetail(props) {
  const { data } = props;
  console.log(props, data);
  return (
    <>
      <SEO
        title={`${data.project.name}`}
        // image={data.project.image.asset.url}
      />
      <div>
        <div className="container" style={{ marginTop: '2rem' }}>
          <DetailProjectContainer>
            <div>
              <h1>{data.project.name}</h1>
            </div>
            <div>
              <Img
                fluid={data.project.image.asset.fluid}
                width="500"
                height="auto"
              />
            </div>
            <div>
              <h2>Description</h2>
              <p>{data.project.description}</p>
            </div>
            <LinkMore title="See More Project" to="/projects" />
          </DetailProjectContainer>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;

export const query = graphql`
  query($slug: String) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      id
      name
      site
      source
      description
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
      category {
        id
        name
      }
    }
  }
`;
