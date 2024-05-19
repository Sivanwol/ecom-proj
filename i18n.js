module.exports = {
    locales: ['en'],
    defaultLocale: 'en',
    pages: {
        '*': ['common'],
        '/[lang]': ['home'],
        '/[lang]/second-page': ['home'],
    },
}