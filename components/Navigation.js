import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  const NavBar = styled.div`
     position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: #333; 
    padding: 10px 0;
  `;

  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover{
    font-weight: bold;
}
  `

  return (
    <NavBar>
      <StyledLink href="./">Spotlight</StyledLink>
      <StyledLink href="./gallery">Art Pieces</StyledLink>
    </NavBar>
  );
}
