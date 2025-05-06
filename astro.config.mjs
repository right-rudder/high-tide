import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://hightideaviation.com",
  integrations: [mdx(), sitemap(), react(), tailwind(), partytown()],
  output: "static",
  adapter: netlify(),
});
