import {defineField, defineType} from 'sanity'

export const testimonialsType = defineType({
  name: 'testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
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
    defineField({
      name: 'feedback',
      type: 'string',
    }),
  ],
})
