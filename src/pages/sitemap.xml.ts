import { getCollection } from 'astro:content';

function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export async function GET() {
  const posts = await getCollection('blog');
  const categories = [...new Set(posts.map(post => post.data.category))];

  // Regular pages
  const pages = [
    '/',
    '/blog',
    '/privacy',
    '/contact'
  ];

  // Category pages
  const categoryPages = categories.map(category => `/category/${category}`);

  // Blog post pages
  const postPages = posts.map(post => `/blog/${post.slug}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>https://www.vibho.com${page}</loc>
      <lastmod>${formatDate(new Date())}</lastmod>
      <changefreq>${page === '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page === '/' ? '1.0' : '0.7'}</priority>
    </url>
  `).join('')}
  ${categoryPages.map(page => `
    <url>
      <loc>https://www.vibho.com${page}</loc>
      <lastmod>${formatDate(new Date())}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
  ${postPages.map(page => `
    <url>
      <loc>https://www.vibho.com${page}</loc>
      <lastmod>${formatDate(new Date())}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}