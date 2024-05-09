import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import profilePic from "../../public/me.jpg";
import Script from 'next/script';
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { ThemeModeScript } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import {black} from "next/dist/lib/picocolors";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mikael JUILLET",
  description: "Portfolio of Mikael JUILLET",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className="light">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title className="border-gray-200">Mikael JUILLET</title>
        <ThemeModeScript />
      </Head>

      <body className={inter.className}>
      <Flowbite>
      <Navbar fluid rounded>
        <NavbarBrand href="/">
          <Image className="w-10 h-10 rounded-full mr-2" src={profilePic} alt="Mikael JUILLET"/>
          <span className="self-center whitespace-nowrap text-xl font-semibold ">Mikael JUILLET</span>
        </NavbarBrand>
        <NavbarToggle/>
        <NavbarCollapse>
          <NavbarLink href="/" active>Home</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <div className="p-4 bg-gray-100">
        <main>
          {children}
        </main>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2024 Mikael Juillet
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.linkedin.com/in/mikael-juillet/" className="text-gray-500 hover:text-gray-900 ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-linkedin" viewBox="0 0 16 16">
                <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
              <span className="sr-only">Linkedin account</span>
            </a>
            <a href="https://github.com/JuilletMikael" className="text-gray-500 hover:text-gray-900 ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-github" viewBox="0 0 16 16">
                <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="mailto:juillet.mikael@gmail.com"
               className="text-gray-500 hover:text-gray-900 ms-5 align-middle">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                   viewBox="0 0 24 24">
                <path
                    d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z"/>
                <path
                    d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z"/>
              </svg>
              <span className="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
      <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </Flowbite>
      </body>
      </html>
  );
}
