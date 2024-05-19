const plausiblePlugin = withPlausibleProxy
const bundleAnalyzer = withBundleAnalyzer()
const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: process.env.APP_ENV === 'ANALYZE',
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
        localeDetection: false
    },

    transpilePackages: ['lucide-react'],
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: []
    }
}

const plugins = [nextTranslate, plausiblePlugin, nextTranslate]
process.env.APP_ENV === 'ANALYZE' && plugins.push(bundleAnalyzer)
module.exports = withPlugins(plugins, nextConfig)