import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({ data }) {
  console.log("artist: ", data);
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = data.find((art) => art.slug === slug);

  console.log(artPiece);
  return (
    <div>
      <h1>{artPiece.name}</h1>
      <Image
        width={250}
        height={250}
        src={artPiece.imageSource}
        alt={`${artPiece.name} by ${artPiece.artist}`}
      />
      <p>{artPiece.artist}, {artPiece.year}, {artPiece.genre}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
