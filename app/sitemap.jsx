import { getAllSlugs } from '../sanity/sanity.utils.js';


const defualtSiteMapFields = {
  changeFrequency: 'monthly',
  priority: 0.5,
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://duskdances.com';

export default async function sitemap() {
  const allPages = await getAllSlugs();

  return allPages.map((page) => {
    let path = '';

    switch (page._type) {
      case 'page':
        path = `/${page.slug}`;
        break;
      case 'seasons':
        path = `/seasons/${page.slug}`;
        break;
      case 'staff':
        path = `/staff/${page.slug}`;
        break;
      default:
        path = `/${page.slug}`;
        break;
    }

    return {
      ...defualtSiteMapFields,
      url: `${baseUrl}${path}`,
      lastModified: page._updatedAt || new Date(),
    };
  });
}
