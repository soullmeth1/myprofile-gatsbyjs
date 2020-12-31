const path = require('path');

async function createProjectPage({ graphql, actions }) {
  const pageTemplate = path.resolve('./src/pages/projects.js');
  const pageDetailTemplate = path.resolve('./src/templates/ProjectDetail.js');
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
      techs: allSanityTechnology {
        nodes {
          id
          name
        }
      }
    }
  `);
  await Promise.all([
    data.projects.nodes.forEach((project) => {
      createPage({
        path: `projects/${project.slug.current}`,
        component: pageDetailTemplate,
        context: {
          slug: project.slug.current,
        },
      });
    }),
    data.techs.nodes.forEach((tech) => {
      createPage({
        path: `projects/${tech.name}`,
        component: pageTemplate,
        context: {
          name: tech.name,
        },
      });
    }),
  ]);
}

exports.createPages = async (obj) => {
  await createProjectPage(obj);
};
