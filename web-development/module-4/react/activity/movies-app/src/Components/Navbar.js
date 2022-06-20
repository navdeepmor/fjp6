import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style = { { display: 'flex', background: 'lightgray', padding: '0.5rem' } }>                                               
        <h1>Movies App</h1>
        <h2 style = { { marginLeft: '2rem', marginTop: '1.75rem' } }>Favourites</h2>
      </div>
    )
  }
}
