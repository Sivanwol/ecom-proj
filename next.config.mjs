import { withPlausibleProxy } from 'next-plausible'
import withPlugins from 'next-compose-plugins'
import withBundleAnalyzer from '@next/bundle-analyzer'
import nextTranslate from 'next-translate-plugin'
import { withAxiom } from 'next-axiom';


const bundleAnalyzer = withBundleAnalyzer()
/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: process.env.ANALYZE === 'true',
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

const plugins = [nextTranslate, withPlausibleProxy, withAxiom]
process.env.ANALYZE === 'true' && plugins.push(bundleAnalyzer)
export default withPlugins(plugins, nextConfig)