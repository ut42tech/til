import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIL by ut42tech",
  description: "Today I Learned by ut42tech",
};

const footer = <Footer>{new Date().getFullYear()} © ut42tech</Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<h1 className="text-2xl"> TIL by ut42tech</h1>}
              projectLink="https://github.com/ut42tech/til"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ut42tech/til/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
