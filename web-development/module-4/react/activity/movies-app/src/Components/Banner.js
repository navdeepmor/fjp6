// import { movies } from './getMovies'
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    // let movie = movies.results;
    let movie = {  };
    return (
        <>
            {
                movie === ''?
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card" style = { { width: '18rem', margin: '2rem' } }>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
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