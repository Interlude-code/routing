import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';

export default function App({ Component, pageProps }: AppProps) {
      <AppCacheProvider {...pageProps}>
        <Component></Component>
      </AppCacheProvider>
}
