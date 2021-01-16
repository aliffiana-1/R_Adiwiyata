import React from "react";
import Utama from "./Utama";
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div><hr />
        <Link to="/">Beranda</Link>
        <Link to="/galeri">  |Gallery</Link>
        <Link to="/haribesar">  |Hari Besar</Link>

        <p><Utama/></p>
      </div>
    )
  }
}

export default App;
