import React, { Component } from 'react'
// import { movies } from './getMovies'
import axios from 'axios'
import { getNodeText } from '@testing-library/react';

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            parr: [ 1 ],
            currPage: 1,
            movies: []
        }
        // console.log("inside constructor");
    }

    async componentDidMount() {
        // console.log("inside componentDidMount");
        const pageResult = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-us&page=${ this.state.currPage }`);
        let data = pageResult.data;
        // console.log(data);
        this.setState({                                                                                             // setState fn is async  
            movies: [ ...data.results ]
        })
    }

    pageChange = async () => {      
        // console.log(" page change is called ")                                                                      // why arrow fn? line 28 using this keyword 
        const pageResult = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-us&page=${ this.state.currPage }`);
        let data = pageResult.data;
        // console.log(data);
        this.setState({
            movies: [ ...data.results ]
        })
    }

    handlePrev = () => {
        // let tmpArr = [];
        // if(this.state.parr.length == 1) return;
        // for(let i = 1; i < this.state.parr.length; i++) {                                                           // we are not writing JSX here, we are making fn in class area i.e. we are not inside render method which restrict us writing loop in it
        //     tmpArr.push( i );
        // }

        if(this.state.currPage == 1) return;

        this.setState({
            // parr: [ ...tmpArr ],
            currPage: this.state.currPage - 1
        }, this.pageChange)                                                                                         // using callback to resolve issue at line 48 because of which it will first set the state & only then calls the pageChange
        // this.pageChange();                                                                                       // since setState is async therefore it will give us promise meanwhile move ahead for execution of pageChange, but currPage is not change 
        console.log(this.state.currPage);
    }

    handleNext = () => {
        this.setState({
            parr: [ ...this.state.parr, this.state.parr.length + 1 ],
            currPage: this.state.currPage + 1
        }, this.pageChange)
        // this.pageChange();
        console.log(this.state.currPage);
    }

    handleSelectPage = (pageNo) => {
        if(this.state.currPage != pageNo) {
            this.setState({ 
                currPage: pageNo
            }, this.pageChange)
        }
    }

    handleFavourites = (movieObj) => {
        let oldData = JSON.parse(localStorage.getItem('movies') || "[]")                                                  // in localStorage data stores as a string
        if(this.state.favourites.includes(movieObj.id)) {
            oldData = oldData.filter((movie) => 
                movie.id != movieObj.id
            )
        } else {
            oldData.push(movieObj);
        }
        console.log("inside handleFavourites", oldData);
        localStorage.setItem("movies", JSON.stringify(oldData));
    }

    render() {
        // console.log("inside render");
        // let moviesArr = movies.results;
        return (
            <>
                { 
                    this.state.movies.length == 0 ? 
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>:
                    <div>
                        <h3 className = 'text-center'> <strong> Trending </strong></h3>
                        <div className = 'movies-list'>
                            {
                                this.state.movies.map((movieObj) => (
                                    <div className="card movies-card" style = { { border: 'none' } } onMouseEnter = { () => this.setState({ hover: movieObj.id }) } onMouseLeave = { () => { this.setState({ hover: '' }) } } >
                                        <img src = {`https://image.tmdb.org/t/p/original${ movieObj.backdrop_path }`} className = "card-img-top movies-img" alt = {`${ movieObj.title }`}/>
                                        {/* <div className="card-body"> */}
                                            <h5 className="card-title movies-title">{ movieObj.original_title }</h5>
                                            {/* <p className="card-text movies-text">{ movieObj.overview }</p> */}
                                            <div className = "button-wrapper movies-button" style = { { display: 'flex', width: '100%', justifyContent: 'center' } }> 
                                                {
                                                    this.state.hover == movieObj.id &&
                                                    <a className="btn btn-primary movies-button" onClick = { () => this.handleFavourites(movieObj) }> Add to Favourites </a>
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
                                    <li className="page-item"><a className="page-link" onClick = { this.handlePrev }>Previous</a></li>
                                    {
                                        this.state.parr.map((value) => (
                                            <li key = { value } className="page-item"><a className="page-link" onClick = { () => this.handleSelectPage(value) }> { value } </a></li>    // if we would have use onClick = { this.handleSelectPage(value) } it in we would had made a direct call to avoid it we use arrow fn in which we provide fn defination 
                                        ))
                                    }
                                    <li className="page-item"><a className="page-link" onClick = { this.handleNext } >Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                }
            </>
        )
    }
}

                                                    /* ----- Life Cycle Methods (class components) ----- */ 
/*  
    Mounting                                         Updating                                           Unmounting 
        - when first time component                     - when state update & rerender                      -  when component is remored from DOM
          is applied on DOM

            constructor()                                    render()                                           componentWillUnmount()
                |                                              |                                                        
             render()                                   componentDidUpdate()                                    
                |                                                         
        componentDidMount()  
        
                                                          
        *   constructor   -->   render   -->   componentDidMout   -->  render   -->   componentWillUnmount
                                                                      /      \
                                                                      \      / 
                                                                    componentDidUpdate   
                                                              
    Note:
                                    usecase
                                    -------
        componentDidMount :        side effect                                                                  (where we may need to wait ex: API call)
*/