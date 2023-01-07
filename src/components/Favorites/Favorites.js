import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: 'New list',
        movies: [
            // { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ],
        linkId: ""
    }
    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({ movies: state.favorities })
        })
    }
    DeleteMovie = (id) => {
        store.dispatch({
            type: "DELETE_FROM_FAVORITES",
            payload: {
                id: id
            }
        })
    }
    SaveList = (e) => {
        e.target.style.display = "none";
        const link = document.querySelector(".list_link");
        link.style.display = "block";
        const info = {
            title: this.state.title,
            movies: this.state.movies
        };

        fetch("https://acb-api.algoritmika.org/api/movies/list", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => this.setState({ linkId: data.id }))
    }

    render() {
        return (
            <div className="favorites">
                <input value={this.state.title} className="favorites__name" onChange={(e) => this.setState({ title: e.target.value })} />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return (<li key={item.id}>{item.title} ({item.year}) <button onClick={() => this.DeleteMovie(item.id)}>X</button></li>
                        )
                    })}
                </ul>

                <button onClick={(e) => this.SaveList(e)} type="button" className="favorites__save" disabled={!this.state.title} >Save list</button>
                <Link className='list_link' to={"/list/" + this.state.linkId} >go to list</Link>
            </div>
        );
    }
}

export default Favorites;