import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';


class App extends Component {
  componentDidMount(){
    
  }
  
  render() {
    const url = 'https://vimeo.com/album/5888655/video/303579521';

    return (
      <div className="App">
        <h1>Hello from your website</h1>
        <ReactPlayer url={url} playing={true}/>
        {/* <video controls width="640">
          <source src={url} type="video/mp4"/>
        </video> */}
      </div>
    );
  }
}

export default App;
