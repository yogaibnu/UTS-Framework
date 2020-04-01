import React, { Component } from 'react'
import {connect} from 'react-redux';

import {fetchMovie, setLoading} from '../../actions/searchActions';

export class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading();
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src="#movie-poster" className="thumbnail" alt="Poster"></img>
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">Movie Title</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> Movie Genre
                        </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> Movie Released
                        </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong> Movie Rated
                        </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> Movie IMDB Rating
                        </li>
                            <li className="list-group-item">
                                <strong>Director:</strong> Movie Director
                        </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> Movie Writer
                        </li>
                            <li className="list-group-item">
                                <strong>Actors:</strong> Movie Actors
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="cold-md-12">
                            <h3>About</h3>
                        About the movie
                        <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary">
                                View on IMDB
                        </a>
                            <a href="#" className="btn btn-default text-light">
                                Go Back To Search
                        </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovie, setLoading})(Movie);
