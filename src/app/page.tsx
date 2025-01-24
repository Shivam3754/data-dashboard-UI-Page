"use client";
import Dashboard from "./dashboard/page";
import { useSession } from "next-auth/react";
import Login from "@/components/Login/Login";
import React, { ReactElement } from "react";
import scss from "@/components/Layout/Layout.module.scss"


function Home(): ReactElement {
  const { data: session } = useSession();
  
  return (
    <main className={scss.main}>
        {session ? (
          <>
            <Dashboard />
          </>
        ) : (
          <Login />
        )}
    </main>
  );
}

export default Home;