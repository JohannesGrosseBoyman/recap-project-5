import { PreviewArtPiece } from "./PreviewArtPiece.js";
import styled from "styled-components";

export function ListArtPieces({ data, handleToggleFavorite, artPieceInfo }) {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  return (
    <Container>
      {data.map((artPiece) => (
        <PreviewArtPiece
        artPieceInfo={artPieceInfo}
        handleToggleFavorite={handleToggleFavorite}
          key={data.slug}
          image={artPiece.imageSource}
          artist={artPiece.artist}
          title={artPiece.name}
          slug={artPiece.slug}
        ></PreviewArtPiece>
      ))}
    </Container>
  );
}
