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
    css: ['~/assets/scss/main.scss'],
    plugins: ['~/plugins/vue-clipboard.ts', '~/plugins/vue-bootstrap-icons.ts'],
    components: true,
    buildModules: ['@nuxt/typescript-build'],
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/i18n', 'vue-sweetalert2/nuxt'],
    i18n: {},
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
