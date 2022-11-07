export default defineNuxtConfig({
    srcDir: 'src/',
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: ['@/assets/css/reset.css', '@/assets/css/style.css'],

    app: {
        head: {
            title: "日本中世気象災害史年表稿ビューア",
            charset: "utf-8",
            meta: [
                {
                    name: "日本中世気象災害史年表稿ビューア",
                    content: "藤木久志 編『日本中世気象災害史年表稿』（高志書院）の簡易検索システム",
                }

            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})
