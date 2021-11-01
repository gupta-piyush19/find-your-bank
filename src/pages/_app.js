import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { QueryClientProvider, QueryClient, quer } from "react-query";
import "regenerator-runtime/runtime";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
