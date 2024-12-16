import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export function PreviewArtPiece({ image, artist, title, slug }) {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: gray;
    border-radius: 8px;
    margin: 10px;
    width: 30%;
    padding: 10px;
  `;

  const StyledLink = styled(Link)`
  text-decoration: none
  `

  return (
    <StyledLink href={`/art/${slug}`}>
    <Card>
      <h2>{title}</h2>
      <Image width={50} height={50} src={image} alt={`${title} by ${artist}`} />
      <p>{artist}</p>
    </Card>
    </StyledLink>
  );
}
