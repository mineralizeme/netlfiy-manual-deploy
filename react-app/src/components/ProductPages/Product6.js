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
            <h1>Dr. Mercola's Ionic Ocean Minerals</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img
              src={"../img/sea-salt-product-7.jpg"}
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
            <h2>Model : Dr. Mercola's Ionic Ocean Minerals</h2>
            <h4 className="text-title text-uppercase mt-3 mb-2">
              Made By : <span className="text-uppercase">Dr. Mercola</span>
            </h4>
            <h4 className="text-white">
              <strong>
                Price : <span>$</span>
                17
              </strong>
            </h4>
            <p className="font-weight-bold mt-3 mb-0">
              Some Info About Product:
            </p>
            <p align="justify">
              It’s easy for you to grow robust, healthy, nutritious foods and
              gorgeous flowers – just put the necessary minerals back into the
              soil! Our Effortless Garden® Ionic Ocean Minerals is an advanced
              mineral product that utilizes essential elements from the ocean to
              give your plants exactly what they need for optimal growth. Many
              crop problems start with demineralized soil – leading to foods
              that are not vibrantly colored as they should be, tasteless, and
              lacking nutrition. The ocean provides all the minerals needed for
              plant growth, but the salt kills the soil and plants. Other
              mineral products dilute the ocean water, keeping the salt.
              Effortless Garden® Ionic Ocean Minerals uses a high-tech process
              to remove the salt and concentrate the minerals, for unmatched,
              outstanding quality.
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
