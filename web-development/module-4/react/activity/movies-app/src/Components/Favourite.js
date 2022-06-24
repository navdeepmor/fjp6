import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Favourite extends Component {

    constructor() {
        super();
        this.state = {
            genres: [],
            currGenres: 'All Genres'
        }
    }

  render() {
    const moviesArr = movies.results;
    // console.log(moviesArr);
    let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };

    let tmpArr = [];
    moviesArr.forEach((movieObj) => {
        if(!tmpArr.includes(genreids[movieObj.genre_ids[0]])) {
            tmpArr.push(genreids[movieObj.genre_ids[0]]);
        }
    })
    tmpArr.unshift('All Genres');
    console.log(tmpArr);

    return (
        <>
            <div className = "main">
                <div className = "row">
                    <div className = "col-3">
                        <ul className="list-group favourites-genres">
                            {/* <li className="list-group-item">All Genres</li> */}
                            {
                                tmpArr.map((genresName) => (
                                    genresName == this.state.currGenres ?
                                    <li className="list-group-item" style = {{ background: 'gray', color: 'white', fontWeight: 'bold' }}> { genresName } </li> :
                                    <li className="list-group-item" style = {{ background: 'white', color: 'gray' }}> { genresName } </li> 
                                ))
                            }
                        </ul>
                    </div>
                    <div className = "col-9 favourites-table">
                        <div className = "row">
                            <input type = "text" className = "input-group-text col" placeholder = 'Search' />
                            <input type = "number" className = "input-group-text col" placeholder = 'Rows Count' />
                        </div>
                        <div className = "row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Popularity</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        moviesArr.map((movieObj) => (                                               // use () to return html 
                                            <tr>
                                                <td> <img src = { `https://image.tmdb.org/t/p/original/${ movieObj.backdrop_path }` } className = "favourites-img" alt = { movieObj.title } style = { { width: '5rem' } } /> { movieObj.original_title } </td>
                                                <td> { genreids[ movieObj.genre_ids[0] ] } </td>
                                                <td> { movieObj.popularity } </td>
                                                <td> { movieObj.vote_average } </td>
                                                <td> <button type="button" className="btn btn-danger">Delete</button> </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
  }
}


                                                        /* ----- Routing  ------ */
/*
    Browser Router
        - It wraps the components & the components which are wrapped would gets the facility of routing. 

    2. Route  3. Switch  

    Note:
        1. npm install react-router-dom 

*/