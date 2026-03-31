class FavoritesManager {
    favorites = [];

    addToFavorites(data) {
        if (this.favorites.some((elm) => {
            if (elm === data) {
                return true;
            }
        }) == true) {
            console.warn(`${data} already in favorites`)
        }
        this.favorites.push(data);
    }

    getAllFavorites() {
        return this.favorites;
    }
}

export default FavoritesManager