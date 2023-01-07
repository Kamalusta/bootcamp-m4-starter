import React, { Component } from 'react';
import store from '../../store';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: '',
        movies: []
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=96295cdc`)
            .then(res => res.json())
            .then(data => store.dispatch({
                type: "ADD_MOVIES_TO_PAGE",
                payload: {
                    film: data.Search
                }
            })
            )
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Search movie by title:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="e.g. Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;