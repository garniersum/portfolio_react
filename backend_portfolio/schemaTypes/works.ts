import {defineField, defineType} from 'sanity'

export const worksType = defineType({
  name: 'works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),    
    defineField({
      name: 'projectLink',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'codeLink',
      type: 'string',
      validation: (rule) => rule.required(),
    }),        
    defineField({
      name: 'imgUrl',
      type: 'image',
      options:{
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [
        {
            name: 'tag',
            type: 'string'
        }
      ],
      validation: (rule) => rule.required(),
    }),    
  ],
})
