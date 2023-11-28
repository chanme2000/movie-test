import { Component } from 'react';
import './App.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import History from './routes/History';

class App extends Component {
  render() { 
    return (
      <>
        <Navigation />
        <History />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/movie-detail' element={<Detail />} />
        </Routes>
      </>
    );
  }
}
 
export default App;