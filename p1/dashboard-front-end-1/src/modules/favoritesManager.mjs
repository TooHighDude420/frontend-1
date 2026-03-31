class FavoritesManager {
    favorites = [];

    addToFavorites(data) {
        if (this.favorites.some(elm => elm === data)) {
            let index = this.favorites.indexOf(data);
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(data);
        }
    }

    getAllFavorites() {
        return this.favorites;
    }
}

export default FavoritesManager