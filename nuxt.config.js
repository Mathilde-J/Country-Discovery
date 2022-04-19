export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Country Discovery - Get informations on any country",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: "description",
        name: "description",
        content: "Country Discovery provides a lot of informations, like the languages spoken, currency, number of inhabitants etc, on any country around the world. You can search a country by it's name and filter the countries by continent."
      },
      {
        name: "keywords",
        content: "country, search, filter, country name, country flag, country currencies, country languages, country capital, country region, region, countries, countries data"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/country-discovery.png"
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
