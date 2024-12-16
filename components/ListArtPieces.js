import { PreviewArtPiece } from "./PreviewArtPiece.js";
import styled from "styled-components";

export function ListArtPieces({ data }) {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  return (
    <Container>
      {data.map((artPiece) => (
        <PreviewArtPiece
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
