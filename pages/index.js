import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="./gallery">Gallery</Link> <br/>
      <Link href="./detail">Detail</Link> <br/>
      <Link href="./favorite">Favorite</Link> <br/>
      <Link href="./spotlight">Spotlight</Link>
    </div>
  );
}
