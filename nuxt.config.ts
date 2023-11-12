// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      preload: ["java", "python", "css", "scss", "ts", "js", "vue"],
      theme: {
        default: "vitesse-light",
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
  },
});
