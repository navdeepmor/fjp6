// import { movies } from './getMovies'
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    // let movie = movies.results;
    let movie = { backdrop_path: "191223-end-of-decade-cinema-main-kh.webp", original_title: "WONDER WOMAN", title: "wonder-woman" };
    return (
        <>
            {
                movie === ''?
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card" style = { { width: '18rem', margin: '2rem' } }>
                    <img src = {`C:\\Users\\navde\\OneDrive\\Desktop\\${ movie.backdrop_path }`} className = "card-img-top banner-img" alt = {`${ movie.title }`}/>
                    {/* <div className="card-body"> */}
                        <h5 className="card-title banner-title">{ movie.original_title }</h5>
                        <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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