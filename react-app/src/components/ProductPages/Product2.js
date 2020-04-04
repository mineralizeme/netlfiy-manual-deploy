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
            <h1>Sea-Crop Ocean Mineral Fertilizer</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img
              src={"../img/sea-salt-product-10.jpg"}
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
            <h2>Model : Sea-Crop Ocean Mineral Fertilizer</h2>
            <h4 className="text-title text-uppercase mt-3 mb-2">
              Made By :{" "}
              <span className="text-uppercase">Rue Creek Organics, LLC</span>
            </h4>
            <h4 className="text-white">
              <strong>
                Price : <span>$</span>
                16
              </strong>
            </h4>
            <p className="font-weight-bold mt-3 mb-0">
              Some Info About Product:
            </p>
            <p align="justify">
              SEA-CROP is a soil stimulant and mineral feed supplement for
              animals. SEA-CROP has a wide variety of benefits and a composition
              that makes it unique. The benefits that most often attract large
              farmers and production growers are the yield improvement, stress
              tolerance and soil building capabilities. CSA farmers, gardeners
              and homesteaders are drawn to the nutritional improvements,
              fantastic taste and better keeping qualities of the food.
              Ornamental growers and gardeners enjoy the lush vegetation and
              bountiful flowers whereas nursery owners find the disease
              resistance and stress tolerance helpful in delivering quality
              products. However, it is the composition of the Pacific Ocean
              derived trace minerals and carbon compounds create an exceptional
              synergy worth exploring.
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
