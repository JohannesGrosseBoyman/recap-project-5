import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({
  data,
  handleToggleFavorite,
  artPieceInfo,
}) {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomArtPiece = data[randomIndex];

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: gray;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
  `;

  return (
    <Card>
      <Image
        width={150}
        height={150}
        src={randomArtPiece.imageSource}
        alt={`${randomArtPiece.title} by ${randomArtPiece.artist}`}
      />
      <h2>{randomArtPiece.artist}</h2>
      <FavoriteButton
        handleToggleFavorite={handleToggleFavorite}
        slug={randomArtPiece.slug}
        isLiked={
          artPieceInfo.find((info) => info.slug === randomArtPiece.slug)
            ?.isLiked || false
        }
      />
    </Card>
  );
}

// randomIndex - math.random data.lenght - integer
// return Card (picture, name) - data[randomIndex]
