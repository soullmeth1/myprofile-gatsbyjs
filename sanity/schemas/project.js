import { GrProjects as icon } from 'react-icons/gr';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Project Name',
    },
    {
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },

    {
      name: 'image',
      title: 'Image',
      description: 'Shot your project',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'source',
      title: 'Source Code',
      description: 'Sourcecode link project',
      type: 'string',
    },
    {
      name: 'site',
      title: 'Site Web',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Descript Your Project',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Tech used',
      description: 'Technology used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
    },
  ],
};
