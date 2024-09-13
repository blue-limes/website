import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://bluelimes.dev",
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
