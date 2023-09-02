import Head from "next/head";
import { LayoutProps } from "../types";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext", "devanagari", "latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function SharedLayout({
  title,
  description,
  children,
  Navbar,
  Footer,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={poppins.className}>{Navbar}</nav>
      <main className={poppins.className}>{children}</main>
      <footer>{Footer}</footer>
    </>
  );
}
