/* eslint-disable @typescript-eslint/no-explicit-any */
import { metadata } from "@/app/metadata";
import SideMenu from "../SideMenu/SideMenu";
import scss from "./Layout.module.scss";
import { useSession } from "next-auth/react";
import React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";

export default function Layout(props: any) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={scss.layout}>
        {session && <SideMenu />}
        <div className={scss.content}>{props.children}</div> {/* Styled content container */}
        <Footer />
      </div>
    </>
  );
}
