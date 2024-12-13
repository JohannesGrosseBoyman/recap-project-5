import GlobalStyle from "../styles";
import useSWR from "swr";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(url,  fetcher);

  console.log("data: ", data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;



  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </>
  );
}
