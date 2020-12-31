import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Filtering from '../components/Filtering';
import Project from '../components/Project';
import SEO from '../components/SEO';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

function projects(props) {
  const { data } = props;
  // console.log(data);

  // Get Unique Tech Category Not Empty
  const tes = data.allProject.nodes.reduce((acc, curr, i, arr) => {
    curr.category.forEach((cat) => {
      if (!acc.find((val) => val.name === cat.name))
        acc.push({ id: cat.id, name: cat.name });
    });
    return acc;
  }, []);
  // console.log(tes);

  return (
    <>
      <SEO title={'All Projects'} />
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Filtering data={tes} />
        </div>
        <ProjectsContainer>
          {data.projects.nodes.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ProjectsContainer>
      </div>
    </>
  );
}

export default projects;

export const query = graphql`
  query($name: String) {
    # query first all project which is filtered
    projects: allSanityProject(
      filter: { category: { elemMatch: { name: { eq: $name } } } }
    ) {
      totalCount
      nodes {
        id
        name
        description
        site
        source
        slug {
          current
        }
        category {
          id
          name
        }
        image {
          asset {
            url
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    # second all project query which is not filtering
    allProject: allSanityProject {
      nodes {
        category {
          id
          name
        }
      }
    }
  }
`;
