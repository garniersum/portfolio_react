import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
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
      name: 'imageurl',
      type: 'image',
      options:{
        hotspot: true,
      }
    }),
  ],
})
