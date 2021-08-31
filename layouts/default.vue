<template>
    <div>
        <Navbar />
        <Nuxt />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    head() {
        const i18nSeo = this.$nuxtI18nHead({ addSeoAttributes: true });
        return {
            htmlAttrs: {
                ...i18nSeo.htmlAttrs
            },
            meta: [...i18nSeo.meta],
            link: [...i18nSeo.link]
        };
    }
});
</script>
