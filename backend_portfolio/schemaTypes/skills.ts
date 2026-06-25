import {defineField, defineType} from 'sanity'

export const skillsType = defineType({
  name: 'skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),    
    defineField({
      name: 'bgColor',
      type: 'string',
      validation: (rule) => rule.required(),
    }),    
    defineField({
      name: 'icon',
      type: 'image',
      options:{
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
