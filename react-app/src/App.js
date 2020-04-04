import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Video from "./components/Video";
import About from "./components/About";
import Product1 from "./components/ProductPages/Product1";
import Product2 from "./components/ProductPages/Product2";
import Product3 from "./components/ProductPages/Product3";
import Product4 from "./components/ProductPages/Product4";
import Product5 from "./components/ProductPages/Product5";
import Product6 from "./components/ProductPages/Product6";
import Product7 from "./components/ProductPages/Product7";
import Product8 from "./components/ProductPages/Product8";
import Product5000 from "./components/ProductPages/Product5000";
import tag from "./data.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/store" component={ProductList} />
          <Route exact path="/" component={ProductList} />
          {/* <Route path="/details" component={Details} /> */}
          <Route path="/checkout" component={Cart} />
          <Route path="/video" component={Video} />
          <Route path="/about" component={About} />
          <Route path="/bajagold" component={Product1} />
          <Route path="/seacrop" component={Product2} />
          <Route path="/sea90" component={Product3} />
          <Route path="/ocean-solution" component={Product4} />
          <Route path="/gropal" component={Product5} />
          <Route path="/dr-mercola" component={Product6} />
          <Route path="/ocean-treasure" component={Product7} />
          <Route path="/sea-energy-agriculture" component={Product8} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
