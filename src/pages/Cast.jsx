import React, { Component } from 'react';
import filmApi from '../servises/FilmsApi.js';
import Gallery from '../components/Gallery/Gallery'

class Cast extends Component {
  state = {
    castArray: []
  }

  async componentDidMount () {
    const film = await filmApi.fetchCast(this.props.location.state.id)
    this.setState({castArray: film.cast })
     
    
  }

  render() {
console.log("actors ",this.state.castArray);
   return (
     this.state.castArray && <Gallery arr={this.state.castArray} width="250px" height="300"/>
    //  <ul>
    //    {this.state.castArray.map(actor => {
            
    //        return <li key={actor.id}> <img width="100" height="150"
    //           src={actor.profile_path ? `https://image.tmdb.org/t/p/w400${actor.profile_path}` : 'https://s.poembook.ru/theme/54/00/46/67f79f84900690a80ce9ae299601911259dfa685.jpeg'} alt={actor.name} /> <h3>{ actor.name}</h3> </li>
    //       })}
    //     </ul>
      )
  }
}


export default Cast