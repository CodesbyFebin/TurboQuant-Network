/* 
  TurboQuant Development Sitemap Bridge
  Resolves the 404 Error in Dev Mode while ensuring the Build Sitemap remains correct.
  v4.4 | SEO Reliability
*/

import { TRANSLATIONS } from "../data/translations";

const BASE_URL = 'https://turboquant.network';

const PILLARS = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10'];
const LANGS = ['en','hi','ml','es','ja','zh','de','fr'];

export async function GET() {
  const urls = [];
  
  // Core Pages
  ['','ai-agent-platform','ai-kanban-board','ai-automation-system','blog','about'].forEach(p => {
    LANGS.forEach(l => {
       urls.push(`${BASE_URL}/${p}${p?'/':''}?lang=${l}`);
    });
  });

  // Pillars (Simulated for dev index)
  PILLARS.forEach(p => {
    urls.push(`${BASE_URL}/blog#pillar/${p}`);
  });

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${urls.map(u => `
        <url>
          <loc>${u}</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
