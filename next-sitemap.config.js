/** @type {import('next-sitemap').IConfig} */

import axios from 'axios';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getDataFromSanity(query) {
  try {
    const response = await axios.post(
      `${SITE_URL}/api/sanity`,
      {
        query,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Failed to fetch Sanity data');
  }
}

export const GET_DYNAMIC_PAGES_SLUGS = `{
  "categories": *[_type == "category"] {
    "slug": slug.current,
    },
  "posts": *[_type == "post"] {
    "slug": slug.current
  },
  "products": *[_type == "product"] {
    "slug": slug.current,
    "categorySlug": category->slug.current,
     }
}`;

async function getDynamicPages() {
  const res = await getDataFromSanity(GET_DYNAMIC_PAGES_SLUGS);

  const articles = res?.posts || [];
  const articlesPages = articles.map(article => `/blog/${article.slug}`);

  const categories = res?.categories || [];
  const categoriesPages = categories.map(
    categorie => `/catalog/${categorie.slug}`
  );

  const products = res?.products || [];
  const productsPages = products.map(
    product => `/catalog/${product.categorySlug}/${product.slug}`
  );

  return [
    ...articlesPages,
    ...categoriesPages,
    '/catalog/gifts',
    '/catalog/discounts',
    'catalog/new-products',
    ...productsPages,
  ];
}

const sitemapConfig = {
  siteUrl: SITE_URL,
  changefreq: 'monthly',
  sitemapSize: 5000,
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/*' },
    ],
  },
  alternateRefs: [
    {
      href: `${SITE_URL}/`,
      hreflang: 'uk',
    },
    {
      href: `${SITE_URL}/en`,
      hreflang: 'en',
    },
    {
      href: `${SITE_URL}/ru`,
      hreflang: 'ru',
    },
  ],
  additionalPaths: async config => {
    const staticPages = [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/about',
        changefreq: 'monthly',
        priority: 0.9,
      },
      {
        loc: '/delivery',
        changefreq: 'monthly',
        priority: 0.9,
      },
      {
        loc: '/contacts',
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/favorites',
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/blog',
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/checkout',
        changefreq: 'monthly',
        priority: 0.6,
      },
      {
        loc: '/confirmation',
        changefreq: 'monthly',
        priority: 0.6,
      },
      {
        loc: '/public-contract',
        changefreq: 'monthly',
        priority: 0.6,
      },
    ];

    const staticPaths = await Promise.all(
      staticPages.map(async page => {
        const transformed = await config.transform(config, page.loc);
        return {
          ...transformed,
          changefreq: page.changefreq,
          priority: page.priority,
        };
      })
    );

    const dynamicPages = await getDynamicPages(config);
    const dynamicPaths = await Promise.all(
      dynamicPages.map(page => config.transform(config, page))
    );

    return [...staticPaths, ...dynamicPaths];
  },
};

// Експортуємо конфігурацію
export default sitemapConfig;
