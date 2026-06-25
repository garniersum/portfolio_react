import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Studio_Portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  env: {
    miApiKey: process.env.SANITY_STUDIO_MI_API_KEY
  },  

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
