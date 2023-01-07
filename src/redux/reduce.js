const INITIAL_STATE = {
    movies: [
        // {
        //     imdbID: 'tt3896198',
        //     title: "Guardians of the Galaxy Vol. 2",
        //     year: 2017,
        //     poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

        // },
        // {
        //     imdbID: 'tt0068646',
        //     title: "The Godfather",
        //     year: 1972,
        //     poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

        // }
    ],
    favorities: []
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_MOVIES_TO_PAGE":
            state.movies = [...action.payload.film];
            break;
        case "ADD_MOVIE_TO_FAVORITE":
            if (!state.favorities.find((item) => item.id === action.payload.id))
                state.favorities.push(action.payload);
            break;
        case "DELETE_FROM_FAVORITES":
            const finded = state.favorities.filter((item) => item.id !== action.payload.id)
            // console.log(finded)
            state.favorities = finded
    }
    return state
}
export default reducer;