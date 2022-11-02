export default defineNuxtConfig({
    srcDir: 'src/',
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: ['@/assets/css/reset.css', '@/assets/css/style.css'],

    runtimeConfig:{
        title: "日本中世気象災害史年表稿ビューア",
    },
})
