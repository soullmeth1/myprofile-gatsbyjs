import { GrTechnology as icon } from 'react-icons/gr';

export default {
  name: 'technology',
  title: 'Tech',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Tech Name',
      description: 'Technology use',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Show Icon',
      options: {
        hotspot: true,
      },
    },
  ],
};
