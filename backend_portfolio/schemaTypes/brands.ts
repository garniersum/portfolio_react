import {defineField, defineType} from 'sanity'

export const brandsType = defineType({
  name: 'brands',
  type: 'document',
  fields: [
    defineField({
      name: 'imgUrl',
      type: 'image',
      options:{
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
