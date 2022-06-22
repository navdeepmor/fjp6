import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            parr: [ 1 ]
        }
    }

    render() {
        let movie = movies.results;
        return (
            <>
                { 
                    movie.length == 0 ? 
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>:
                    <div>
                        <h3 className = 'text-center treanding-heading'> <strong> Trending </strong></h3>
                        <div className = 'movies-list'>
                            {
                                movie.map((movieObj) => (
                                    <div className="card movies-card" style = { { border: 'none' } } onMouseEnter = { () => this.setState({ hover: movieObj.id }) } onMouseLeave = { () => { this.setState({ hover: '' }) } } >
                                        <img src = {`https://image.tmdb.org/t/p/original${ movieObj.backdrop_path }`} className = "card-img-top movies-img" alt = {`${ movieObj.title }`}/>
                                        {/* <div className="card-body"> */}
                                            <h5 className="card-title movies-title">{ movieObj.original_title }</h5>
                                            {/* <p className="card-text movies-text">{ movieObj.overview }</p> */}
                                            <div className = "button-wrapper movies-button" style = { { display: 'flex', width: '100%', justifyContent: 'center' } }> 
                                                {
                                                    this.state.hover == movieObj.id &&
                                                    <a className="btn btn-primary movies-button"> Add to Favourites </a>
                                                } 
                                            </div>
                                        {/* </div> */}
                                    </div> 
                                ))
                            }
                        </div>
                        <div style = { { display: 'flex', justifyContent: 'center' } }>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    {
                                        this.state.parr.map((value) => (
                                            <li className="page-item"><a className="page-link" href="#"> { value } </a></li>
                                        ))
                                    }
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                }
            </>
        )
    }
}
