import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

const contentBlocks = `
 {
    _type: 'accordionText' => {
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
    }
  },
  // Body Text Block
  {
    _type: 'bodyText' => {
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
  // CTA Button Block
  {
    _type: 'ctaButton' => {
      buttonLabel,
      buttonUrl,
      openInNewWindow,
      buttonColor,
      buttonAlignment
    }
  },
  // Gallery Block
  {
    _type: 'gallery' => {
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
    }
  },
  // Hero Block
  {
    _type: 'hero' => {
      image {
        asset->{
          url
        },
        alt,
        imageCaption
      },
      text,
      heroLinksTo
    }
  },
  // Heading Text Block
  {
    _type: 'headingText' => {
      headingLevel,
      width,
      textAlign,
      text
    }
  },
  // Logo Container Block
  {
    _type: 'logoContainer' => {
      logos[]{
        image {
          asset->{
            url
          },
          alt
        },
        url
      }
    }
  },
  // Image Carousel Block
  {
    _type: 'imageCarousel' => {
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
    }
  },
  // Image Custom Block
  {
    _type: 'imageCustom' => {
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
  // Line Divider Block
  {
    _type: 'lineDivider' => {
      background
    }
  },
  // Text Image Box Block
  {
    _type: 'textImageBox' => {
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
    }
  },
  // Video Block
  {
    _type: 'video' => {
      title,
      url
    }
  }
`

// Site Settings Query
export async function getsettings() {
  return createClient(clientConfig).fetch( groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    headingMenu[] {
      menuItemName,
      menuItemUrl
    },
    membersAreaPassword,
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
      socialIcon
    },
    footerMenu[] {
      menuItemName,
      menuItemUrl
    },
    email {
      emailLabel,
      emailUrl
    }
  }
`,
  )
}


// Page Query by Slug
export async function pageBySlugQuery(slug) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0] {
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



// Mentor and Staff Query
export async function getStaff() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "staff" && "staff" in role] {
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
export async function getBoard() {
  return createClient(clientConfig).fetch(
    groq`
     *[_type == "staff" && "board" in role] {
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
