import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import "regenerator-runtime/runtime";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
