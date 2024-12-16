export default function FavoriteButton({ handleToggleFavorite, slug, isLiked }) {

    return (
<button onClick={() =>handleToggleFavorite(slug)}> { isLiked? "Remove from favorites" : "Add to favorites"} </button>
    )
}

// create isLiked state in _app
// create function handleToggleFavorite in _app
// create component FavoriteButton recieve { slug, onFavorite }
// add FavoriteButton to spotlight, gallery, [slug]


