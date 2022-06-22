import { movies } from './getMovies'
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    let banner = movies.results[0];
    return (
        <>
            {
                banner === ''?
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card" style = { { outline: 'none', border: 'none' } }>
                    <img src = {`https://image.tmdb.org/t/p/original${ banner.backdrop_path }`} className = "card-img-top banner-img" alt = {`${ banner.title }`}/>
                    {/* <div className="card-body"> */}
                        <h1 className="card-title banner-title">{ banner.original_title }</h1>
                        <p className="card-text banner-text">{ banner.overview }</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    {/* </div> */}
                </div>
            }
        </>
    )
  }
}


/*
    Note: 
        1. in JSX it's className rather than class 

    Remember:
        line 7: in react tag need to be selfclosing
*/