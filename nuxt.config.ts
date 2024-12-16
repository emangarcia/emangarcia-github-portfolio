// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/scss/tailwind.scss",
    "@/assets/libs/@mdi/font/css/materialdesignicons.min.css",
    "@/assets/libs/@iconscout/unicons/css/line.css",
    "@/assets/libs/animate.css/animate.min.css",
  ],
  app: {
    head: {
      title: "EmanGarcia - Nuxt Js Personal Portfolio Site",
      titleTemplate: "EmanGarcia - Nuxt Js Personal Portfolio Site",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      htmlAttrs: { lang: "en", dir: "ltr", class: "light scroll-smooth" },
      bodyAttrs: {
        class:
          "font-poppins text-base text-black dark:text-white dark:bg-slate-900",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [],
      script: [],
    },
    baseURL: "/portfolio/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
