import React from "react";
import {Switch, Route} from 'react-router-dom';



import Beranda from "./pages/Beranda";
import Galeri from "./pages/Galeri";
import HariBesar from "./pages/HariBesar";

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/galeri" component={Galeri} />
        <Route path="/haribesar" component={HariBesar} />

    </Switch>
)
export default Utama;