const tpl = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
 <url>
 <% urls.forEach(function(url){ %>
   <loc> <%- url.url %></loc>
   <priority> <%- url.priority %></priority>
   <lastmod> <%- url.lastmod %></lastmod>
   <changefreq><%- url.changefreq %></changefreq>
 <% }); %>
 </url>
</urlset>      

`

export default tpl