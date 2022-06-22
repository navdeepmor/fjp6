// import { movies } from './getMovies'
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    // let movie = movies.results;
    let movie = { backdrop_path: "https://img.etimg.com/thumb/msid-90044567,width-650,imgsize-88974,,resizemode-4,quality-100/the-batman.jpgp", original_title: "BATMAN", title: "BATMAN BEGINS", overview: "Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939." };
    return (
        <>
            {
                movie === ''?
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card" style = { { outline: 'none', border: 'none' } }>
                    <img src = {`${ movie.backdrop_path }`} className = "card-img-top banner-img" alt = {`${ movie.title }`}/>
                    {/* <div className="card-body"> */}
                        <h1 className="card-title banner-title">{ movie.original_title }</h1>
                        <p className="card-text banner-text">{ movie.overview }</p>
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