"use client";

import "./globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import StyledComponentsRegistry from "./registry";
import WatchlistProvider from "./(home)/Context/WatchList";
import Head from "next/head";

const metadata = {
  title: "Puna Cinema",
  description: "The new list of movies",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WatchlistProvider>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
          </Head>
          <html lang="en">
            <body>{children}</body>
          </html>
        </StyledComponentsRegistry>
      </QueryClientProvider>
    </WatchlistProvider>
  );
}
