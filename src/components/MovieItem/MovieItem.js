import React, { Component } from 'react';
import store from '../../store';
import './MovieItem.css';

class MovieItem extends Component {
    SendMovie = () => {
        store.dispatch({
            type: "ADD_MOVIE_TO_FAVORITE",
            payload: {
                id: this.props.imdbID,
                title: this.props.Title,
                year: this.props.Year
            }
        })

    }
    render() {
        const { Title, Year, Poster, imdbID } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button onClick={() => this.SendMovie()} type="button" className="movie-item__add-button">Add to list</button>
                </div>
            </article>
        );
    }
}

export default MovieItem;