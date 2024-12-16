import Link from "next/link";
import Spotlight from "@/components/Spotlight";

export default function HomePage({data}) {
  
  
  
  return (
    <div>
      <Link href="./gallery">Gallery</Link> <br/>
      <Link href="./detail">Detail</Link> <br/>
      <Link href="./favorite">Favorite</Link> <br/>
      <Spotlight data={data} />
    </div>
  );
}
