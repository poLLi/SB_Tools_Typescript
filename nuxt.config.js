export default {
    target: 'static',
    ssr: false,

    head: {
        title: 'Starbase Codes — JLN',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'author', content: 'Tim Pollerhof' },
            { name: 'format-detection', content: 'telephone=no' },

            {
                hid: 'description',
                name: 'description',
                content: 'Unofficial Starbase Tools. Everything you need to survive in Starbaser.'
            },
            {
                name: 'keywords',
                content: 'starbase Codes, community web tools, interactive map, database, ship builder, calculator, open world, game'
            },

            // Twitter Meta Tags
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@JL_PoLLi' },
            { name: 'twitter:image', content: 'http://starbase.codes/sb_tools.png' },
            { name: 'twitter:title', content: 'Starbase Codes — JLN' },
            {
                name: 'twitter:description',
                content: 'Unofficial Starbase Tools. Everything you need to survive in Starbase.'
            },

            // Open Graph Meta Tags
            { property: 'og:title', content: 'Starbase Codes — JLN' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'http://starbase.codes' },
            { property: 'og:image', content: 'http://starbase.codes/sb_tools.png' },
            {
                property: 'og:description',
                content: 'Unofficial Starbase Tools. Everything you need to survive in Starbase.'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
            { rel: 'icon', type: 'image/png', href: '/favicon/android-icon-192x192.png', sizes: '192x192' },
            { rel: 'apple-touch-icon', href: '/favicon/apple-icon-180x180.png', sizes: '180x180' }
        ]
    },
    loading: false,
    components: true,
    css: ['~/assets/scss/main.scss'],
    plugins: ['~/plugins/vue-clipboard.ts', '~/plugins/vue-bootstrap-icons.ts'],
    buildModules: ['@nuxt/typescript-build'],
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/i18n', 'vue-sweetalert2/nuxt'],
    i18n: {
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectedBrowserLanguage: false,

        locales: [
            {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en-US.js'
            },
            {
                name: 'German',
                code: 'de',
                iso: 'de-DE',
                file: 'de-DE.js'
            },
            {
                name: 'French',
                code: 'fr',
                iso: 'fr-FR',
                file: 'fr-FR.js'
            },
            {
                name: 'Russian',
                code: 'ru',
                iso: 'ru-RU',
                file: 'ru-RU.js'
            },
            {
                name: 'Portuguese (Brazil)',
                code: 'ptBR',
                iso: 'pt-BR',
                file: 'pt-BR.js'
            },
            {
                name: 'Chinese',
                code: 'cn',
                iso: 'zh-CN',
                file: 'zh-CN.js'
            },
            {
                name: 'Chinese (Traditional)',
                code: 'tw',
                iso: 'zh-TW',
                file: 'zh-TW.js'
            }
        ]
    },
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false
    },
    generate: {
        fallback: true
    },
    build: {
        extractCSS: true
    }
};
