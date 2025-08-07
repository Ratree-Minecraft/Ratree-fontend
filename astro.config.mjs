// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      // base: '/docs/',
      // trailingSlash: "never",
      title: "Ratree Docs",
      description: "Documentation for Ratree",
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
			{ label: "How to play", slug: "wiki/example" },
			{ label: "How to pay", slug: "wiki/pay" },
			{ label: "How to join", slug: "wiki/how-to-join" }
			
		],
		},
		{
		  label: "Guides",
		  autogenerate: { directory: "wiki/guides" },

		},
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
