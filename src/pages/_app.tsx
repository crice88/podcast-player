import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../core/components/layout";
import "../../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
