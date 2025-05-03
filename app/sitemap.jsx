// import { getAllSlugs } from '../sanity/sanity.utils.js';


// const defualtSiteMapFields = {
//   lastModified: new Date(),
//   changeFrequency: 'monthly',
//   priority: 0.5,
// }

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://duskdances.com';

// export default async function sitemap() {
//   const allPages = await getAllSlugs();

//   return allPages.map((page) => (
//     {
//       ...defualtSiteMapFields,
//       url: `${baseUrl}/${page.url}`,
//       lastModified: page.lastModified,
//     }
//   ));
// }