export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'en-US',
    langDir: 'locales',
    strategy: 'no_prefix',

    locales: [
      { code: 'en-US', language: 'en-US', file: 'en-US.json' },
      { code: 'fr-FR', language: 'fr-FR', file: 'fr-FR.json' },
      { code: 'ar-AR', language: 'ar-AR', file: 'ar-AR.json' },
      { code: 'ru-RU', language: 'ru-RU', file: 'ru-RU.json' }
    ],

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'nuxt-lang',
      redirectOn: 'root'
    }
  }
})