import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIL by ut42tech",
  description: "Today I Learned by ut42tech",
};

const footer = <Footer>{new Date().getFullYear()} © Takuya Uehara</Footer>;

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
              logo={
                <div className="flex gap-2 items-center">
                  <h1 className="text-xl font-bold">TIL</h1>｜
                  <p className="text-sm font-mono">ut42tech</p>
                </div>
              }
              projectLink="https://github.com/ut42tech/til"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ut42tech/til/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
