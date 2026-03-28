class FavoritesManager {
    favorites = [];

    addToFavorites(data) {
        this.favorites.push(data);
    }

    getAllFavorites() {
        return this.favorites;
    }
}

export default FavoritesManager