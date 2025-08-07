// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Ratree Wiki",
    description: "wiki for user play ratree server",
    // defaultLocale: 'en',
    // locales: {
    // 	en: {
    // 	label: 'English',
    // 	},
    // 	'zh-cn': {
    // 	label: '简体中文',
    // 	lang: 'zh-CN',
    // 	},
    // 	// Arabic docs in `src/content/docs/ar/`
    // 	ar: {
    // 	label: 'العربية',
    // 	dir: 'rtl',
    // 	},
    // },
    social: [
      {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/ratree-minecraft",
      },
    ],
    sidebar: [
      
      {
        label: "Getting Started",
        items: [
          { label: "How to join", slug: "wiki/how-to-join" },
          { label: "How to buy", slug: "wiki/how-to-shop" }
          
      ],
      },
      {
        label: "Guides",
        autogenerate: { directory: "wiki/guides" },

      },
      {
        label: "Skills",
        autogenerate: { directory: "wiki/skills" },
      },
      {
        label: "Examples",
        autogenerate: { directory: "wiki/example" },
      },
    ],
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});