import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Favourite extends Component {

    constructor() {
        super();
        this.state = {
            genres: [],
            currGenres: 'All Genres',
            movies: [],
            currText: '',
            limit: 5,
            currPage: 1
        }
    }

    componentDidMount() {
        let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
        let data = JSON.parse(localStorage.getItem('movies') || '[]');
        let tmpArr = [];
        data.forEach((movieObj) => {
            if(!tmpArr.includes(genreids[movieObj.genre_ids[0]])) {
                tmpArr.push(genreids[movieObj.genre_ids[0]]);
            }
        })
        tmpArr.unshift('All Genres');

        this.setState({
            genres: [...tmpArr],
            movies: [...data]
        })
    }

    handleGenreChange = (genresName) => {                                                                           // arrow fn is use so that it can get the this of the class
        this.setState({
            currGenres: genresName
        })
    }

    handleDelete = (movieId) => {
        let tmpArr =  this.state.movies.filter((movie) => movie.id != movieId)
        localStorage.setItem("movies", JSON.stringify(tmpArr));

        this.setState({
            movies: [...tmpArr]
        })
    }

    sortPopularityDesc = () => {
        let tmpArr = this.state.movies;
        tmpArr.sort(function(objA, objB) {
            return objB.popularity - objA.popularity;
        })
        this.setState({
            movies: [...tmpArr]
        })
    }

    sortPopularityAsc = () => {
        let tmpArr = this.state.movies;
        tmpArr.sort(function(objA, objB) {
            return objA.popularity - objB.popularity;
        })

        this.setState({
            movies: [...tmpArr]
        })
    }

    sortRatingDesc = () => {
        let tmpArr = this.state.movies;
        tmpArr.sort(function(objA, objB) {
            return objB.vote_average - objA.vote_average;
        })

        this.setState({
            movies: [...tmpArr]
        })
    }

    sortRatingAsc = () => {

    }

    handlePageChange = (pageNo) => {
        this.setState({
            currPage: pageNo
        })
    }


  render() {
    let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };

    let filterArr = [];
    if(this.state.currGenres == 'All Genres') {
        filterArr = this.state.movies;
    } else {
        filterArr = this.state.movies.filter((movieObj) => 
            genreids[movieObj.genre_ids[0]] == this.state.currGenres 
        )   
    }

    if(this.state.currText != '') {
        filterArr = this.state.movies.filter((movieObj) => {
            let title = movieObj.original_title.toLowerCase();
            return title.includes(this.state.currText.toLowerCase());
        })
    }

    let pages = Math.ceil(filterArr.length/this.state.limit);
    let pagearr = [ 1 ];
    for(let i = 2; i <= pages; i++) {
        pagearr.push(i);
    }
    let si = (this.state.currPage - 1)*this.state.limit;
    let ei = si + this.state.limit;
    filterArr = filterArr.slice(si, ei);

    return (
        <>
            <div className = "main">
                <div className = "row">
                    <div className = "col-lg-3 col-sm-12">                                                                         {/* to make it responsive we can col-sm-12 which would let it to change it width to 12 for small screen */}
                        <ul className="list-group favourites-genres">
                            {/* <li className="list-group-item">All Genres</li> */}
                            {
                                this.state.genres.map((genresName) => (
                                    genresName == this.state.currGenres ?
                                    <li className="list-group-item" style = {{ background: 'gray', color: 'white', fontWeight: 'bold' }}> { genresName } </li> :
                                    <li className="list-group-item" style = {{ background: 'white', color: 'gray' }} onClick = { () => this.handleGenreChange(genresName) } > { genresName } </li> 
                                ))
                            }
                        </ul>
                    </div>
                    <div className = "col-lg-9 favourites-table col-sm-12">
                        <div className = "row">
                            <input type = "text" className = "input-group-text col" placeholder = 'Search' value = { this.state.currText } onChange = { (e) => this.setState({ currText: e.target.value }) } />
                            <input type = "number" className = "input-group-text col" placeholder = 'Rows Count' value = { this.state.limit } onChange = { (e) => this.setState({ limit: e.target.value }) } />
                        </div>
                        <div className = "row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col"><i className="fa-solid fa-sort-up" onClick = { this.sortPopularityDesc } />Popularity<i className="fa-solid fa-sort-down" onClick = { this.sortPopularityAsc } ></i></th>
                                        <th scope="col"><i className="fa-solid fa-sort-up" onClick = { this.sortRatingDesc } />Rating<i className="fa-solid fa-sort-down" onClick = { this.sortRatingAsc } ></i></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterArr.map((movieObj) => (                                               // use () to return html 
                                            <tr>
                                                <td> <img src = { `https://image.tmdb.org/t/p/original/${ movieObj.backdrop_path }` } className = "favourites-img" alt = { movieObj.title } style = { { width: '5rem' } } /> { movieObj.original_title } </td>
                                                <td> { genreids[ movieObj.genre_ids[0] ] } </td>
                                                <td> { movieObj.popularity } </td>
                                                <td> { movieObj.vote_average } </td>
                                                <td> <button type="button" className="btn btn-danger" onClick = { () => this.handleDelete(movieObj.id) } >Delete</button> </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
                                {
                                    pagearr.map((pageNo) => (<li className="page-item"><a className="page-link" onClick = { () => this.handlePageChange(pageNo) } >{ pageNo }</a></li>))
                                }
                                {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
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