import {defineField, defineType} from 'sanity'

export const experiencesType = defineType({
  name: 'experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'works',
      type: 'array',
      of:[{ type: 'workExperience'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
