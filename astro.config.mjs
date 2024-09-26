import { defineConfig } from "astro/config";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://bluelimes.dev",
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), mdx()]
});