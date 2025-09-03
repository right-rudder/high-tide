import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  site: "https://hightideaviation.com",
  integrations: [mdx(), sitemap(), react(), tailwind(), playformInline()],
  output: "static",
  adapter: netlify(),
});