import { useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation";


const url = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(url,  fetcher);
  const [ artPieceInfo, setArtPieceInfo] = useState([]);

  console.log(artPieceInfo)

  function handleToggleFavorite(slug) {
    setArtPieceInfo((artPieceInfo) => {
      const info = artPieceInfo.find((info) => info.slug === slug );

      if  (info) {
        return artPieceInfo.map((info) =>
          info.slug === slug ? { ...info, isLiked: !info.isLiked } : info
        ); 
      }
      return [ ...artPieceInfo, { slug, isLiked: true}];
    });
  }


  console.log("data: ", data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;



  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} handleToggleFavorite={handleToggleFavorite} data={data} artPieceInfo={artPieceInfo}/>
      <Navigation />
    </>
  );
}
