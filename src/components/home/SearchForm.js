import React, { Component } from 'react'

export class SearchForm extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid mt-5 text-center">
                <div class="container">
                    <h1 class="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a movie, TV series..
                    </h1>
                    <form id="searchForm">
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series..">
                        </input>
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchForm
