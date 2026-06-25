import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
