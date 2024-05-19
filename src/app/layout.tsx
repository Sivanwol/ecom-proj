import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import HeaderBar from "@app/components/headerBar";
import { GoogleTagManager } from '@next/third-parties/google'
import { DefaultSeo } from 'next-seo';

const inter = Inter({ subsets: ["latin"] });
// import your default seo configuration
import SEO from '@app/config/seo.config';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DefaultSeo
          openGraph={SEO.openGraph}
          twitter={SEO.twitter}
        />
      <GoogleTagManager gtmId={process.env.GOOGLE_ID || ''} />
      <body className={inter.className}>
        <Theme>
          <div className="bg-search_mp-bg_white flex flex-col items-center">
            <div className="flex items-center justify-between w-full px-5 transition-all duration-200 bg-violet-800" style={{ paddingTop: "22px", paddingBottom: "22px", height: "44px" }}>
              <div id="lColumn" >&nbsp;</div>
              <div id="rColumn" className="flex items-center gap-10 overflow-hidden text-sm font-semibold transition-all duration-200" style={{ height: " 20px" }}>
                <div className="hidden md:block">
                  <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noreferrer" className="text-white hover:text-theme_airship_purple-200 cursor-pointer">Add you'r Business</a>
                </div>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noreferrer">Out Mission</a>
              </div>
            </div>
            <div className="w-full max-w-[1600px] pt-6 pb-36 lg:pb-10">
              <HeaderBar />
              {children}
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}