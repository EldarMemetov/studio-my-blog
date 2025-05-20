import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '79cqv88x',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-19',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
