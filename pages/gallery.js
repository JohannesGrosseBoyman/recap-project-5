import { ListArtPieces } from "@/components/ListArtPieces";
import { PreviewArtPiece } from "@/components/PreviewArtPiece";
export default function Gallery({data, handleToggleFavorite, artPieceInfo}) {


    return (
        <ListArtPieces artPieceInfo={artPieceInfo} data={data} handleToggleFavorite={handleToggleFavorite}>
        </ListArtPieces>
    )
}