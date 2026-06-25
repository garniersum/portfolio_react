import { createClient } from '@sanity/client';
import { createImageUrlBuilder as imageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_STUDIO_DATASET,
  apiVersion: '2026-06-14',
  useCdn: true,
}); 

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
