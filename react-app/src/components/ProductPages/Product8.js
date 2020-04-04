import React, { Component } from "react";
// import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default class Details extends Component {
  render() {
    return (
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-white my-5">
            <h1>Sea Energy Agriculture by Dr. Maynard Murray</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img
              src={"../img/sea-salt-product-9.jpg"}
              style={{
                // width: "10vw",
                // height: "20vh",
                display: "flex",
                margin: "auto",
              }}
              className="img-fluid"
              alt="product"
            />
          </div>
          {/* product text */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h2>Model : Sea Energy Agriculture by Dr. Maynard Murray</h2>
            <h4 className="text-title text-uppercase mt-3 mb-2">
              Made By :{" "}
              <span className="text-uppercase">Acres USA Publishing</span>
            </h4>
            <h4 className="text-white">
              <strong>
                Price : <span>$</span>
                18
              </strong>
            </h4>
            <p className="font-weight-bold mt-3 mb-0">
              Some Info About Product:
            </p>
            <p align="justify">
              Maynard Murray was a medical doctor who researched the crucial
              importance of minerals - especially trace elements - to plants and
              animals. Beginning in 1938 and continuing through the 1950s, Dr.
              Murray used sea solids - mineral salts remaining after water is
              evaporated from ocean water - as fertilizer on a variety of
              vegetables, fruits and grains. His extensive experiments
              demonstrated repeatedly and conclusively that plants fertilized
              with sea solids and animals fed sea-solid-fertilized feeds grow
              stronger and more resistant to disease. Sea Energy Agriculture
              recounts Murray's experiments and presents his astounding
              conclusions. The work of this eco-pioneer was largely ignored
              during his lifetime, and his book became a lost classic -
              out-of-print for more than 25 years. Now this rare volume is once
              again available, with a new foreward and afterword by the founder
              of Acres U.S.A., Charles Walters.
            </p>
            {/* buttons */}
            <div>
              <Link to="/store">
                <ButtonContainer>Back to Store</ButtonContainer>
              </Link>

              <Link to="/checkout">
                <ButtonContainer>go to cart</ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
