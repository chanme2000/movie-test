import axios from 'axios';
import { Component } from 'react';

import './Home.css';
import Movies from '../components/Movies';

class Home extends Component {
  state = { 
    isLoading : true,
    movies : []
  };
  getMovies = async () => {
    const { 
      data : {
        data : { movies },
      },
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    this.setState({ movies, isLoading : false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() { 
    const {isLoading, movies} = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader_text'>loading...</span>
          </div> ) : (
            <div className="movies">
              {
                movies.map( movie => {
                console.log(movie);
                return <Movies
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              })} 
            </div>
          )}
      </section>
    );
  }
}
 
export default Home;