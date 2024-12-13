import { ListArtPieces } from "@/components/ListArtPieces";
import { PreviewArtPiece } from "@/components/PreviewArtPiece";
export default function Gallery({data}) {


    return (
        <ListArtPieces data={data}>
        </ListArtPieces>
    )
}