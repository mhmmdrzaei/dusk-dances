import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

const contentBlocks = `
  _type,
  _key,
  _type == 'accordionText' => {
    _type,
    _key,
    heading,
    subHeading,
    text[]{
      ...,
      _key,
      _type,
      _type == 'block' => { ... },
      _type == 'ctaButton' => { 
        buttonLabel,
        buttonUrl,
        openInNewWindow,
        buttonColor,
        buttonAlignment
      },
      _type == 'video' => {
        title,
        url
      }
    },
    background
  },
  _type == 'bodyText' => {
    _type,
    _key,
    width,
    background,
    content[]{
      ...,
      _type,
      _key,
      _type == 'block' => { ... },
      _type == 'ctaButton' => { 
        buttonLabel,
        buttonUrl,
        openInNewWindow,
        buttonColor,
        buttonAlignment
      },
      _type == 'video' => {
        title,
        url
      },
      _type == 'imageCustom' => {
        image {
          asset->{ url },
          alt,
          caption
        },
        width
      }
    }
  },
  _type == 'ctaButton' => {
    _type,
    _key,
    buttonLabel,
    buttonUrl,
    openInNewWindow,
    buttonColor,
    buttonAlignment
  },
  _type == 'gallery' => {
    _type,
    _key,
    title,
    images[]{
      image {
        asset->{ url },
        alt,
        caption
      }
    }
  },
  _type == 'hero' => {
    _type,
    _key,
    text,
    heroLinksTo,
    image {
      asset->{ url },
      alt,
      imageCaption
    }
  },
  _type == 'headingText' => {
    _type,
    _key,
    headingLevel,
    width,
    textAlign,
    text
  },
  _type == 'logoContainer' => {
    _type,
    _key,
    logos[]{
      image {
        asset->{ url },
        alt
      },
      url
    }
  },
  _type == 'imageCarousel' => {
    _type,
    _key,
    title,
    slides[]{
      image {
        asset->{ url },
        alt
      },
      caption
    }
  },
  _type == 'imageCustom' => {
    _type,
    _key,
    image {
      asset->{ url },
      alt,
      caption
    },
    width
  },
  _type == 'lineDivider' => {
    _type,
    _key,
    background
  },
  _type == 'textImageBox' => {
    _type,
    _key,
    alignment,
    background,
    image {
      asset->{ url },
      alt,
      caption
    },
    textContent[]{
      _type,
      _key,
      ...,
      _type == 'block' => { ... },
      _type == 'ctaButton' => { 
        buttonLabel,
        buttonUrl,
        openInNewWindow,
        buttonColor,
        buttonAlignment
      },
    }
  },
  _type == 'video' => {
    _type,
    _key,
    title,
    url
  }
`;


// Site Settings Query
export async function getsettings() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "siteSettings"][0] {
      siteTitle,
      siteDescription,
      headingMenu[] {
        menuItemName,
        menuItemUrl,
        hexColor,
        menuType,
        subMenuItems[]{
          subMenuItemName,
          subMenuItemUrl
        }
      },
      headingLogo {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      socialLinks[] {
        socialLink,
        icon
      },
      footer {
        column1 {
          heading,
          content[] {
            ...
          }
        },
        column2 {
          heading,
          content[] {
            ...
          }
        },
        row {
          heading,
          content[] {
            ...
          }
        },
        footerMenu[] {
          menuItemName,
          menuItemUrl,
          linkType,
          buttonStyle
        }
      },
      email {
        emailLabel,
        emailUrl
      },
      seoImg {
        asset->{
          url
        }
      },
      headingsidemenu[] {
        menuItemName,
        menuItemUrl,
        linkType,
        buttonStyle
      }
    }
  `);
}




// Page Query by Slug
export async function pageBySlugQuery(slug) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0] {
      title,
      slug,
      _key,
pageBlocks[] {
  ${contentBlocks}
}
,
      seo {
        seoTitle,
        seoDescription,
        seoImage {
          asset-> {
            url
          }
        }
      }
    }
  `, { slug });
}

// news Query by Slug
export async function newsBySlugQuery(slug) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "news" && slug.current == $slug][0] {
      title,
      slug,
      pageBlocks[] {
      ...,
          ${contentBlocks}
      
      },
      seo {
        seoTitle,
        seoDescription,
        seoImage {
          asset-> {
            url
          }
        }
      }
    }
  `, { slug });
}

export async function getNews() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "news"] {
       title,
      slug,
      pageDesc,
    }
  `
  )
}
export async function getSeason(slug) {
  return createClient(clientConfig).fetch(`
    
    *[_type == "seasons" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  seasonsLocations[]->{
    _id,
    title,
    slug,
    seasonInformation {
      pageSideText[]{
        ...,
        _type == 'block' => { ... },
        _type == 'ctaButton' => {
          buttonLabel,
          buttonUrl,
          openInNewWindow,
          buttonColor,
          buttonAlignment
        }
      },
      googleMapsLink,
      poster {
        asset->{
          url
        },
        alt
      }
    },
    additionalSiteLocation {
      ...,
      _type == 'bodyText' => {
        width,
        content[]{
          ...,
          _type == 'block' => { ... },
          _type == 'ctaButton' => {
            buttonLabel,
            buttonUrl,
            openInNewWindow,
            buttonColor,
            buttonAlignment
          },
          _type == 'video' => {
            title,
            url
          },
          _type == 'imageCustom' => {
            image {
              asset->{
                url
              },
              alt,
              caption
            },
            width
          }
        },
        background
      }
    },
  },
  seasonInformation {
    pageSideText[]{
      ...,
      _type == 'block' => { ... },
      _type == 'ctaButton' => {
        buttonLabel,
        buttonUrl,
        openInNewWindow,
        buttonColor,
        buttonAlignment
      }
    },
    googleMapsLink,
    poster {
      asset->{
        url
      },
      alt
    }
  },
  pageBlocksTop[]{
    _type == 'hero' => {
      image {
        asset->{
          url
        },
        alt,
        imageCaption
      },
      text,
      heroLinksTo
    },
    _type == 'headingText' => {
      headingLevel,
      width,
      textAlign,
      text
    },
    _type == 'imageCustom' => {
      image {
        asset->{
          url
        },
        alt,
        caption
      },
      width
    },
    _type == 'lineDivider' => {
      background
    },
    _type == 'video' => {
      title,
      url
    }
  },
  pageDetailsBlocks[]{
    _type == 'accordionText' => {
      heading,
      subHeading,
      text[]{
        ...,
        _type == 'block' => { ... },
        _type == 'ctaButton' => { 
          buttonLabel,
          buttonUrl,
          openInNewWindow,
          buttonColor,
          buttonAlignment
        },
        _type == 'video' => {
          title,
          url
        }
      },
      background
    },
    _type == 'bodyText' => {
      width,
      content[]{
        ...,
        _type == 'block' => { ... },
        _type == 'ctaButton' => { 
          buttonLabel,
          buttonUrl,
          openInNewWindow,
          buttonColor,
          buttonAlignment
        },
        _type == 'video' => {
          title,
          url
        },
        _type == 'imageCustom' => {
          image {
            asset->{
              url
            },
            alt,
            caption
          },
          width
        }
      },
      background
    },
    _type == 'ctaButton' => {
      buttonLabel,
      buttonUrl,
      openInNewWindow,
      buttonColor,
      buttonAlignment
    },
    _type == 'gallery' => {
      title,
      images[]{
        image {
          asset->{
            url
          },
          alt,
          caption
        }
      }
    },
    _type == 'hero' => {
      image {
        asset->{
          url
        },
        alt,
        imageCaption
      },
      text,
      heroLinksTo
    },
    _type == 'headingText' => {
      headingLevel,
      width,
      textAlign,
      text
    },
    _type == 'logoContainer' => {
      logos[]{
        image {
          asset->{
            url
          },
          alt
        },
        url
      }
    },
    _type == 'imageCarousel' => {
      title,
      slides[]{
        image {
          asset->{
            url
          },
          alt
        },
        caption
      }
    },
    _type == 'imageCustom' => {
      image {
        asset->{
          url
        },
        alt,
        caption
      },
      width
    },
    _type == 'lineDivider' => {
      background
    },
    _type == 'textImageBox' => {
      image {
        asset->{
          url
        },
        alt,
        caption
      },
      textContent[]{
        ...,
        _type == 'ctaButton' => {
          buttonLabel,
          buttonUrl,
          openInNewWindow,
          buttonColor,
          buttonAlignment
        }
      },
      alignment,
      background
    },
    _type == 'video' => {
      title,
      url
    }
  }
}
    `, {slug})
}

export async function getSeasons() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "seasons"] {
       title,
      slug,
      pageDesc,
      seasonInformation {
       poster {
        asset->{
          url
        },
        alt
      }
      
      }

           

    }
  `
  )
}

// TODO likely dont need individual staff role queries
// export async function getStaff() {
//   const staff =  await createClient(clientConfig).fetch(
//     groq`
//      *[_type == "staff" && "staff" in role] {
//       name,
//       _id,
//       slug {
//         current
//       },
//       image {
//         asset -> {
//           url
//         },
//         alt
//       },
//       position,
//       email,
//       website,
//       bio
//     }
//   `
//   )
//   staff.sort((a, b) => {
//     // Get last names (split name and get last word)
//     const lastNameA = a.name.split(' ').pop().toLowerCase();
//     const lastNameB = b.name.split(' ').pop().toLowerCase();
    
//     // Compare last names alphabetically
//     if (lastNameA < lastNameB) return -1;
//     if (lastNameA > lastNameB) return 1;
//     return 0;
//   });

//   return staff;
// }

export async function getAllStaff() {
  const staff =  await createClient(clientConfig).fetch(
    groq`
     *[_type == "staff"] {
      name,
      _id,
      slug {
        current
      },
      image {
        asset -> {
          url
        },
        alt
      },
      position,
      email,
      website,
      bio,
      role[0]
    }
  `
  )
  staff.sort((a, b) => {
    // Get last names (split name and get last word)
    const lastNameA = a.name.split(' ').pop().toLowerCase();
    const lastNameB = b.name.split(' ').pop().toLowerCase();
    
    // Compare last names alphabetically
    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });

  return staff;
}

export async function getFounder() {
  return createClient(clientConfig).fetch(
    groq`
     *[_type == "staff" && "founder" in role] {
      name,
      slug {
        current
      },
      image {
        asset -> {
          url
        },
        alt
      },
      position,
      email,
      website,
      bio
    }
  `
  )
}
