import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {
  render() {
    let movie = movies.result;
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
                                <div className="card movies-card">
                                    <img src = {`https://res.cloudinary.com/ybmedia/image/upload/${ movieObj.backdrop_path }`} className = "card-img-top movies-img" alt = {`${ movieObj.title }`} style = { { height: '40vh', width: '20vw' } } />
                                    {/* <div className="card-body"> */}
                                        <h1 className="card-title movies-title">{ movieObj.original_title }</h1>
                                        {/* <p className="card-text movies-text">{ movieObj.overview }</p> */}
                                        <div className = "button-wrapper">
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    {/* </div> */}
                                </div> 
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
  }
}
