import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://hightideaviation.com",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: "static",
  adapter: netlify(),
});
